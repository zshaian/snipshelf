'use client';

import { Button } from '@/components/ui';
import { FaChevronLeft } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

export default function BackLink() {
  const router = useRouter();

  return (
    <div className="py-1 px-2 w-full border-b border-input">
      <Button
        onClick={() => router.back()}
        className="capitalize rounded-none cursor-pointer"
        variant="ghost"
      >
        <FaChevronLeft />
        <span>back</span>
      </Button>
    </div>
  );
}
