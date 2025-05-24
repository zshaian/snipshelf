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
import { useState } from 'react';
import { createSnippet } from '@/actions';
import { FiLoader } from 'react-icons/fi';
import CharacterLimit from './character-limit';

const createSnippetFormSchema = z.object({
  title: z.string().max(60, 'max limit is 60').nonempty('Title is required.'),
  description: z.string().max(250, 'max limit is 250'),
  language: z.string().nonempty('please pick a language'),
  tags: z.array(z.string()),
  code: z.string(),
});

export default function CreateSnippetForm() {
  const form = useForm<z.infer<typeof createSnippetFormSchema>>({
    resolver: zodResolver(createSnippetFormSchema),
    defaultValues: {
      title: '',
      description: '',
      language: 'javascript',
      tags: [],
      code: '',
    },
  });

  const programmingLanguageName = form.watch('language');
  const titleLength = form.watch('title').length;
  const descriptionLength = form.watch('description').length;

  const [snippetTags, setSnippetTags] = useState<Array<string>>([]);
  const [pending, setPending] = useState<boolean>(false);

  const onSubmit = async (data: z.infer<typeof createSnippetFormSchema>) => {
    const { title, description, language, code } = data;
    setPending(true);
    try {
      await createSnippet({
        title,
        description,
        language,
        tags: snippetTags,
        code,
      });
    } catch (error) {
      // TODO: handle this better with a toast or something similar.
      console.error(error);
    }
  };

  return (
    <>
      <SnippetLanguageBar programmingLanguageName={programmingLanguageName} />
      <Form {...form}>
        <form className="flex-1" onSubmit={form.handleSubmit(onSubmit)}>
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
                          maxLength={60}
                        />
                      </FormControl>
                      <div className="flex items-center justify-between">
                        <FormMessage />
                        <CharacterLimit charCount={titleLength} limit={60} />
                      </div>
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
                          maxLength={250}
                        />
                      </FormControl>
                      <div className="flex items-center justify-between">
                        <FormMessage />
                        <CharacterLimit
                          charCount={descriptionLength}
                          limit={250}
                        />
                      </div>
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
                  snippetTags={snippetTags}
                  setSnippetTags={setSnippetTags}
                />

                <div className="flex gap-2">
                  <Button
                    type="submit"
                    variant="outline"
                    className="cursor-pointer capitalize"
                    disabled={pending}
                  >
                    {pending && <FiLoader className="animate-spin" />}
                    <span>save code snippet</span>
                  </Button>
                  <Link
                    href="/"
                    className={cn(
                      buttonVariants({ variant: 'destructive' }),
                      'cursor-pointer capitalize',
                      pending && 'pointer-events-none opacity-50'
                    )}
                  >
                    cancel
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-4 flex-1 overflow-hidden lg:px-0">
              <FormField
                name="code"
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
