import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import CreateSnippetForm from '@/components/mvp/create-snippet-form';
import { ScrollArea } from '../ui/scroll-area';
import { IoOptionsOutline } from 'react-icons/io5';

export default function CreateSnippetFormMobile() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-[90%] font-bold capitalize lg:hidden absolute bottom-8 -translate-x-1/2 left-1/2 z-50">
          <IoOptionsOutline />
          <span>open code snippet form</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="sr-only">create snippet form</DrawerTitle>
        </DrawerHeader>
        <ScrollArea className="h-[60vh]">
          <CreateSnippetForm />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
