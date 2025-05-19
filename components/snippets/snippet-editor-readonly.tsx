'use client';

import { Editor } from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { Skeleton } from '@/components/ui';

type SnippetEditorReadOnlyProps = {
  code: string;
  language: string;
};

export default function SnippetEditorReadOnly({
  code,
  language,
}: SnippetEditorReadOnlyProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Editor
      theme={resolvedTheme === 'dark' ? 'vs-dark' : 'light'}
      language={language.toLowerCase()}
      value={code}
      options={{ readOnly: true, fontSize: 16 }}
      className="w-full h-[350px]"
      loading={<Skeleton className="w-full h-[350px] rounded-none" />}
    />
  );
}
