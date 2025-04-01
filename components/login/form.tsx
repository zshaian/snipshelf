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
import OAuthLoginOption from '@/components/login/oauth-login-option';

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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 lg:justify-center lg:flex-1 lg:p-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="uppercase cursor-pointer">
          login
        </Button>
        <div
          className="flex items-center justify-center relative
        before:h-[0.5px] before:w-full before:bg-input before:absolute before:-z-10 before:rounded-md"
        >
          <span className="uppercase bg-background">or</span>
        </div>
        <OAuthLoginOption />
      </form>
    </Form>
  );
}
