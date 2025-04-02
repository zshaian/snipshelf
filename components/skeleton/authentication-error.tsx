import { Skeleton } from '../ui/skeleton';

export default function AuthenticationError() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Skeleton className="h-[120px] w-[120px] rounded-full" />
      <Skeleton className="h-8 w-[250px]" />
      <Skeleton className="h-4 w-[350px]" />
      <Skeleton className="h-8 w-[80px] rounded-sm" />
    </div>
  );
}
