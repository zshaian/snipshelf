import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui';
import { generatePagination } from '@/lib';
import { getPagination } from '@/services';

export default async function SnippetsPagination({
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
  const totalPages = await getPagination({ title, language });
  const currentPage = Number(page) || 1;
  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: string | number) => {
    const params = new URLSearchParams({ title, language });
    params.set('page', pageNumber.toString());
    if (!title) {
      params.delete('title');
    }
    if (!language) {
      params.delete('language');
    }
    if (filteredByUserId && !filteredByUserBookmarks) {
      return `/snippets/${filteredByUserId}/?${params.toString()}`;
    }
    if (filteredByUserId && filteredByUserBookmarks) {
      return `/snippets/${filteredByUserBookmarks}/bookmarks/?${params.toString()}`;
    }

    return `/snippets/?${params.toString()}`;
  };

  return (
    <Pagination className="p-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            hidden={currentPage <= 1}
            href={createPageURL(currentPage - 1)}
          />
        </PaginationItem>

        {allPages.map((page) => {
          // if the pagination content is an elipsis
          if (page === '...') {
            return (
              <PaginationItem key={page}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={createPageURL(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            hidden={currentPage >= totalPages}
            href={createPageURL(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
