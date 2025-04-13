'use client';

import { getLanguageColor } from '@/lib/get-language-color';
import programmingLanguages from '@/data/programming-languages.json';
import { Button } from '@/components/ui';
import { IoCopyOutline, IoCheckmark } from 'react-icons/io5';
import { useState } from 'react';
import { copyTextToClipBoard } from '@/lib/copy-text';

type SnippetLanguageBarCopy = {
  codeToCopy: string;
  programmingLanguageName: string;
};

export default function SnippetLanguageBarCopy({
  codeToCopy,
  programmingLanguageName,
}: SnippetLanguageBarCopy) {
  const programmingLanguageColor = getLanguageColor(
    programmingLanguageName,
    programmingLanguages
  );
  const [copied, setCopied] = useState<boolean>(false);
  const handleCopyCodeSnippet = () => {
    copyTextToClipBoard(codeToCopy, {
      onSuccess() {
        setCopied(true);
        setTimeout(() => setCopied(false), 500);
      },
    });
  };

  return (
    <div className="py-2 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 relative">
      <div className="flex items-center gap-2">
        <span
          className="h-3 w-3 rounded-full shadow-sm border border-input"
          style={{ backgroundColor: programmingLanguageColor }}
        ></span>
        <span className="uppercase font-semibold">
          {programmingLanguageName}
        </span>
      </div>
      <Button
        variant="outline"
        className="p-1 h-auto capitalize rounded-full cursor-pointer absolute right-2"
        onClick={handleCopyCodeSnippet}
      >
        {copied ? <IoCheckmark /> : <IoCopyOutline />}
        <span>{copied ? 'copied' : 'copy'}</span>
      </Button>
    </div>
  );
}
