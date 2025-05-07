import SnippetsPagination from '@/components/pagination';
import FilterOptionsSkeleton from '@/components/skeleton/filter-snippets';
import PaginationSkeleton from '@/components/skeleton/pagination';
import SnippetListSkeleton from '@/components/skeleton/snippet-list';
import FilterOptions from '@/components/snippets/filter-options';
import SnippetList from '@/components/snippets/snippet-list';
import { getSnippetList, getPagination } from '@/services';
import { Suspense } from 'react';

export default async function ProfileBookmarksPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ title?: string; language?: string; page?: string }>;
}) {
  const { id } = await params;
  const { title = '', language = '', page = '1' } = await searchParams;

  const usersnippetList = getSnippetList({
    title,
    language,
    page: Number(page),
    filteredByUserBookmarks: id,
  });

  const userPagination = getPagination({
    title,
    language,
    filteredByUserBookmarks: id,
  });

  return (
    <>
      <Suspense fallback={<FilterOptionsSkeleton />}>
        <FilterOptions />
      </Suspense>

      <Suspense fallback={<SnippetListSkeleton />}>
        <SnippetList snippetListRequest={usersnippetList} />
      </Suspense>

      <Suspense fallback={<PaginationSkeleton />}>
        <SnippetsPagination totalPagesRequest={userPagination} />
      </Suspense>
    </>
  );
}
