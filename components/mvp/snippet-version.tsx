import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SnippetVersion() {
  return (
    <Select>
      <SelectTrigger className="capitalize">
        <SelectValue placeholder="version"></SelectValue>
      </SelectTrigger>
      <SelectContent className="capitalize">
        <SelectItem value="30 mins ago">30 mins ago</SelectItem>
        <SelectItem value="5 days ago">5 days ago</SelectItem>
        <SelectItem value="feb 27, 2025"> feb 27, 2025</SelectItem>
      </SelectContent>
    </Select>
  );
}
