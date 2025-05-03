import type { PostgrestError } from '@supabase/supabase-js';
import type { SnippetCardProps } from '@/types';
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
}: GetSnippetListProps): Promise<Array<SnippetCardProps>> {
  const from = (page - 1) * SNIPPETS_PER_PAGE;
  const to = from + 8;

  const supabase = await createClient();
  let snippetListQuery = supabase
    .from('snippets')
    .select('*, profiles!inner(name, avatar)')
    .order('created_at', { ascending: false })
    .range(from, to);

  if (title)
    snippetListQuery = snippetListQuery.ilike(
      'title',
      `%${title.toLowerCase()}%`
    );
  if (language)
    snippetListQuery = snippetListQuery.eq('language', language.toLowerCase());

  const {
    data,
    error,
  }: {
    data: Array<SnippetCardProps> | null;
    error: PostgrestError | null;
  } = await snippetListQuery;

  if (error) {
    console.error(error.message);
    // TODO: handle this better with a toast or something similar.
    throw new Error('Something Went Wrong');
  }

  return data ?? [];
}

export async function getUserSnippetList({
  title,
  language,
  page,
  id,
}: GetSnippetListProps & { id: string }): Promise<Array<SnippetCardProps>> {
  const from = (page - 1) * SNIPPETS_PER_PAGE;
  const to = from + 8;

  const supabase = await createClient();
  let snippetListQuery = supabase
    .from('snippets')
    .select('*, profiles!inner(name, avatar)')
    .eq('user_id', id)
    .order('created_at', { ascending: false })
    .range(from, to);

  if (title)
    snippetListQuery = snippetListQuery.ilike(
      'title',
      `%${title.toLowerCase()}%`
    );
  if (language)
    snippetListQuery = snippetListQuery.eq('language', language.toLowerCase());

  const {
    data,
    error,
  }: {
    data: Array<SnippetCardProps> | null;
    error: PostgrestError | null;
  } = await snippetListQuery;

  if (error) {
    console.error(error.message);
    // TODO: handle this better with a toast or something similar.
    throw new Error('Something Went Wrong');
  }

  return data ?? [];
}
