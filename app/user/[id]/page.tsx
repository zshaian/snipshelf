import Navbar from '@/components/navbar/navbar';
import SnippetsPagination from '@/components/pagination';
import FilterOptionsSkeleton from '@/components/skeleton/filter-snippets';
import PaginationSkeleton from '@/components/skeleton/pagination';
import SnippetListSkeleton from '@/components/skeleton/snippet-list';
import UserProfileSkeleton from '@/components/skeleton/user-profile';
import FilterOptions from '@/components/snippets/filter-options';
import SnippetList from '@/components/snippets/snippet-list';
import { buttonVariants } from '@/components/ui/button';
import UserProfile from '@/components/user/user-profile';
import { cn } from '@/lib/utils';
import { getUserProfile, getSnippetList, getPagination } from '@/services';
import Link from 'next/link';
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
  const snippetListQuery = new URLSearchParams({
    title,
    language,
    page,
  });
  const userProfile = getUserProfile({ userId: id });

  // TODO: replace later with an actual API endpoint
  const usersnippetList = getSnippetList({
    snippetListURL: `https://snippets/user/${id}/?${snippetListQuery}`,
  });
  // TODO: replace later with an actual API endpoint
  const userPagination = getPagination({
    paginationURL: `https://snipets/pagination/${id}/?${snippetListQuery}`,
  });

  return (
    <>
      <Navbar />
      <main className="p-8 flex flex-col gap-4">
        <Suspense fallback={<UserProfileSkeleton />}>
          <UserProfile userProfileRequest={userProfile} />
        </Suspense>

        <div className="flex gap-x-2">
          <Link
            href={`https://snippets/user/${id}`}
            className={cn(
              buttonVariants({ variant: 'outline' }),
              `capitalize rounded-full cursor-pointer`
            )}
          >
            show all
          </Link>
          <Link
            href={`https://snippets/user/${id}/bookmarks`}
            className={cn(
              buttonVariants({ variant: 'outline' }),
              `capitalize rounded-full cursor-pointer`
            )}
          >
            bookmarks
          </Link>
        </div>

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
