import Navbar from '@/components/navbar/navbar';
import SnippetViewSkeleton from '@/components/skeleton/snippet-view';
import SnippetView from '@/components/snippets/snippet-view';
import { getSnippetInfo, getSnippetInfoMetadata } from '@/services';
import { Metadata } from 'next';
import { Suspense } from 'react';
type SnippetProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: SnippetProps): Promise<Metadata> {
  const { id } = await params;
  const snippetInfo = await getSnippetInfoMetadata(id);
  return {
    title: `${snippetInfo.title || 'No Title'} | Snipshelf`,
    description: snippetInfo.description || 'No Description',
  };
}

export default async function SnippetViewPage({ params }: SnippetProps) {
  const { id } = await params;
  const snippetInfo = getSnippetInfo(id);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Suspense fallback={<SnippetViewSkeleton />}>
        <SnippetView snippetInfoRequest={snippetInfo} />
      </Suspense>
    </div>
  );
}
