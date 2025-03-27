import BackPage from '@/components/mvp/back-page';
import Navbar from '@/components/mvp/navbar';
import SnippetInfoView from '@/components/mvp/snippet-info-view';

export default function SnippetView() {
  return (
    <>
      <Navbar />
      <BackPage />
      <section>
        <SnippetInfoView />
      </section>
    </>
  );
}
