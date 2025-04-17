import Navbar from '@/components/navbar/navbar';
import SnippetViewSkeleton from '@/components/skeleton/snippet-view';
import SnippetView from '@/components/snippets/snippet-view';
import { getSnippetInfo } from '@/services';
import { Suspense } from 'react';

export default async function SnippetViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const snippetInfo = getSnippetInfo({ snippetId: id });

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Suspense fallback={<SnippetViewSkeleton />}>
        <SnippetView snippetInfoRequest={snippetInfo} />
      </Suspense>
    </div>
  );
}
