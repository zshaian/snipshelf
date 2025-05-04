import type { UserProfile } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { PostgrestError } from '@supabase/supabase-js';

export async function getUserProfile({
  id,
}: {
  id: string;
}): Promise<UserProfile> {
  const supabase = await createClient();
  const {
    data,
    error,
  }: { data: UserProfile | null; error: PostgrestError | null } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', id)
    .single();

  if (error) {
    console.error(error.message);
    // TODO: handle this better with a toast or something similar.
    throw new Error('Something Went Wrong');
  }
  if (!data) {
    console.error(`no snippet found with an id of ${id}`);
    // TODO: handle this better with a toast or something similar.
    throw new Error('Something Went Wrong');
  }
  return data;
}
