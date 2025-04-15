import { Skeleton } from '@/components/ui';

export default function SnippetFormSkeleton() {
  return (
    <div className="flex-1">
      <div className="h-full flex flex-col-reverse lg:flex-row">
        <div className="p-4 flex flex-col flex-[0.5] gap-8">
          <Skeleton className="w-full h-[32px]" />
          <div className="flex flex-col gap-4">
            {/* title */}
            <div className="flex flex-col gap-1">
              <Skeleton className="w-1/2 h-[16px]" />
              <Skeleton className="w-full h-[38px]" />
            </div>
            {/* description */}
            <div className="flex flex-col gap-1">
              <Skeleton className="w-1/2 h-[16px]" />
              <Skeleton className="w-full h-[64px]" />
            </div>
            {/* programming language name */}
            <div className="flex flex-col gap-1">
              <Skeleton className="w-1/2 h-[16px]" />
              <Skeleton className="w-full h-[38px]" />
            </div>
            {/* snippet tags */}
            <div className="flex flex-col gap-1">
              <Skeleton className="w-1/2 h-[16px]" />
              <Skeleton className="w-full h-[38px]" />
            </div>
            {/* save and cancel button */}
            <div className="flex gap-2">
              <Skeleton className="w-full h-[32px]" />
              <Skeleton className="w-full h-[32px]" />
            </div>
          </div>
        </div>
        <Skeleton className="flex-1 rounded-none" />
      </div>
    </div>
  );
}
