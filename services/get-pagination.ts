export async function getPagination({
  paginationURL,
}: {
  paginationURL: string;
}): Promise<number> {
  const paginationRequest = await fetch(paginationURL);
  const totalPages: number = await paginationRequest.json();

  return totalPages;
}
