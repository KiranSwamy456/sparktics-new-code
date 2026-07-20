"use client";

import React from "react";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  experience: z.string({ message: "Exprerience is required" }),
  resume: z.any().refine((file) => file?.length !== 0, "File is required"),
});

const JobCard = ({ job }) => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      experience: "",
      resume: "",
    },
  });

  function onSubmit(data) {

  }

  return (
    <li className="text-white text-xl md:text-3.5xl">
      <div className="flex items-center justify-between">
        <h3 className="text-xl md:text-3.5xl text-white font-semibold">{job.title} -</h3>
        <Dialog>
          <DialogTrigger asChild>
            <button className="text-secondary-2 text-xl md:text-3.5xl font-semibold">
              Apply
            </button>
          </DialogTrigger>
          <DialogContent className="bg-white max-w-[357px] md:max-w-xl max-h-[500px] md:max-h-full overflow-y-auto">
            <Form {...form}>
              <div>
                <h2 className="text-2xl text-black font-bold">
                  Apply for{" "}
                  <span className="text-secondary-2">{job.title}</span>
                </h2>
                <p className="text-sm sm:text-base mt-3">
                  Enter the relevant details and we will contact you if your
                  skills match our requirements
                </p>
              </div>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-normal">
                        Name
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
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-normal">
                        Years of experience
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
                  name="resume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-normal">
                        Resume
                        <div className="h-[194px] border border-black p-5 text-center flex items-center justify-center">
                          <h3 className="font-bold text-secondary-2">
                            Upload Resume
                          </h3>
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          multiple={false}
                          className="rounded-none sr-only"
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
        </Dialog>
      </div>
      <p className="font-normal text-lg mt-3">{job.description}</p>
    </li>
  );
};

export default JobCard;
