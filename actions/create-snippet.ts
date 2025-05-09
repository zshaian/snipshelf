'use server';

import type { CreateSnippetPropsForm } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function createSnippet({
  title,
  description,
  language,
  tags,
  code,
}: CreateSnippetPropsForm) {
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    console.error(authError?.message);
    redirect('/login');
  }

  const { error } = await supabase
    .from('snippets')
    .insert([{ user_id: user.id, title, description, language, tags, code }]);

  if (error) {
    // TODO: handle this better with a toast or something similar.
    console.error('Error inserting data:', error);
    throw new Error(error.message);
  }

  redirect('/');
}
