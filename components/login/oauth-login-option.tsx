import { Button } from '@/components/ui';

import { FiGithub } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';

export default function OAuthLoginOption() {
  return (
    <div className="flex items-center justify-center">
      <Button variant="ghost" className="py-2 h-auto w-auto cursor-pointer">
        <FiGithub className="!size-8" />
      </Button>
      <Button variant="ghost" className="py-2 h-auto w-auto cursor-pointer">
        <FaGoogle className="!size-8" />
      </Button>
    </div>
  );
}
