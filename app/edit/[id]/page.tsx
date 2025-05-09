import Navbar from '@/components/navbar/navbar';
import SnippetFormSkeleton from '@/components/skeleton/snippet-form';
import EditSnippetForm from '@/components/snippets/snippet-edit-form';
import { getSnippetInfoEdit } from '@/services';
import { Suspense } from 'react';

export default async function EditSnippetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const snippetInfo = getSnippetInfoEdit(id);

  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <Suspense fallback={<SnippetFormSkeleton />}>
        <EditSnippetForm snippetInfoRequest={snippetInfo} />
      </Suspense>
    </main>
  );
}
