import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { fullName, email, phone, timeline, budget, description } = await req.json();

  try {
    const data = resend.emails.send({
      from: "mail@neranjana.me",
      to: "neranjanaprsd@gmail.com",
      subject: "New Form Submission",
      react: EmailTemplate({ fullName, email, phone, timeline, budget, description }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
