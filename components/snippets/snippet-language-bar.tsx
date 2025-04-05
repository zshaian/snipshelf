type SnippetLanguageBar = {
  programmingLanguageName: string;
  programmingLanguageColor: string;
};

export default function SnippetLanguageBar({
  programmingLanguageName,
  programmingLanguageColor,
}: SnippetLanguageBar) {
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
