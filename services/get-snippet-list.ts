import type { SnippetProps } from '@/types';

export async function getSnippetList({
  snippetListURL,
}: {
  snippetListURL: string;
}): Promise<Array<SnippetProps>> {
  const requestSnippetList = await fetch(snippetListURL);
  const snippetList: Array<SnippetProps> = await requestSnippetList.json();

  return snippetList;
}
