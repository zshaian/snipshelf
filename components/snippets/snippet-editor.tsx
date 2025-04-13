'use client';

import { Editor } from '@monaco-editor/react';
import { useTheme } from 'next-themes';

type SnippetEditorProps = {
  programmingLanguageName: string;
};

export default function SnippetEditor({
  programmingLanguageName,
  ...props
}: SnippetEditorProps & Partial<React.MemoExoticComponent<typeof Editor>>) {
  const { resolvedTheme } = useTheme();

  return (
    <Editor
      className="h-[350px] lg:h-[auto]"
      theme={resolvedTheme === 'dark' ? 'vs-dark' : 'light'}
      language={programmingLanguageName.toLowerCase()}
      options={{ fontSize: 16 }}
      {...props}
    />
  );
}
