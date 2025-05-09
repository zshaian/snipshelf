'use server';

import type { EditSnippetPropsForm } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function editSnippet({
  id,
  title,
  description,
  language,
  tags,
  code,
}: EditSnippetPropsForm) {
  const supabase = await createClient();
  const { error } = await supabase
    .from('snippets')
    .update({ title, description, language, tags, code })
    .eq('id', id);

  if (error) {
    // TODO: handle this better with a toast or something similar.
    console.error('Error updating the snippet: ', error);
    throw new Error(error.message);
  }

  redirect('/');
}
