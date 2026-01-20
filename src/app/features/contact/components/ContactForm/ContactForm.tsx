"use client";

import { useEffect } from "react";
import styles from "./ContactForm.module.css";
import useContactForm from "@/app/features/contact/hooks/useContactForm";
import { motion } from "motion/react";
import { ProgressBar } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// toast UI
const notify = () =>
  toast.success("お問い合わせありがとうございます！", {
    style: {
      border: "2px solid #bd4d0d",
      padding: "16px",
      color: "#000",
      fontSize: "14px",
      fontWeight: "bold",
    },
    iconTheme: {
      primary: "#bd4d0d",
      secondary: "#FFFAEE",
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
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            delay: 1.8,
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className={`${styles["contact-form-container"]} ${styles["scroll-driven-animation"]}`}
      >
        <Form {...form}>
          <Toaster position="bottom-right" reverseOrder={false} />
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="container max-w-(--breakpoint-md) mx-auto flex flex-col gap-5"
          >
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Username<span className={styles["required"]}>*</span>
                    </FormLabel>
                    <FormControl>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Input
                              placeholder="First & Last Name"
                              {...field}
                              className="px-4 py-7"
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
                    <FormLabel>
                      Email<span className={styles["required"]}>*</span>
                    </FormLabel>
                    <FormControl>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Input
                              placeholder="Your email address"
                              {...field}
                              className="px-4 py-7"
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
                  <FormLabel>
                    Subject<span className={styles["required"]}>*</span>
                  </FormLabel>
                  <FormControl>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Input placeholder="Subject" {...field} className="px-4 py-7" />
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
                  <FormLabel>
                    Message<span className={styles["required"]}>*</span>
                  </FormLabel>
                  <FormControl>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Textarea placeholder="Your message here..." {...field} />
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
            <div className={styles["contact-form-send-btn-container"]}>
              {form.formState.isSubmitting ? (
                <ProgressBar height="100" width="100" barColor="#ca510c99" borderColor="#bd4d0d" />
              ) : (
                <button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className={styles["contact-form-send-btn"]}
                >
                  <div className={styles["send-btn-bg"]} />
                  <span className={styles["send-btn-text"]}>Send</span>
                </button>
              )}
            </div>
          </form>
        </Form>
      </motion.div>
    </>
  );
};

export default ContactForm;
