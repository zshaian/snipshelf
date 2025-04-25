import { Button } from '../ui';

export default function Hero() {
  return (
    <section>
      {/* Hero Section Container */}
      <div className="max-w-full min-h-screen flex flex-col justify-center items-center gap-8">
        {/* Primary Heading Container */}
        <h1 className="flex flex-col justify-center items-center text-7xl font-medium">
          <span>The Snippet Tool</span>
          <span>For Developers</span>
        </h1>
        {/* Secondary Heading Container */}
        <h2 className="max-w-[476px] text-center text-4xl font-regular text-[#a0a0a0]">
          <span>Save Share, and Organize Code Snippets.</span>
        </h2>
        {/* Button Container */}
        <div className="max-w-full flex justify-center items-center gap-4">
          <Button className="capitalize">Create code snippet</Button>
          <Button variant="secondary" className="capitalize">
            Browse code snippet
          </Button>
        </div>
      </div>
    </section>
  );
}
