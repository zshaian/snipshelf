'use client';

import { Editor } from '@monaco-editor/react';
import { useTheme } from 'next-themes';

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
      language={language}
      value={code}
      options={{ readOnly: true, fontSize: 16 }}
      className="w-full h-[250px]"
    />
  );
}
