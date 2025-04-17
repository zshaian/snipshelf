'use client';

import type { UserProfile } from '@/types';
import Image from 'next/image';
import { use } from 'react';

export default function UserProfile({
  userProfileRequest,
}: {
  userProfileRequest: Promise<UserProfile>;
}) {
  const { userName, userImage } = use(userProfileRequest);

  return (
    <div className="p-4 flex items-center justify-start gap-2">
      <Image
        src={userImage}
        height={30}
        width={30}
        alt=""
        className="rounded-full"
      />
      <p className="capitalize">{userName}</p>
    </div>
  );
}
