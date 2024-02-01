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
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmpassword: z
    .string()
    .min(8, {
      message: "Confirm password must be at least 8 characters.",
    })
    .refine((data) => data === formSchema.password, {
      message: "Passwords does not match",
    }),
});

export default function Home() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmpassword: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <h2 className="scroll-m-20 pb-4 text-xl font-semibold first:mt-0 text-center">
        New password
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 sm:mx-auto sm:w-3/4"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="confirmpassword"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Confirm password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="mt-4">
            <Button className="w-full mt-4" type="submit">
              Submit
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
