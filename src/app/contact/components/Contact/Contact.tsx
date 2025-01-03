"use client";

import React from "react";
import ContactForm from "@/app/features/contact/components/ContactForm/ContactForm";
import styles from "./Contact.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";
export const contactTitle = "Contact";
export const contactSubTitle = "お問い合わせ";

const Contact = () => {
  return (
    <>
      <Breadcrumb title={contactTitle} />
      <section className={styles["contact"]}>
        <TitleAnimation title={contactTitle} subTitle={contactSubTitle} />
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
