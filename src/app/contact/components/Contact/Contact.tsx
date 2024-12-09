import React from "react";
import ContactForm from "@/app/features/contact/components/ContactForm/ContactForm";
import styles from "./Contact.module.css";


const Contact = () => {
  return (
    <section className={styles["contact-section"]}>
      <h1
        className={`text-8xl font-black tracking-wide text-center mt-5 mb-14 select-none ${styles["contact-title"]}`}
      >
        Contact Form
      </h1>
      <ContactForm />
    </section>
  );
};

export default Contact;
