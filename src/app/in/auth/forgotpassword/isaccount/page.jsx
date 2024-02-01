"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Form } from "@/components/ui/form";
import Link from "next/link";

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
          <div className="rounded-xl leading-5 border bg-card text-card-foreground shadow py-3 px-2 flex items-center">
            <div className="mr-3 ml-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p>_ahmed.code_</p>{" "}
              <small className="text-muted-foreground">Ahmed Aziz</small>
            </div>
          </div>

          <div className="mt-4">
            <Button className="w-full mt-4" type="submit">
              This Account
            </Button>
            <Button variant={"secondary"} className="w-full mt-4" type="submit">
              Cancle
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
