'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';

const loginFormSchema = z.object({
  email: z.string().email().nonempty('Please provide your email'),
});

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: z.infer<typeof loginFormSchema>) => console.log(data);

  return (
    // temporary disabled the form for now
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">email</FormLabel>
              <FormControl>
                <Input {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="uppercase cursor-pointer" disabled>
          login
        </Button>
      </form>
    </Form>
  );
}
