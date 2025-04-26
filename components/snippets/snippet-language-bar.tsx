import { getLanguageColor } from '@/lib';
import programmingLanguages from '@/data/programming-languages.json';

type SnippetLanguageBarProps = {
  programmingLanguageName: string;
};

export default function SnippetLanguageBar({
  programmingLanguageName,
}: SnippetLanguageBarProps) {
  const programmingLanguageColor = getLanguageColor(
    programmingLanguageName,
    programmingLanguages
  );
  return (
    <div className="py-1 mt-4 mx-4 flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-900 lg:m-0">
      <span
        className="h-3 w-3 rounded-full shadow-sm border border-input"
        style={{ backgroundColor: programmingLanguageColor }}
      ></span>
      <span className="uppercase font-semibold">{programmingLanguageName}</span>
    </div>
  );
}
