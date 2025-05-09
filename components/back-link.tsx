'use client';

import { Button } from '@/components/ui';
import { FaChevronLeft } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

export default function BackLink() {
  const router = useRouter();

  return (
    <div className="my-4 w-full">
      <Button
        onClick={() => router.back()}
        className="!px-1 capitalize rounded-none cursor-pointer"
        variant="ghost"
      >
        <FaChevronLeft />
        <span>back</span>
      </Button>
    </div>
  );
}
