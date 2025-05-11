import SnippetsPagination from '@/components/pagination';
import PaginationSkeleton from '@/components/skeleton/pagination';
import SnippetListSkeleton from '@/components/skeleton/snippet-list';
import SnippetList from '@/components/snippets/snippet-list';
import { Suspense } from 'react';
import FilterOptionsSkeleton from '@/components/skeleton/filter-snippets';
import FilterOptions from '@/components/snippets/filter-options';

export default async function MainPage({
  searchParams,
}: {
  searchParams: Promise<{ title?: string; language?: string; page?: string }>;
}) {
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
        <SnippetList title={title} language={language} page={page} />
      </Suspense>

      <Suspense
        key={`pagination-${differKey}`}
        fallback={<PaginationSkeleton />}
      >
        <SnippetsPagination title={title} language={language} page={page} />
      </Suspense>
    </>
  );
}
