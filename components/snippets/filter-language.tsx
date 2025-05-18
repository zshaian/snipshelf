'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import programmingLanguages from '@/data/programming-languages.json';

export default function FilterLanguage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const searchParams = useSearchParams();
  const currentLanguage = searchParams.get('language') || '';
  const { replace } = useRouter();

  useEffect(() => {
    setValue(currentLanguage);
  }, [currentLanguage]);

  const handleLanguageSelect = (language: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (language === params.get('language')) {
      params.delete('language');
    } else if (language) {
      params.set('language', language);
    } else {
      params.delete('language');
    }
    replace(`?${params.toString()}`);
  };

  return (
    <div className="relative w-full lg:w-[250px]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full capitalize justify-between"
          >
            {value
              ? programmingLanguages.find(
                  (language) => language.programmingLanguageName === value
                )?.programmingLanguageName
              : 'Select Language'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-full p-0"
          align="start"
          sideOffset={4}
          style={{ width: 'var(--radix-popover-trigger-width)' }}
        >
          <Command>
            <CommandInput placeholder="Search Language..." className="h-9" />
            <CommandList>
              <CommandEmpty>No Language found.</CommandEmpty>
              <CommandGroup>
                {programmingLanguages
                  .sort((a, b) =>
                    a.programmingLanguageName.localeCompare(
                      b.programmingLanguageName
                    )
                  )
                  .map((language) => (
                    <CommandItem
                      key={language.programmingLanguageName}
                      value={language.programmingLanguageName}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? '' : currentValue);
                        setOpen(false);
                        handleLanguageSelect(currentValue);
                      }}
                      className="capitalize"
                    >
                      {language.programmingLanguageName}
                      <span
                        className="ml-auto h-3 w-3 rounded-full shadow-sm border border-input"
                        style={{
                          backgroundColor: language.programmingLanguageColor,
                        }}
                      ></span>
                      <Check
                        className={cn(
                          value === language.programmingLanguageName
                            ? 'inline-block'
                            : 'hidden'
                        )}
                      />
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
