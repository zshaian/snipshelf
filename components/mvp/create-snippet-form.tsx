'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { InputTag } from 'react-tagit';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PiWarningCircle } from 'react-icons/pi';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CreateSnippetFormSchema = z.object({
  title: z.string().nonempty('Title is required.'),
  description: z.string(),
  language: z.string().nonempty('please pick a language'),
  tags: z.array(z.string()),
});

export default function CreateSnippetForm() {
  const [snippetTags, setSnippetTags] = useState<Array<string>>([]);
  const form = useForm<z.infer<typeof CreateSnippetFormSchema>>({
    resolver: zodResolver(CreateSnippetFormSchema),
    defaultValues: {
      title: '',
      description: '',
      language: 'javascript',
      tags: [],
    },
  });
  const onSubmit = (data: z.infer<typeof CreateSnippetFormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="text-3xl capitalize font-bold p-4 border-b border-input">
          create code snippet
        </h1>
        <div className="p-4 flex flex-col gap-4">
          {/* snippet title input */}
          <FormField
            control={form.control}
            name="title"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="capitalize">title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g., Shuffle array, Sort array"
                  />
                </FormControl>
                <span className="flex gap-1 items-center">
                  <PiWarningCircle
                    className={`!size-4 text-destructive font-bold hidden ${fieldState.invalid && 'inline'}`}
                  />
                  <FormMessage />
                </span>
              </FormItem>
            )}
          />
          {/* snippet description textarea */}
          <FormField
            control={form.control}
            name="description"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="capitalize">description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="e.g., Code snippet for shuffling an array."
                    className="resize-none"
                  />
                </FormControl>
                <span className="flex gap-1 items-center">
                  <PiWarningCircle
                    className={`!size-4 text-destructive font-bold hidden ${fieldState.invalid && 'inline'}`}
                  />
                  <FormMessage />
                </span>
              </FormItem>
            )}
          />
          {/* snipet programming language */}
          <FormField
            control={form.control}
            name="language"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="capitalize">language</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="capitalize w-full">
                      <SelectValue placeholder="select a programming language" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="capitalize">
                    <SelectItem value="javascript">javascript</SelectItem>
                    <SelectItem value="typescript">typescript</SelectItem>
                    <SelectItem value="python">python</SelectItem>
                  </SelectContent>
                </Select>
                <span className="flex gap-1 items-center">
                  <PiWarningCircle
                    className={`!size-4 text-destructive font-bold hidden ${fieldState.invalid && 'inline'}`}
                  />
                  <FormMessage />
                </span>
              </FormItem>
            )}
          />
          {/* snippet tags */}
          <InputTag
            customClass={{
              inputTagLabelElement: 'font-[inherit]',
              inputTagContainerElement: 'font-[inherit]',
              inputTagListContainerElement: '!p-4 !border !border-input !gap-2',
              inputTagTagItemElement: '!bg-input/30 !py-0 border border-input',
              inputTagTagContentElement: '!text-foreground',
              inputTagTagRemoveBtnElement: 'text-sm !text-foreground',
            }}
            value={snippetTags}
            onChange={setSnippetTags}
            maxTags={5}
            maxTagsValue={25}
            theme="theme-1"
            separator="Space"
          />
          <div className="flex gap-2">
            <Button
              type="submit"
              variant="outline"
              className="cursor-pointer capitalize"
            >
              save code snippet
            </Button>
            <Button
              type="button"
              variant="destructive"
              className="cursor-pointer capitalize"
            >
              cancel
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
