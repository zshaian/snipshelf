import { Skeleton } from '@/components/ui';

export default function SnippetList() {
  const SNIPPET_LIST_LIMIT = 9;

  return (
    <ul className="flex flex-col md:grid md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
      {Array.from({ length: SNIPPET_LIST_LIMIT }, (_, i) => (
        <Skeleton key={i} className="h-[200px]" />
      ))}
    </ul>
  );
}
