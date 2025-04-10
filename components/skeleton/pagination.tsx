import { Skeleton } from '@/components/ui';

export default function PaginationSkeleton() {
  const MAX_PAGINATION_NUMBER = 7;

  return (
    <div className="flex justify-center gap-x-2">
      {Array.from({ length: MAX_PAGINATION_NUMBER }, (_, i) => i).map(
        (item) => (
          <Skeleton key={item} className="h-8 w-8 rounded-md" />
        )
      )}
    </div>
  );
}
