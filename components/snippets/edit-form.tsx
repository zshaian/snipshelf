'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { InputTag } from '@/components/ui';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  Button,
} from '@/components/ui';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import SnippetLanguageBar from '@/components/snippets/snippet-language-bar';
import programmingLanguages from '@/data/programming-languages.json';
import SnippetEditor from '@/components/snippets/snippet-editor';
import type { SnippetProps } from '@/types';

const createSnippetFormSchema = z.object({
  title: z.string().nonempty('Title is required.'),
  description: z.string(),
  language: z.string().nonempty('please pick a language'),
  tags: z.array(z.string()),
  codeEditorValue: z.string(),
});

export default function EditForm({
  snippetInfo,
}: {
  snippetInfo: SnippetProps;
}) {
  const form = useForm<z.infer<typeof createSnippetFormSchema>>({
    resolver: zodResolver(createSnippetFormSchema),
    defaultValues: {
      title: snippetInfo.title || '',
      description: snippetInfo.description || '',
      language: snippetInfo.language || '',
      tags: snippetInfo.tags || [],
      codeEditorValue: snippetInfo.code || '',
    },
  });

  const programmingLanguageName = form.watch('language');

  const onSubmit = (data: z.infer<typeof createSnippetFormSchema>) => {
    console.log(data);
  };
  return (
    <>
      <SnippetLanguageBar programmingLanguageName={programmingLanguageName} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1">
          <div className="h-full flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col flex-[0.5] border-b lg:border-r border-input lg:dark:border-none">
              <h1 className="text-3xl capitalize font-bold p-4 border-b border-input">
                create code snippet
              </h1>
              <div className="p-4 flex flex-col gap-4">
                {/* snippet title input */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">title</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="e.g., Shuffle array, Sort array"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* snippet description textarea */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">description</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="e.g., Code snippet for shuffling an array."
                          className="resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* snipet programming language */}
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">language</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="uppercase w-full">
                            <SelectValue placeholder="select a programming language" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="uppercase">
                          {programmingLanguages.map(
                            ({ programmingLanguageName }) => (
                              <SelectItem
                                key={programmingLanguageName}
                                value={programmingLanguageName.toLowerCase()}
                              >
                                {programmingLanguageName}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* snippet tags */}
                <InputTag />

                <div className="flex gap-2">
                  <Button
                    type="submit"
                    variant="outline"
                    className="cursor-pointer capitalize"
                  >
                    save code snippet
                  </Button>
                  <Link
                    href="/"
                    className={cn(
                      buttonVariants({ variant: 'destructive' }),
                      'cursor-pointer capitalize'
                    )}
                  >
                    cancel
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-4 flex-1 overflow-hidden lg:px-0">
              <FormField
                name="codeEditorValue"
                control={form.control}
                render={({ field }) => (
                  <SnippetEditor
                    programmingLanguageName={programmingLanguageName}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
