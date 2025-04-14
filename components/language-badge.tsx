import { getLanguageColor } from '@/lib/get-language-color';
import programmingLanguages from '@/data/programming-languages.json';

export default function LanguageBadge({
  programmingLanguageName,
}: {
  programmingLanguageName: string;
}) {
  const programmingLanguageColor = getLanguageColor(
    programmingLanguageName,
    programmingLanguages
  );

  return (
    <>
      <span
        className="h-3 w-3 rounded-full shadow-sm border border-input"
        style={{ backgroundColor: programmingLanguageColor }}
      ></span>
      <span className="uppercase font-semibold">{programmingLanguageName}</span>
    </>
  );
}
