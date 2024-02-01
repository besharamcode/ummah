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
  email: z.string().email("This is not a valid email.").min(8, {
    message: "Please enter valid email!",
  }),
});

export default function Home() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <h2 className="scroll-m-20 pb-4 text-xl font-semibold first:mt-0 text-center">
        Account Details
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 sm:mx-auto sm:w-3/4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="email" placeholder="Email" />
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
