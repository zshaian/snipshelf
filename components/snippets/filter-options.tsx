import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Input,
} from '@/components/ui';

export default function FilterOptions() {
  const programmingLanguages: Array<string> = [
    'javasript',
    'typescript',
    'python',
  ];

  return (
    <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
      <Select>
        <SelectTrigger className="w-full lg:w-[250px] capitalize">
          <SelectValue placeholder="Select a Language"></SelectValue>
        </SelectTrigger>
        <SelectContent className="capitalize">
          {programmingLanguages.map((language) => (
            <SelectItem key={language} value={language}>
              {language}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input placeholder="Search Snippets..." className="lg:w-[250px]" />
    </div>
  );
}
