import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function Hero() {
  return (
    <section>
      {/* Hero Section Container */}
      <div className="h-[70vh] lg:h-screen flex flex-col justify-center items-center gap-6 md:gap-8">
        {/* Primary Heading Container */}
        <h1 className="flex flex-col justify-center items-center text-[40px] md:text-7xl font-bold leading-tight">
          <span>The Snippet Tool</span>
          <span>For Developers</span>
        </h1>
        {/* Secondary Heading Container */}
        <h2 className="w-xs md:w-[476px] text-center text-2xl md:text-4xl font-regular text-[#a0a0a0]">
          Save Share, and Organize Code Snippets with Ease.
        </h2>
        {/* Button Container */}
        <div className="w-xs md:max-w-full flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="/snippets/create"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'capitalize w-full md:w-auto'
            )}
          >
            Create code snippet
          </Link>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: 'secondary' }),
              'capitalize w-full md:w-auto'
            )}
          >
            Browse code snippet
          </Link>
        </div>
      </div>
    </section>
  );
}
