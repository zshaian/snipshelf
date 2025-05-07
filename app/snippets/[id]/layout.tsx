import UserProfileSkeleton from '@/components/skeleton/user-profile';
import { Suspense } from 'react';
import UserProfile from '@/components/user/user-profile';
import { getUserProfile } from '@/services';
import UserSnippetLinks from '@/components/user/user-snippet-links';
import BackLink from '@/components/back-link';

export default async function SnippetsUserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userProfile = getUserProfile({ id });

  return (
    <>
      <BackLink />

      <Suspense fallback={<UserProfileSkeleton />}>
        <UserProfile userProfileRequest={userProfile} />
      </Suspense>

      <UserSnippetLinks userId={id} />

      {children}
    </>
  );
}
