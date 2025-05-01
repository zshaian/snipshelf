import Navbar from '@/components/navbar/navbar';
import SnippetsPagination from '@/components/pagination';
import FilterOptionsSkeleton from '@/components/skeleton/filter-snippets';
import PaginationSkeleton from '@/components/skeleton/pagination';
import SnippetListSkeleton from '@/components/skeleton/snippet-list';
// import UserProfileSkeleton from '@/components/skeleton/user-profile';
import FilterOptions from '@/components/snippets/filter-options';
import SnippetList from '@/components/snippets/snippet-list';
// import UserProfile from '@/components/user/user-profile';
import UserSnippetLinks from '@/components/user/user-snippet-links';
import { getSnippetList, getPagination } from '@/services';
import { Suspense } from 'react';

export default async function ProfilePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ title?: string; language?: string; page?: string }>;
}) {
  const { id } = await params;
  const { title = '', language = '', page = '1' } = await searchParams;

  // const userProfile = getUserProfile({ userId: id });

  // TODO: replace later with an actual API endpoint
  const usersnippetList = getSnippetList({
    title,
    language,
    page: Number(page),
  });
  // TODO: replace later with an actual API endpoint
  const userPagination = getPagination({
    title,
    language,
  });

  return (
    <>
      <Navbar />
      <main className="p-8 flex flex-col gap-4">
        {/* <Suspense fallback={<UserProfileSkeleton />}>
          <UserProfile userProfileRequest={userProfile} />
        </Suspense> */}

        <UserSnippetLinks userId={id} />

        <Suspense fallback={<FilterOptionsSkeleton />}>
          <FilterOptions />
        </Suspense>

        <Suspense fallback={<SnippetListSkeleton />}>
          <SnippetList snippetListRequest={usersnippetList} />
        </Suspense>

        <Suspense fallback={<PaginationSkeleton />}>
          <SnippetsPagination totalPagesRequest={userPagination} />
        </Suspense>
      </main>
    </>
  );
}
