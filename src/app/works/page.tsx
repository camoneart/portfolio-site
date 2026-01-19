import { WorksSection } from "@/app/features/works/components";
import { Metadata } from "next";
import StairsTransition from "../components/Animation/StairsTransition/StairsTransition";

export const metadata: Metadata = {
  title: "Works",
  description: "このページでは、Kaishu Aoyamaが制作した作品を一覧で紹介しています。",
};

const WorksPage = () => {
  return (
    <div className="common-container">
      <StairsTransition>
        <WorksSection />
      </StairsTransition>
    </div>
  );
};

export default WorksPage;
