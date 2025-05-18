import CautionBlock from '@/components/caution-block';
import Navbar from '@/components/navbar/navbar';

export default async function SnippetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <CautionBlock />
      <main className="mt-4 px-8 flex flex-col gap-4">{children}</main>
    </>
  );
}
