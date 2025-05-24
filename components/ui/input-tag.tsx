'use client';

import { InputTag as InputTagForm } from 'react-tagit';

export function InputTag({
  snippetTags,
  setSnippetTags,
}: {
  snippetTags: Array<string>;
  setSnippetTags: React.Dispatch<React.SetStateAction<Array<string>>>;
}) {
  return (
    <InputTagForm
      customClass={{
        inputTagLabelElement: 'font-[inherit]',
        inputTagContainerElement: 'font-[inherit]',
        inputTagInputElement:
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent !px-3 !py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        inputTagListContainerElement:
          '!p-4 !border !border-input !gap-2 max-h-[90px] overflow-y-scroll input-tag-scroll',
        inputTagTagItemElement: '!bg-input/30 !py-0 border border-input',
        inputTagTagContentElement: '!text-foreground',
        inputTagTagRemoveBtnElement:
          'text-sm !text-foreground hover:!text-destructive trasition',
      }}
      value={snippetTags}
      onChange={setSnippetTags}
      maxTags={5}
      maxTagsValue={25}
      theme="theme-1"
      separator="Space"
    />
  );
}
