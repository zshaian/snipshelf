'use client';

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
} from '@/components/ui';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteSnippet } from '@/actions/delete-snippet';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { FiLoader } from 'react-icons/fi';

export default function DeleteSnippetButton({
  snippetId,
  userId,
}: {
  snippetId: string;
  userId: string;
}) {
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsOwner(user?.id === userId);
    };

    checkUser();
  }, [userId]);

  const handleDelete = async () => {
    setPending(true);
    try {
      await deleteSnippet(snippetId);
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-destructive rounded-none cursor-pointer"
          hidden={!isOwner}
        >
          <AiOutlineDelete />
          <span>Delete</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Code Snippet</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this code snippet? This action
            cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="justify-start">
          <DialogClose asChild>
            <Button
              variant="secondary"
              className="cursor-pointer"
              disabled={pending}
            >
              Cancel
            </Button>
          </DialogClose>

          <Button
            variant="destructive"
            className="cursor-pointer"
            onClick={handleDelete}
            disabled={pending}
          >
            {pending && <FiLoader className="animate-spin" />}
            <span>Delete</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
