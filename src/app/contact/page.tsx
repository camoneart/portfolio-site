import { Metadata } from "next";
import { ContactSection } from "@/app/features/contact/components";
import StairsTransition from "../components/Animation/StairsTransition/StairsTransition";

export const metadata: Metadata = {
  title: "Contact",
  description: "このページは、aoyama｜Web Engineerのお問い合わせページになります。",
};

const ContactPage = () => {
  return (
    <div className="common-container">
      <StairsTransition>
        <ContactSection />
      </StairsTransition>
    </div>
  );
};

export default ContactPage;
