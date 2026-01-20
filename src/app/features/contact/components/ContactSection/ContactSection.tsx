"use client";

import styles from "./ContactSection.module.css";
import TitleAnimation from "@/app/components/Animation/TitleAnimation/TitleAnimation";
import Breadcrumb from "@/app/components/elements/Breadcrumb/Breadcrumb";
import * as Contact from "@/app/features/contact/components";

export const contactTitle = "Contact";
export const contactSubTitle = "お問い合わせ";

const ContactSection = () => {
  return (
    <>
      <Breadcrumb title={contactTitle} />
      <section className={styles["contact"]}>
        <TitleAnimation title={contactTitle} subTitle={contactSubTitle} />
        <Contact.ContactForm />
      </section>
    </>
  );
};

export default ContactSection;
