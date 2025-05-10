'use client';

import { Input } from '@/components/ui';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import FilterLanguage from '@/components/snippets/filter-language';

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
  }, 300);

  return (
    <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
      <FilterLanguage />
      <Input
        placeholder="Search Snippets..."
        className="lg:w-[250px]"
        onChange={(event) => handleTitleSearch(event.target.value)}
        defaultValue={searchParams.get('title')?.toString()}
      />
    </div>
  );
}
