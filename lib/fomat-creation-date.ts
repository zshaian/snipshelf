import { formatDistanceToNow } from 'date-fns';

export function formatCreationDate(date: string) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
