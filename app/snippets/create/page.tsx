import Navbar from '@/components/navbar/navbar';
import SnippetForm from '@/components/snippets/snipet-form';

export default function CreateSnippetPage() {
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <SnippetForm />
    </main>
  );
}
