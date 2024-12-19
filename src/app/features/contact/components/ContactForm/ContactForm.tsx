"use client";

import React, { useEffect } from "react";

import styles from "./ContactForm.module.css";

import useContactForm from "@/app/features/contact/hooks/useContactForm";

import { ProgressBar } from "react-loader-spinner";

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

import toast, { Toaster } from "react-hot-toast";

// toast UI
const notify = () =>
  toast.success('お問い合わせありがとうございます！', {
    style: {
      border: '1px solid #bd4d0d',
      padding: '16px',
      color: '#000',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    iconTheme: {
      primary: '#bd4d0d',
      secondary: '#FFFAEE',
    },
  });

const ContactForm = () => {
  const { form, onSubmit } = useContactForm();

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      notify();
    }
  }, [form.formState.isSubmitSuccessful]);

  return (
    <>
      <div className={styles["contact-form-container"]}>
        <Form {...form}>
          <Toaster position="top-center" reverseOrder={false} />
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`container max-w-screen-md mx-auto flex flex-col gap-5 ${styles["contact-form"]}`}
          >
            <div className="grid grid-cols-2 gap-5">
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
                            <Input
                              placeholder="First & Last Name"
                              {...field}
                              className="px-3 py-6 md:text-sm"
                            />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Input
                              placeholder="Your email address"
                              {...field}
                              className="px-3 py-6 md:text-sm"
                            />
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
            </div>
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
                          <Input
                            placeholder="Subject"
                            {...field}
                            className="px-3 py-6 md:text-sm"
                          />
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
            <div className="contact-form-send-btn-container">
              {form.formState.isSubmitting
              ? <ProgressBar height="100" width="100" barColor="#ca510c99" borderColor="#bd4d0d" />
              :
                <div className="contact-form-send-btn-bg">
                  <Button type="submit" disabled={form.formState.isSubmitting}>Send</Button>
                </div>
              }
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
