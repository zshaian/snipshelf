import Navbar from '@/components/navbar/navbar';
import SnippetFormSkeleton from '@/components/skeleton/snippet-form';
import EditSnippetForm from '@/components/snippets/snippet-edit-form';
import { Suspense } from 'react';

export default async function EditSnippetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <Suspense fallback={<SnippetFormSkeleton />}>
        <EditSnippetForm snippetId={id} />
      </Suspense>
    </main>
  );
}
