import { Metadata } from 'next';
import { worksData } from '../components/Works/Works';

export async function generateWorkMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const workId = parseInt(params.id);
  const workData = worksData.find(w => w.id === workId);

  if (!workData) {
    return {
      title: "Work Not Found",
      description: "The requested work could not be found.",
    };
  }

  return {
    title: `${workData.workTitle}`,
    description: `このページでは、制作実績：「${workData.workTitle}」の詳細についてご紹介いたします。`,
  };
}