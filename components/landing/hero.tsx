type HeroProps={
  title?:string
  subHeading?:string
}

import { Button } from "../ui";
export default function Hero({title="The Snippet Tool For Developers",subHeading='Save, Share, and Organize Code Snippets'}:HeroProps) {
  return <div className="flex items-center justify-center ">
    <section className="border border-yellow-500 max-w-[644px] min-w-[300px] max-h-[375px]  min-h-[200px] text-center">
      


    <h1 className="text-[32px] md:text-[64px] sm:text-[24px] font-bold text-balance bg-linear-to-b from-white to-zinc-600 bg-clip-text text-transparent">
      {title}
     
    </h1>
    

    <h2 className="ml-15 md:text-[40px] text-[32px] sm:text-[24px] font-normal text-neutral-400 text-pretty ">
      {subHeading}
      </h2>
    <div className="flex-row mb-10 gap-y-3 ">
      <Button variant="outline" className="mr-5">
        Create Code Snippet
      </Button>
      <Button variant="outline">
        Browse Code Snippet
      </Button>
    </div>
    </section>

    </div>;
}
