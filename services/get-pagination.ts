import { SNIPPETS_PER_PAGE } from '@/constants';
import { createClient } from '@/utils/supabase/server';

type getPaginationProps = {
  title: string;
  language: string;
  filteredByUserId?: string;
  filteredByUserBookmarks?: string;
};

export async function getPagination({
  title,
  language,
  filteredByUserId,
  filteredByUserBookmarks,
}: getPaginationProps): Promise<number> {
  const supabase = await createClient();

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
      return 1;
    }

    filteredBookmarkedSnippetIds = bookmarked.map((b) => b.snippet_id) || [];

    if (filteredBookmarkedSnippetIds.length === 0) {
      return 1;
    }
  }

  let snippetListQueryCount = supabase
    .from('snippets')
    .select('*', { count: 'exact', head: true });

  if (filteredByUserId) {
    snippetListQueryCount = snippetListQueryCount.eq(
      'user_id',
      filteredByUserId
    );
  }

  if (filteredBookmarkedSnippetIds) {
    snippetListQueryCount = snippetListQueryCount.in(
      'id',
      filteredBookmarkedSnippetIds
    );
  }

  if (title) {
    snippetListQueryCount = snippetListQueryCount.ilike('title', `%${title}%`);
  }

  if (language) {
    snippetListQueryCount = snippetListQueryCount.eq('language', language);
  }

  const { count, error } = await snippetListQueryCount;

  if (error) {
    // TODO: handle this better with a toast or something similar.
    console.error(error.message);
    throw new Error('Something Went Wrong');
  }

  const totalPages = Math.ceil((count || 0) / SNIPPETS_PER_PAGE);

  // if there's no totalPages default the value into 1
  return totalPages || 1;
}
