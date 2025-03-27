import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

export default function SnippetsFilterOptions() {
  return (
    <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
      <Select>
        <SelectTrigger className="w-full lg:w-[250px] capitalize">
          <SelectValue placeholder="Select a Language"></SelectValue>
        </SelectTrigger>
        <SelectContent className="capitalize">
          <SelectItem value="javascript">javascript</SelectItem>
          <SelectItem value="typescript">typescript</SelectItem>
          <SelectItem value="python">python</SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="Search Snippets..." className="lg:w-[250px]" />
    </div>
  );
}
