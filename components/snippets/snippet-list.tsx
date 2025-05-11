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
