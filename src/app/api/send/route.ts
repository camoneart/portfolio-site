import * as Contact from "@/app/features/contact/components/index";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  
const formData = await request.formData();

  const username = formData.get("username") as string;
  const subject = formData.get("subject") as string;
  const email = formData.get("email") as string;
  const content = formData.get("content") as string;

  if (!username || !subject || !email || !content) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // 管理者向けメール送信
    const { data: adminMailData, error: adminMailError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Acme <onboarding@resend.dev>",
      to: ["aoyamadeveloper@gmail.com"],
      subject,
      react: Contact.AdminEmailTemplate({
        username,
        email,
        content,
      }) as React.ReactElement,
    });

    if (adminMailError) {
      console.error('Admin mail error:', adminMailError);
      return Response.json({
        error: "Failed to send admin notification",
        details: adminMailError
      }, { status: 500 });
    }

    // お問い合わせ者向け自動返信メール
    const { data: autoReplyData, error: autoReplyError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "お問い合わせありがとうございます",
      react: Contact.AutoReplyEmailTemplate({
        username,
        content,
      }) as React.ReactElement,
    });

    if (autoReplyError) {
      console.error('Auto reply error:', autoReplyError);
      return Response.json({
        error: "Failed to send auto-reply",
        details: autoReplyError
      }, { status: 500 });
    }

    return Response.json({
      success: true,
      adminMailData,
      autoReplyData
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    return Response.json({
      error: "An unexpected error occurred",
      details: error
    }, { status: 500 });
  }
}
