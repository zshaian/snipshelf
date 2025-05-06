'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function toggleBookmark(snippetId: string) {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  if (authError) {
    throw new Error('User not authenticated');
  }

  // Check if it's already bookmarked
  const { data: existingBookmark } = await supabase
    .from('bookmarks')
    .select('id')
    .eq('user_id', user.id)
    .eq('snippet_id', snippetId)
    .maybeSingle();

  if (existingBookmark) {
    // Unbookmark
    await supabase.from('bookmarks').delete().eq('id', existingBookmark.id);
  } else {
    // Bookmark
    await supabase.from('bookmarks').insert({
      user_id: user.id,
      snippet_id: snippetId,
    });
  }

  revalidatePath('/');
}
