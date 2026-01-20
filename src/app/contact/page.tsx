import { Metadata } from "next";
import StairsTransition from "../components/Animation/StairsTransition/StairsTransition";
import * as Contact from "@/app/features/contact/components";

export const metadata: Metadata = {
  title: "Contact",
  description: "このページは、aoyama｜Web Engineerのお問い合わせページになります。",
};

const ContactPage = () => {
  return (
    <div className="common-container">
      <StairsTransition>
        <Contact.ContactSection />
      </StairsTransition>
    </div>
  );
};

export default ContactPage;
