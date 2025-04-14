import Navbar from '@/components/navbar/navbar';

export default async function SnippetViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // TODO: load the view of a code snippet base on the id in the params.
  return (
    <>
      <Navbar />
      <h1>{id}</h1>
    </>
  );
}
