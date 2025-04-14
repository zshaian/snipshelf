import { Skeleton } from '@/components/ui';

export default function SnippetViewSkeleton() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4">
      <section className="min-w-auto w-[800px] p-8 flex flex-col gap-4">
        <div className="flex justify-between">
          {/* profile part */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-[30px] w-[30px] rounded-full" />
            <Skeleton className="h-[16px] w-[200px]" />
          </div>
          <Skeleton className="h-[16px] w-[100px]" />
        </div>
        {/* title and description */}
        <Skeleton className="h-[16px] w-full" />
        <Skeleton className="h-[32px] w-full" />
        {/* tags */}
        <div className="flex gap-1">
          <Skeleton className="h-[16px] w-[100px] rounded-md" />
          <Skeleton className="h-[16px] w-[100px] rounded-md" />
          <Skeleton className="h-[16px] w-[100px] rounded-md" />
        </div>
        {/* code editor */}
        <Skeleton className="h-[200px] w-full" />
        {/* bookmark and share button */}
        <div className="flex gap-2 justify-end">
          <Skeleton className="h-[16px] w-[130px] rounded-none" />
          <Skeleton className="h-[16px] w-[130px] rounded-none" />
        </div>
      </section>
    </div>
  );
}
