"use client";

import React, { useEffect } from "react";

import styles from "./ContactForm.module.css";

import useContactForm from "@/app/features/contact/hooks/useContactForm";

import { ClipLoader } from "react-spinners";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import toast, { Toaster } from 'react-hot-toast';

// toast UI
// const notify = () => toast.success('送信に成功しました！');
const notify = () => toast.custom((t) => (
  <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
            alt=""
          />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">
            Emilia Gates
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Sure! 8:30pm works great!
          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
    </div>
  </div>
));

const ContactForm = () => {
  const { form, onSubmit } = useContactForm();

  useEffect(() => {
    if(form.formState.isSubmitSuccessful) {
      notify();
    }
  }, [form.formState.isSubmitSuccessful]);

  return (
    <>
      <Form {...form}>
        <Toaster position="top-center" reverseOrder={false} />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`container xl:max-w-screen-md mx-auto flex flex-col gap-5 ${styles["contact-form"]}`}
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Input placeholder="First & Last Name" {...field} className="px-3 py-6 md:text-sm" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>お名前を入力してください</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Input placeholder="Your email address" {...field} className="px-3 py-6 md:text-sm" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>メールアドレスを入力してください</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Input placeholder="Subject" {...field} className="px-3 py-6 md:text-sm" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>件名を入力してください</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Textarea
                          placeholder="Your message here..."
                          {...field}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>お問い合わせ内容を入力してください</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="file"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Picture</FormLabel>
                <FormControl>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Input
                          accept="image/*,.pdf"
                          placeholder="Picture or PDF"
                          type="file"
                          {...field}
                          onChange={(event) => {
                            onChange(event.target.files);
                          }}
                          className="cursor-pointer px-2 py-2"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>画像またはPDFをアップロードできます</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? <ClipLoader /> : "Send"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
