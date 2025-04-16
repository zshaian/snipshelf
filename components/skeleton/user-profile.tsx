import { Skeleton } from '@/components/ui';

export default function UserProfileSkeleton() {
  return (
    <div className="flex items-center justify-start gap-2">
      <Skeleton className="h-[30px] w-[30px] rounded-full" />
      <Skeleton className="h-[16px] w-[200px]" />
    </div>
  );
}
