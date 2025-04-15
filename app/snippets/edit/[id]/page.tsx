import Navbar from '@/components/navbar/navbar';
import EditSnippetForm from '@/components/snippets/snippet-edit-form';

export default async function EditSnippetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <EditSnippetForm snippetId={id} />
    </main>
  );
}
