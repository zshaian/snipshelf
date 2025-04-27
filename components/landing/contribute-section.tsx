import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default function Contribute() {
  return (
    <section>
      <div className="max-w-full flex justify-center items-center pt-8 pb-8">
        <Link
          href="https://github.com/zshaian/snipshelf"
          className={cn(buttonVariants({ variant: 'outline' }), 'capitalize')}
        >
          <IoLogoGithub />
          Contribute Here
        </Link>
      </div>
    </section>
  );
}
