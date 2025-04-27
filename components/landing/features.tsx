import { FeatureCard } from '@/components/landing/feature-card';
import { Search } from 'lucide-react';
import { Share2 } from 'lucide-react';
import { Plus } from 'lucide-react';

export default function Features() {
  return (
    <section>
      {/* to do adjust the colors of the icons and the icons container depending on the theme */}
      <div className="flex justify-center items-center max-w-screen h-full md:h-96 lg:h-64">
        <ul className="flex md:flex-row flex-col justify-center items-center gap-4 w-full lg:w-[80%] h-full">
          <li className="w-full flex items-center justify-center h-full">
            <FeatureCard
              title="Search for your & other's code snippets"
              description="Find the exact code snippet you need in seconds using search and language based filters"
              Icon={Search}
            />
          </li>
          <li className="w-full flex items-center justify-center h-full">
            <FeatureCard
              title="Share your code snippets with others"
              description="Share your code snippets with a link, perfect for feedback or just showing off your work"
              Icon={Share2}
            />
          </li>
          <li className="w-full flex items-center justify-center h-full">
            <FeatureCard
              title="Create your own code snippets"
              description="Add and manage your code snippets effortlessly, with support for multiple languages"
              Icon={Plus}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
