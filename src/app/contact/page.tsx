import React from "react";
import { Metadata } from "next";
import Contact from "@/app/contact/components/Contact/Contact";
import StairsTransition from "../components/Animation/StairsTransition/StairsTransition";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "このページは、aoyama｜Web Engineerのお問い合わせページになります。",
};

const ContactPage = () => {
  return (
    <>
      <div className="common-container">
        <StairsTransition>
          <Contact />
        </StairsTransition>
      </div>
    </>
  );
};

export default ContactPage;
