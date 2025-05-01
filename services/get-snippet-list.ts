import type { PostgrestError } from '@supabase/supabase-js';
import type { SnippetProps } from '@/types';
import { SNIPPETS_PER_PAGE } from '@/constants';
import { createClient } from '@/utils/supabase/server';

type GetSnippetListProps = {
  title: string;
  language: string;
  page: number;
};

export async function getSnippetList({
  title,
  language,
  page,
}: GetSnippetListProps): Promise<Array<SnippetProps>> {
  const from = (page - 1) * SNIPPETS_PER_PAGE;
  const to = from + 8;

  const supabase = await createClient();
  let snippetListQuery = supabase
    .from('snippets')
    .select('*')
    .order('created_at', { ascending: false })
    .range(from, to);

  if (title) snippetListQuery = snippetListQuery.ilike('title', `%${title}%`);
  if (language) snippetListQuery = snippetListQuery.eq('language', language);

  const {
    data,
    error,
  }: {
    data: Array<SnippetProps> | null;
    error: PostgrestError | null;
  } = await snippetListQuery;

  if (error) {
    console.error(error.message);
    // TODO: handle this better with a toast or something similar.
    throw new Error('Something Went Wrong');
  }

  return data ?? [];
}
