import type { SnippetProps } from '@/types';

export async function getSnippetInfo({
  snippetId,
}: {
  snippetId: string;
}): Promise<SnippetProps> {
  // TODO: replace later with an actual API endpoint
  const snippetInfoRequest = await fetch(`https://snippets/${snippetId}`);
  const snippetInfo: SnippetProps = await snippetInfoRequest.json();

  return snippetInfo;
}
