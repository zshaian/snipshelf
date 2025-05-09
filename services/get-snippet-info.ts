import type { SnippetProps } from '@/types';
import { createClient } from '@/utils/supabase/server';
import type { PostgrestError } from '@supabase/supabase-js';

export async function getSnippetInfo(id: string): Promise<SnippetProps> {
  const supabase = await createClient();
  const {
    data,
    error,
  }: { data: SnippetProps | null; error: PostgrestError | null } =
    await supabase
      .from('snippets')
      .select('*, profiles!inner(user_id, name, avatar)')
      .eq('id', id)
      .single();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data: bookmarkSnippet, error: bookmarkError } = await supabase
      .from('bookmarks')
      .select('snippet_id')
      .eq('user_id', user.id);

    if (bookmarkError) {
      console.error(
        'there was a problem getting the snippet info',
        bookmarkError
      );
      throw new Error('something Went wrong', bookmarkError);
    }

    if (bookmarkSnippet && data) {
      return {
        ...data,
        isBookmarked: bookmarkSnippet.some(
          (b) => Number(b.snippet_id) === Number(id)
        ),
      };
    }
  }

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
