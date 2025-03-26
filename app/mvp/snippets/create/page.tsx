import CodeEditor from '@/components/mvp/code-editor';
import CreateSnippetForm from '@/components/mvp/create-snippet-form';
import CreateSnippetFormMobile from '@/components/mvp/create-snippet-form-mobile';
import Navbar from '@/components/mvp/navbar';

export default function CreateSnippet() {
  return (
    <div className="h-screen flex flex-col relative">
      <Navbar />
      <main className="h-full flex flex-col">
        <p className="flex py-[0.5px] gap-2 items-center justify-center bg-input">
          <span className="h-2 w-2 inline-block bg-yellow-400 rounded-full"></span>
          <span className="capitalize font-semibold">javascript</span>
        </p>
        <div className="h-full flex w-full">
          <div className="flex-[0.5] hidden lg:block">
            <CreateSnippetForm />
          </div>
          <CodeEditor />
        </div>
      </main>
      <CreateSnippetFormMobile />
    </div>
  );
}
