"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { agree, h1 } from "@/constants/data";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const formSchema = z.object({
  fullname: z.string().min(4, {
    message: "Fullname must be at least 4 characters.",
  }),
  username: z
    .string()
    .min(4)
    .max(20)
    .regex(/^[a-z0-9_\.]+$/, {
      message: "Please enter valid username!",
    }),
  email: z.string().email("This is not a valid email.").min(8, {
    message: "Please enter valid email!",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function Home() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      fullname: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <h2 className="scroll-m-20 pb-4 text-xl font-semibold first:mt-0 text-center">
        Login
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 sm:mx-auto sm:w-3/4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Username" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            type="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            className="w-full text-sm font-medium text-start mt-1 ml-1"
            href="/in/auth/forgotpassword"
          >
            Forgotten password ?
          </Link>
          <div className="mt-4">
            <Button className="w-full mt-4" type="submit">
              Bismillah
            </Button>
          </div>

          <Button
            className="text-sm font-medium space-y-3 w-full"
            variant="link"
          >
            <Link className="w-full " href="/">
              Don&apos;t have account ?
            </Link>
          </Button>
        </form>
      </Form>
    </>
  );
}
