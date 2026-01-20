import { SkillsSection } from "@/app/features/skills/components";
import { Metadata } from "next";
import StairsTransition from "../components/Animation/StairsTransition/StairsTransition";

export const metadata: Metadata = {
  title: "Skills",
  description: "このページでは、Kaishu Aoyamaのスキルセットをご紹介いたします。",
};

const SkillsPage = () => {
  return (
    <div className="common-container">
      <StairsTransition>
        <SkillsSection />
      </StairsTransition>
    </div>
  );
};

export default SkillsPage;
