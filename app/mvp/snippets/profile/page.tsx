import Image from 'next/image';
import Navbar from '@/components/mvp/navbar';
import SnippetProfilePagination from '@/components/mvp/snippet-profile-pagination';
import SnippetsFilterOptions from '@/components/mvp/snippets-filter-option';
import SnippetCard from '@/components/mvp/snippet-card';
import SnippetPagination from '@/components/mvp/snippet-pagination';

export default function SnippetsProfileView() {
  return (
    <>
      <Navbar />
      <main className="py-4 px-8 space-y-4">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/mvp/demo_author_image.png"
              alt=""
              height={30}
              width={30}
              className="rounded-full"
            />
            <p className="capitalize">john smith</p>
          </div>
        </div>
        <SnippetProfilePagination />
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
