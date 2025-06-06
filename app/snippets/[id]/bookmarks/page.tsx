import SnippetsPagination from '@/components/pagination';
import FilterOptionsSkeleton from '@/components/skeleton/filter-snippets';
import PaginationSkeleton from '@/components/skeleton/pagination';
import SnippetListSkeleton from '@/components/skeleton/snippet-list';
import FilterOptions from '@/components/snippets/filter-options';
import SnippetList from '@/components/snippets/snippet-list';
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
  const differKey = `${title}-${language}-${page}`;

  return (
    <>
      <Suspense fallback={<FilterOptionsSkeleton />}>
        <FilterOptions />
      </Suspense>

      <Suspense
        key={`snippets-${differKey}`}
        fallback={<SnippetListSkeleton />}
      >
        <SnippetList
          title={title}
          language={language}
          page={page}
          filteredByUserId={id}
          filteredByUserBookmarks={id}
        />
      </Suspense>

      <Suspense
        key={`pagination-${differKey}`}
        fallback={<PaginationSkeleton />}
      >
        <SnippetsPagination
          title={title}
          language={language}
          page={page}
          filteredByUserId={id}
          filteredByUserBookmarks={id}
        />
      </Suspense>
    </>
  );
}
