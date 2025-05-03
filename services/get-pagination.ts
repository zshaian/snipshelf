import { SNIPPETS_PER_PAGE } from '@/constants';
import { createClient } from '@/utils/supabase/server';

type getPaginationProps = {
  title: string;
  language: string;
};

export async function getPagination({
  title,
  language,
}: getPaginationProps): Promise<number> {
  const supabase = await createClient();

  let snippetListQueryCount = supabase
    .from('snippets')
    .select('*', { count: 'exact', head: true });

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

export async function getUserPagination({
  title,
  language,
  id,
}: getPaginationProps & { id: string }): Promise<number> {
  const supabase = await createClient();

  let snippetListQueryCount = supabase
    .from('snippets')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', id);

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
