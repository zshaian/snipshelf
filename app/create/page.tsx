import Navbar from '@/components/navbar/navbar';
import CreateSnippetForm from '@/components/snippets/snipet-create-form';

export default function CreateSnippetPage() {
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <CreateSnippetForm />
    </main>
  );
}
