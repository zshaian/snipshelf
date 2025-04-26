'use client';

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
import { usePathname, useSearchParams } from 'next/navigation';
import { use } from 'react';

export default function SnippetsPagination({
  totalPagesRequest,
}: {
  totalPagesRequest: Promise<number>;
}) {
  const totalPages = use(totalPagesRequest);
  const pathName = usePathname();
  const searchParam = useSearchParams();
  const currentPage = Number(searchParam.get('page')) || 1;
  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParam);
    params.set('page', pageNumber.toString());
    return `${pathName}/?${params.toString()}`;
  };

  return (
    <Pagination>
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
