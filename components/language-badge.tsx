import { getLanguageColor } from '@/lib';
import programmingLanguages from '@/data/programming-languages.json';

export default function LanguageBadge({ language }: { language: string }) {
  const programmingLanguageColor = getLanguageColor(
    language,
    programmingLanguages
  );

  return (
    <>
      <span
        className="h-3 w-3 rounded-full shadow-sm border border-input"
        style={{ backgroundColor: programmingLanguageColor }}
      ></span>
      <span className="capitalize font-semibold">{language}</span>
    </>
  );
}
