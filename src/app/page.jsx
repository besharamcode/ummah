"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { h1 } from "@/constants/data";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/Themebutton";

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
      <main>
        <ModeToggle />
        <div className="grid place-items-center min-h-screen mx-4">
          <div className="border shadow-lg">
            <span className="font-caveat absolute top-[7vw] left-[5vw] select-none text-5xl blur-2xl h-10 w-10 bg-foreground rounded-full"></span>
            <span className="font-caveat absolute bottom-[7vw] right-[5vw] select-none text-5xl blur-2xl h-10 w-10 bg-foreground rounded-full"></span>
            <div className="sm:px-12 px-8 pt-12 pb-5">
              <div className="grid place-content-center mb-3">
                <Logo width={130} />
              </div>
              <h1 className="text-center my-2 capitalize font-bold text-lg w-5/6 mx-auto font-caveat">
                {h1.signup.eng}
              </h1>
              <h2 className="scroll-m-20 pb-4 text-xl font-semibold first:mt-0 text-center">
                Create your account
              </h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-2 sm:mx-auto sm:w-3/4"
                >
                  <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              placeholder="Fullname"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              placeholder="Username"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="email"
                              {...field}
                              placeholder="Email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="Password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="mt-4">
                    <Button className="w-full mt-4" type="submit">
                      Bismillah
                    </Button>
                  </div>

                  <Button
                    className="text-sm font-medium space-y-3 w-full"
                    variant="link"
                  >
                    <Link className="w-full " href="/in/auth/signin">
                      Already have account ?
                    </Link>
                  </Button>
                </form>
              </Form>
            </div>
            <p className="text-[11px] text-muted-foreground w-3/4 mx-auto text-center mb-3">
              By clicking &quot;Bismillah&quot;, you agree to the terms and
              conditions.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
