import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';

export default function SnippetProfilePagination() {
  return (
    <Pagination className="flex justify-start">
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className="h-auto w-auto py-1 px-3 capitalize rounded-full"
          >
            show all
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="h-auto w-auto py-1 px-3 capitalize rounded-full"
          >
            bookmarks
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
