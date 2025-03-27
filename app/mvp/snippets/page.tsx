import Navbar from '@/components/mvp/navbar';
import SnippetCard from '@/components/mvp/snippet-card';
import SnippetPagination from '@/components/mvp/snippet-pagination';
import SnippetsFilterOptions from '@/components/mvp/snippets-filter-option';

export default function SnippetsPage() {
  return (
    <>
      <Navbar />
      <main className="py-4 px-8 space-y-4">
        <SnippetsFilterOptions />
        <section className="flex flex-col md:grid md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
          <SnippetCard />
          <SnippetCard />
          <SnippetCard />
          <SnippetCard />
          <SnippetCard />
          <SnippetCard />
          <SnippetCard />
          <SnippetCard />
          <SnippetCard />
        </section>
        <SnippetPagination />
      </main>
    </>
  );
}
