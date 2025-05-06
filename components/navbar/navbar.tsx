import ThemeToggle from '@/components/theme-toggle';
import User from '@/components/navbar/user';
import AddCodeSnippetCta from '@/components/navbar/add-code-snippet-cta';
import { Skeleton } from '@/components/ui';
import { Suspense } from 'react';

export default function Navbar() {
  return (
    <nav className="px-2 py-2 flex items-center justify-between border-b border-dashed border-input">
      <p className="font-bold uppercase">snipshelf</p>
      <div className="flex items-center gap-x-2">
        <AddCodeSnippetCta />
        <div className="flex items-center">
          <ThemeToggle />
          <Suspense
            fallback={
              <Skeleton className="h-[30px] w-[30px] ml-2 inline-block rounded-full" />
            }
          >
            <User />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
