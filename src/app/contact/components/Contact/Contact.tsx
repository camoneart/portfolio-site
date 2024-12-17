"use client";

import React from "react";
import ContactForm from "@/app/features/contact/components/ContactForm/ContactForm";
import styles from "./Contact.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";

export const contactTitle = "Contact Form";
export const contactSubTitle = "お問い合わせ";

const Contact = () => {
  return (
    <section className={styles["contact-section"]}>
      <TitleAnimation title={contactTitle} subTitle={contactSubTitle} />
      <ContactForm />
    </section>
  );
};

export default Contact;
