import { createClient } from '@/utils/supabase/server';

export async function addUserToProfiles(
  user_id: string,
  name: string,
  avatar: string
) {
  const supabase = await createClient();
  const { data, error } = await supabase.rpc('add_user_to_profiles', {
    p_user_id: user_id,
    name,
    avatar,
  });
  if (error) {
    console.error(
      "There's a problem adding the user in the profiles table",
      error
    );
  } else {
    console.log('user has been added to the profiles table', data);
  }
}
