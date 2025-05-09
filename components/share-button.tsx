'use client';

import { IoCopyOutline, IoCheckmark } from 'react-icons/io5';
import { IoShareSocialOutline } from 'react-icons/io5';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Button,
  Label,
  Input,
} from '@/components/ui';
import { useEffect, useRef, useState } from 'react';
import { copyTextToClipBoard } from '@/lib';

export default function ShareButton({ id }: { id: string }) {
  const [copied, setCopied] = useState<boolean>(false);
  const linkInputRef = useRef<HTMLInputElement>(null);
  const [baseUrl, setBaseUrl] = useState<string>('');

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const handleCopyLink = async () => {
    const linkInputValue = linkInputRef.current?.value;

    if (typeof linkInputValue === 'string') {
      copyTextToClipBoard(linkInputValue, {
        // runs after a success copy of the text
        onSuccess() {
          setCopied(true);
          setTimeout(() => setCopied(false), 500);
        },
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="border-none rounded-none cursor-pointer"
        >
          <IoShareSocialOutline />
          <span>Share</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Code Snippet link</DialogTitle>
          <DialogDescription>
            Share this link with others to let them view your code snippet
            effortlessly.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={`${baseUrl}/${id}`}
              readOnly
              ref={linkInputRef}
            />
          </div>
          <Button
            type="button"
            size="sm"
            className="px-3 cursor-pointer"
            onClick={handleCopyLink}
          >
            <span className="sr-only">Copy</span>
            {copied ? <IoCheckmark /> : <IoCopyOutline />}
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="cursor-pointer"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
