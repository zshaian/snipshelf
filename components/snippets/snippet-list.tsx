import SnippetCard from '@/components/snippets/card';
import { getSnippetList } from '@/services';

export default async function SnippetList({
  title,
  language,
  page,
  filteredByUserId,
  filteredByUserBookmarks,
}: {
  title: string;
  language: string;
  page: string;
  filteredByUserId?: string;
  filteredByUserBookmarks?: string;
}) {
  const snippetList = await getSnippetList({
    title,
    language,
    page: Number(page),
    filteredByUserId,
    filteredByUserBookmarks,
  });

  if (snippetList.length === 0) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        <h1 className="text-2xl capitalize font-light text-zinc-800 dark:text-zinc-300">
          no snippets found.
        </h1>
      </div>
    );
  }

  return (
    <ul className="flex flex-col md:grid md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
      {snippetList.map((snippet) => (
        <li key={snippet.id}>
          <SnippetCard {...snippet} />
        </li>
      ))}
    </ul>
  );
}
