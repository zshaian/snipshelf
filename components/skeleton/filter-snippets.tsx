import { Skeleton } from '@/components/ui';

export default function FilterOptionsSkeleton() {
  return (
    <div className="p-8 flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
      <Skeleton className="h-7 w-full lg:w-48" />
      <Skeleton className="h-7 w-full lg:w-48" />
    </div>
  );
}
