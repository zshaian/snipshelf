export default function CharacterLimit({
  charCount,
  limit,
}: {
  charCount: number;
  limit: number;
}) {
  return (
    <div className="ml-auto text-xs text-zinc-400 font-semibold flex gap-x-1">
      <span>{charCount}</span>
      <span>/</span>
      <span>{limit}</span>
    </div>
  );
}
