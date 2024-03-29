"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";

const now = new Date();
const after14Days = new Date(now.setDate(now.getDate() + 14));

const formSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10).max(14),
  timeline: z.string(),
  budget: z.string().min(3),
  //   services: z.array(z.string()),
  description: z.string().optional(),
});

export function ContactForm() {
  const { toast } = useToast();

  const [date, setDate] = useState(after14Days);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      timeline: "",
      budget: "",
      description: "",
    },
  });

  const items = [
    {
      id: "branding",
      label: "Branding",
    },
  ];

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      data.timeline = date.toLocaleDateString();
      await axios.post("/api/send", data);
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onInvalid = (errors) => console.error(errors);

  if (!submitted) {
    return (
      <section>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Bruce Wayne" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-4 sm:flex-col">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1 sm:w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="bruce@waynecorp.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1 sm:w-full">
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="+94 76 1234567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block">Timeline</FormLabel>
                  <FormDescription className="mb-2 text-xs">
                    Minimum of 2 weeks is needed for development, but we can discuss.
                  </FormDescription>
                  <FormControl>
                    <Popover disabled={loading} className="sm:w-full">
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-72 justify-start text-left font-normal sm:w-full",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a Date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 sm:w-full">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget</FormLabel>
                  <FormControl>
                    <Input disabled={loading} className="w-72 sm:w-full" placeholder="LKR 35, 000 / $99" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea disabled={loading} rows={8} placeholder="Tell us about your project" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={loading} type="submit">
              Submit
            </Button>
          </form>
        </Form>
        <p className="mt-8">
          Hate forms? Send us an email at <a href="mailto:hello@neranjana.me" className="underline underline-offset-4 opacity-90 hover:opacity-100">hello@neranjana.me</a>
        </p>
      </section>
    );
  } else {
    return (
      <div className="text-left space-y-4 h-full mt-20">
        <h1 className="text-4xl font-bold">Thank you for your interest!</h1>
        <p className="text-lg leading-tight">
          We have received your message and we will get back to you in 1-2 business days.
        </p>
      </div>
    );
  }
}

export default ContactForm;
