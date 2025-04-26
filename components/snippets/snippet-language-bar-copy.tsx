'use client';

import { Button } from '@/components/ui';
import { IoCopyOutline, IoCheckmark } from 'react-icons/io5';
import { useState } from 'react';
import { copyTextToClipBoard } from '@/lib';
import LanguageBadge from '@/components/language-badge';

type SnippetLanguageBarCopyProps = {
  codeToCopy: string;
  programmingLanguageName: string;
};

export default function SnippetLanguageBarCopy({
  codeToCopy,
  programmingLanguageName,
}: SnippetLanguageBarCopyProps) {
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
        <LanguageBadge programmingLanguageName={programmingLanguageName} />
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
