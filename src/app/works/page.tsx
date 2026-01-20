import { Metadata } from "next";
import StairsTransition from "../components/Animation/StairsTransition/StairsTransition";
import * as Works from "@/app/features/works/components";

export const metadata: Metadata = {
  title: "Works",
  description: "このページでは、Kaishu Aoyamaが制作した作品を一覧で紹介しています。",
};

const WorksPage = () => {
  return (
    <div className="common-container">
      <StairsTransition>
        <Works.WorksSection />
      </StairsTransition>
    </div>
  );
};

export default WorksPage;
