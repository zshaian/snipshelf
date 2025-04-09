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
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  Button,
} from '@/components/ui';
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { Editor } from '@monaco-editor/react';
import SnippetLanguageBar from '@/components/snippets/snippet-language-bar';
import { useTheme } from 'next-themes';
import programmingLanguages from '@/data/programming-languages.json';
import { getLanguageColor } from '@/lib/get-language-color';

const createSnippetFormSchema = z.object({
  title: z.string().nonempty('Title is required.'),
  description: z.string(),
  language: z.string().nonempty('please pick a language'),
  tags: z.array(z.string()),
  codeEditorValue: z.string(),
});

export default function SnippetForm() {
  const { resolvedTheme } = useTheme();
  const [snippetTags, setSnippetTags] = useState<Array<string>>([]);

  const form = useForm<z.infer<typeof createSnippetFormSchema>>({
    resolver: zodResolver(createSnippetFormSchema),
    defaultValues: {
      title: '',
      description: '',
      language: 'javascript',
      tags: snippetTags,
      codeEditorValue: '',
    },
  });
  const programmingLanguageName = form.watch('language');
  const onSubmit = (data: z.infer<typeof createSnippetFormSchema>) => {
    console.log(data);
  };

  return (
    <>
      <SnippetLanguageBar
        programmingLanguageColor={getLanguageColor(
          programmingLanguageName,
          programmingLanguages
        )}
        programmingLanguageName={programmingLanguageName}
      />
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
                <InputTag
                  customClass={{
                    inputTagLabelElement: 'font-[inherit]',
                    inputTagContainerElement: 'font-[inherit]',
                    inputTagInputElement:
                      'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent !px-3 !py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                    inputTagListContainerElement:
                      '!p-4 !border !border-input !gap-2',
                    inputTagTagItemElement:
                      '!bg-input/30 !py-0 border border-input',
                    inputTagTagContentElement: '!text-foreground',
                    inputTagTagRemoveBtnElement:
                      'text-sm !text-foreground hover:!text-destructive trasition',
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
                  <Link
                    href="/snippets"
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
                  <Editor
                    className="h-[350px] lg:h-[auto]"
                    theme={resolvedTheme === 'dark' ? 'vs-dark' : 'light'}
                    language={programmingLanguageName.toLowerCase()}
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
