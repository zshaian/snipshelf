import { UserProfile } from '@/types';

export async function getUserProfile({
  userId,
}: {
  userId: string;
}): Promise<UserProfile> {
  const requestProfile = await fetch(`https:/users/profile/${userId}`);
  const { userImage, userName }: UserProfile = await requestProfile.json();

  return { userImage, userName };
}
