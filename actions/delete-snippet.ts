'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function deleteSnippet(snippetId: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('snippets')
    .delete()
    .eq('id', snippetId);

  if (error) {
    console.error('Error deleting snippet:', error);
    throw new Error(error.message);
  }

  redirect('/snippets');
}
