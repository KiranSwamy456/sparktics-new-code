import React from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { DialogClose, DialogContent } from "./ui/dialog";
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string({ message: "Phone is required" }),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <DialogContent className="bg-white max-w-[357px] md:max-w-xl max-h-[500px] md:max-h-full overflow-y-auto">
        <Form {...form}>
          <div>
            <h2 className="text-2xl text-black font-bold">Contact Us</h2>
            <p className="text-sm sm:text-base mt-3">
              Share your details and requirement briefly, We will reach back to
              you as soon as possible
            </p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-normal">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none py-6 px-2 border border-[#231F20] text-base focus:outline-0 focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-normal">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none py-6 px-2 border border-[#231F20] text-base focus:outline-0 focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-normal">
                    Email Id
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-none py-6 px-2 border border-[#231F20] text-base focus:outline-0 focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="requirement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-normal">
                    Requirement
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="rounded-none h-[220px] py-6 px-2 border border-[#231F20] text-base focus:outline-0 focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-5 items-center">
              <DialogClose asChild>
                <button
                  className="rounded-full px-8 py-3 border text-base"
                  type="button"
                >
                  Close
                </button>
              </DialogClose>
              <button
                className="rounded-full px-8 py-3 text-base bg-secondary-2 text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </>
  );
};

export default ContactForm;
