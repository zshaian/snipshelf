import type { SnippetProps } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { PostgrestError } from '@supabase/supabase-js';

export async function getSnippetInfo(id: string): Promise<SnippetProps> {
  const supabase = await createClient();
  const {
    data,
    error,
  }: { data: SnippetProps | null; error: PostgrestError | null } =
    await supabase
      .from('snippets')
      .select('*, profiles!inner(name, avatar)')
      .eq('id', id)
      .single();

  if (error) {
    console.error(error.message);
    // TODO: handle this better with a toast or something similar.
    throw new Error('Something Went Wrong');
  }
  if (!data) {
    console.error(`no snippet found with an id of ${id}`);
    // TODO: handle this better with a toast or something similar.
    throw new Error('Something Went Wrong');
  }

  return data;
}
