import type { PostgrestError } from '@supabase/supabase-js';
import type { SnippetCardProps } from '@/types';
import { SNIPPETS_PER_PAGE } from '@/constants';
import { createClient } from '@/utils/supabase/server';

type GetSnippetListProps = {
  title: string;
  language: string;
  page: number;
  filteredByUserId?: string;
  filteredByUserBookmarks?: string;
};

export async function getSnippetList({
  title,
  language,
  page,
  filteredByUserId,
  filteredByUserBookmarks,
}: GetSnippetListProps): Promise<Array<SnippetCardProps>> {
  const from = (page - 1) * SNIPPETS_PER_PAGE;
  const to = from + 8;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let filteredBookmarkedSnippetIds: Array<string> | null = null;

  if (filteredByUserBookmarks) {
    const { data: bookmarked, error: bookmarkedError } = await supabase
      .from('bookmarks')
      .select('snippet_id')
      .eq('user_id', filteredByUserBookmarks);

    if (bookmarkedError) {
      console.error(
        'something went wrong on getting the bookmarked error of the uder',
        bookmarkedError
      );
      return [];
    }

    filteredBookmarkedSnippetIds = bookmarked.map((b) => b.snippet_id) || [];

    if (filteredBookmarkedSnippetIds.length === 0) {
      return [];
    }
  }

  let snippetListQuery = supabase
    .from('snippets')
    .select('*, profiles!inner(user_id, name, avatar)')
    .order('created_at', { ascending: false })
    .range(from, to);

  if (filteredByUserId) {
    snippetListQuery = snippetListQuery.eq('user_id', filteredByUserId);
  }

  if (filteredBookmarkedSnippetIds) {
    snippetListQuery = snippetListQuery.in('id', filteredBookmarkedSnippetIds);
  }

  if (title) {
    snippetListQuery = snippetListQuery.ilike(
      'title',
      `%${title.toLowerCase()}%`
    );
  }

  if (language) {
    snippetListQuery = snippetListQuery.eq('language', language.toLowerCase());
  }

  const {
    data: snippets,
    error,
  }: {
    data: Array<SnippetCardProps> | null;
    error: PostgrestError | null;
  } = await snippetListQuery;

  if (error || !snippets) {
    console.error(error?.message);
    // TODO: handle this better with a toast or something similar.
    throw new Error('Something Went Wrong');
  }

  if (user) {
    const { data: bookmarksData, error: bookmarksError } = await supabase
      .from('bookmarks')
      .select('snippet_id')
      .eq('user_id', user.id);
    if (bookmarksError) console.error('bookmarks error', bookmarksError);

    const bookmarksIds = bookmarksData?.map((b) => b.snippet_id) || [];

    return snippets.map((snippet) => ({
      ...snippet,
      isBookmarked: bookmarksIds.includes(snippet.id),
    }));
  }

  return snippets;
}
