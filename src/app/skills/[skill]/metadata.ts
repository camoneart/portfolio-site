import { Metadata } from 'next';
import { skillsData } from "../components/Skills/Skills";

export async function generateSkillMetadata({ params }: { params: { skill: string } }): Promise<Metadata> {
  const skillData = skillsData.find(s => s.skillLink === params.skill);

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