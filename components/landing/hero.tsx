import { Button } from '../ui';
import Link from 'next/link';

export default function Hero() {
  return (
    <section>
      {/* Hero Section Container */}
      <div className="max-w-full min-h-screen flex flex-col justify-center items-center gap-6 md:gap-8">
        {/* Primary Heading Container */}
        <h1 className="flex flex-col justify-center items-center text-[40px] md:text-7xl font-medium leading-tight">
          <span>The Snippet Tool</span>
          <span>For Developers</span>
        </h1>
        {/* Secondary Heading Container */}
        <h2 className="w-xs md:w-[476px] text-center text-2xl md:text-4xl font-regular text-[#a0a0a0]">
          Save Share, and Organize Code Snippets with Ease.
        </h2>
        {/* Button Container */}
        <div className="w-xs md:max-w-full flex flex-col md:flex-row justify-center items-center gap-4">
          <Button className="capitalize w-full md:w-auto" asChild>
            <Link href="/snippets/create">Create code snippet</Link>
          </Button>
          <Button
            variant="secondary"
            className="capitalize w-full md:w-auto"
            asChild
          >
            <Link href="/mvp/snippets">Browse code snippet</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
