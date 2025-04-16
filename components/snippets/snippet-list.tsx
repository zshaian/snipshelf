import SnippetCard from '@/components/snippets/card';
import { SnippetProps } from '@/types';
import { use } from 'react';

export default function SnippetList({
  snippetListRequest,
}: {
  snippetListRequest: Promise<Array<SnippetProps>>;
}) {
  const snippetList = use(snippetListRequest);

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
