import { IoChevronBack } from 'react-icons/io5';
import { Button } from '@/components/ui/button';

export default function BackPage() {
  return (
    <div className="p-2 border-b border-input">
      <Button variant="ghost" className="cursor-pointer capitalize">
        <IoChevronBack />
        <span>back</span>
      </Button>
    </div>
  );
}
