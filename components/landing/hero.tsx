import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function Hero() {
  return (
    <section>
      {/* Hero Section Container */}
      <div className="h-[70vh] lg:h-screen flex flex-col justify-center items-center gap-6 md:gap-8">
        {/* Primary Heading Container */}
        {/* `leading-tight` makes the line height a bit more spacious for the smaller screens for better readability
        and `leading-none` sets it to default for larger screens it gives a more compact look*/}
        <h1 className="relative pb-3.5 flex flex-col justify-center items-center text-[40px] md:text-7xl font-bold leading-tight md:leading-none">
          <span>The Snippet Tool</span>
          {/* Gradient overlay div */}
          <div className="absolute right-0 bottom-0 left-0 z-10 bg-gradient-to-t from-[var(--background)] to-transparent w-full h-[45%] dark:h-[60%] pointer-events-none" />
          <span className="">For Developers</span>
        </h1>
        {/* Secondary Heading Container */}
        <h2 className="w-xs md:w-[476px] text-center text-2xl md:text-4xl font-regular text-[#a0a0a0]">
          Save Share, and Organize Code Snippets with Ease.
        </h2>
        {/* Button Container */}
        <div className="w-xs md:max-w-full flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="/create"
            className={cn(
              buttonVariants({
                variant: 'magic',
              }),
              'capitalize w-full md:w-auto relative z-10 '
            )}
          >
            Create code snippet
          </Link>

          <Link
            href="/snippets"
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
