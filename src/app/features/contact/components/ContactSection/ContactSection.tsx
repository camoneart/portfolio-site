"use client";

import { ContactForm } from "../ContactForm";
import styles from "./ContactSection.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";

export const contactTitle = "Contact";
export const contactSubTitle = "お問い合わせ";

const ContactSection = () => {
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

export default ContactSection;
