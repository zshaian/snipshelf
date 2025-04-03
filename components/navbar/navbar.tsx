import ThemeToggle from '@/components/theme-toggle';
import User from '@/components/navbar/user';
import AddCodeSnippetCta from './add-code-snippet-cta';

export default function Navbar() {
  return (
    <nav className="px-2 py-2 flex items-center justify-between border-b border-dashed border-input">
      <p className="font-bold uppercase">snipshelf</p>
      <div className="flex items-center gap-x-2">
        <AddCodeSnippetCta />
        <div className="flex items-center">
          <ThemeToggle />
          <User />
        </div>
      </div>
    </nav>
  );
}
