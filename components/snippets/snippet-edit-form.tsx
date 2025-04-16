import type { SnippetProps } from '@/types';
import { notFound } from 'next/navigation';
import EditForm from '@/components/snippets/edit-form';

export default async function EditSnippetForm({
  snippetId,
}: {
  snippetId: string;
}) {
  // This is just an example endpoint will change it later.
  const request = await fetch(`/https://snippets/${snippetId}`);

  if (!request.ok) notFound();

  const snippetInfo: SnippetProps = await request.json();

  return <EditForm snippetInfo={snippetInfo} />;
}
