import { signOut } from '@/actions/signout';
import { Button } from '@/components/ui';

export default async function SignOutButton() {
  return (
    <form action={signOut}>
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
