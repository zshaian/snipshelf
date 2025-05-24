import Link from 'next/link';
import { PiWarningOctagonBold } from 'react-icons/pi';

export default function CautionBlock() {
  return (
    <div className="p-6 m-4 w-max mx-auto flex flex-col bg-amber-400/30 border border-amber-500 rounded-sm">
      <p className="flex items-center gap-x-1 font-bold text-lg">
        <PiWarningOctagonBold />
        <span>Caution</span>
      </p>

      <p>
        Project is still under development, you can see the demo route{' '}
        <Link href="/mvp" className="hover:underline text-blue-400">
          here
        </Link>
      </p>
    </div>
  );
}
