'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { Button } from '@/components/ui/button';
import { FiGithub } from 'react-icons/fi';
import { TbBrandGoogle } from 'react-icons/tb';
import { PiWarningCircle } from 'react-icons/pi';

const LoginFormSchema = z.object({
  email: z.string().email(),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: z.infer<typeof LoginFormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="lg:p-16 flex flex-col gap-4 lg:flex-1 lg:justify-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="capitalize">email</FormLabel>
              <FormControl>
                <Input {...field} />
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
        <Button
          type="submit"
          variant="default"
          className="uppercase cursor-pointer"
        >
          login
        </Button>
        <div
          className="flex items-center justify-center relative
        before:h-[0.5px] before:w-full before:bg-input before:absolute before:-z-10 before:rounded-md"
        >
          <span className="uppercase bg-background">or</span>
        </div>
        <div className="flex justify-center">
          <Button variant="ghost" className="py-2 h-auto w-auto cursor-pointer">
            <FiGithub className="!size-8" />
          </Button>
          <Button variant="ghost" className="py-2 h-auto w-auto cursor-pointer">
            <TbBrandGoogle className="!size-8" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
