import Link from 'next/link';
import { Button } from '../ui';
import { IoLogoGithub } from 'react-icons/io';

export default function Contribute() {
  return (
    <section>
      <div className="max-w-full flex justify-center items-center pt-8 pb-8">
        <Button variant="outline">
          <IoLogoGithub />
          <Link href="https://github.com/zshaian/snipshelf">
            Contribute Here
          </Link>
        </Button>
      </div>
    </section>
  );
}
