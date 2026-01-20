import { Metadata } from "next";
import { skillsData } from "@/app/features/skills/data/skills";

export async function generateSkillMetadata({
  params,
}: {
  params: Promise<{ skill: string }>;
}): Promise<Metadata> {
  const { skill } = await params;
  const skillData = skillsData.find((s) => s.skillLink === skill);

  if (!skillData) {
    return {
      title: "Skill Not Found",
      description: "The requested skill could not be found.",
    };
  }

  return {
    title: `${skillData.skillTitle}`,
    description: `このページでは、「${skillData.skillTitle}」を使用して出来ることについてご紹介いたします。`,
  };
}
