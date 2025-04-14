import Navbar from '@/components/navbar/navbar';
import SnippetViewSkeleton from '@/components/skeleton/snippet-view';
import SnippetView from '@/components/snippets/snippet-view';
import { Suspense } from 'react';

export default async function SnippetViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // TODO: load the view of a code snippet base on the id in the params.
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Suspense fallback={<SnippetViewSkeleton />}>
        <SnippetView snippetId={id} />
      </Suspense>
    </div>
  );
}
