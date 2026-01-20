import { Metadata } from "next";
import { worksData } from "@/app/features/works/data/works";

export async function generateWorkMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const workId = parseInt(id);
  const workData = worksData.find((w) => w.id === workId);

  if (!workData) {
    return {
      title: "Work Not Found",
      description: "The requested work could not be found.",
    };
  }

  return {
    title: `${workData.workTitle}`,
    description: `このページでは、Kaishu Aoyamaの作品：「${workData.workTitle}」の詳細についてご覧いただけます。`,
  };
}
