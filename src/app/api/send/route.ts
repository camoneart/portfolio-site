import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  
const formData = await request.formData();

  const username = formData.get("username") as string;
  const subject = formData.get("subject") as string;
  const email = formData.get("email") as string;
  const content = formData.get("content") as string;
  const file = formData.get("file") as File;

  if (!username || !subject || !email || !content || !file) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  // ファイルをBase64に変換
  const buffer = await file.arrayBuffer();
  const base64Content = Buffer.from(buffer).toString('base64');

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["aoyamadeveloper@gmail.com"],
      subject,
      react: EmailTemplate({
        username,
        email,
        content,
      }) as React.ReactElement,
      attachments: [{
        filename: file.name,
        content: base64Content
      }],
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
