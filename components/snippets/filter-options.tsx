'use client';

import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Input,
} from '@/components/ui';
import programmingLanguages from '@/data/programming-languages.json';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function FilterOptions() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleTitleSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (search) {
      params.set('title', search);
    } else {
      params.delete('title');
    }
    replace(`?${params.toString()}`);
  }, 500);

  const handleLanguageSelect = (language: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (language) {
      params.set('language', language);
    } else {
      params.delete('language');
    }
    replace(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
      <Select
        onValueChange={(language) => handleLanguageSelect(language)}
        defaultValue={searchParams.get('language')?.toString()}
      >
        <SelectTrigger className="w-full lg:w-[250px] uppercase">
          <SelectValue placeholder="Select a Language"></SelectValue>
        </SelectTrigger>
        <SelectContent className="capitalize">
          {programmingLanguages.map((language) => (
            <SelectItem
              key={language.programmingLanguageName}
              value={language.programmingLanguageName}
              className="uppercase"
            >
              {language.programmingLanguageName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        placeholder="Search Snippets..."
        className="lg:w-[250px]"
        onChange={(event) => handleTitleSearch(event.target.value)}
        defaultValue={searchParams.get('title')?.toString()}
      />
    </div>
  );
}
