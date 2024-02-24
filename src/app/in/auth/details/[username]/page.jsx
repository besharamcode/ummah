/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getCookies, hasCookie } from "cookies-next";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, differenceInYears } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  mobile: z
    .string()
    .regex(/^(?:\+?(\d{1,3}))?[\s-]?\(?(\d{3})\)?[\s-]?(\d{3})[\s-]?(\d{4})$/, {
      message: "Must be a valid international mobile number",
    }),
  dob: z
    .date({
      required_error: "Date of birth is required",
    })
    .refine(
      (date) => {
        // Custom validation logic to check if age is greater than 13
        const userAge = differenceInYears(new Date(), date);
        return userAge > 13;
      },
      {
        message: "You must be at least 13 years old",
      }
    ),
  gender: z.string({
    required_error: "Please select gender",
  }),
});

export default function Userverified({}) {
  const router = useRouter();
  const cookieStore = getCookies();

  useEffect(() => {
    if (!hasCookie("UV_Token")) {
      // router.push("/");
    }
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: "",
      dob: "",
      gender: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <h2 className="scroll-m-20 pb-4 text-xl font-semibold first:mt-0 text-center">
        Little more about you
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 sm:mx-auto sm:w-3/4"
        >
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Mobile Number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => {
              return (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="prefer not to say">
                        Prefer not to say
                      </SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => {
              return (
                <FormItem>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Date of birth</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
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
