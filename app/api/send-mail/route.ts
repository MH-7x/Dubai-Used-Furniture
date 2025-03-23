import { EmailTemplate, ContactFormProps } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, phone, service, message, email, Date }: ContactFormProps =
    await req.json();

  if ([name, phone, service, message, email].some((field) => field === "")) {
    return NextResponse.json(
      { message: "All fields are required", success: false },
      { status: 400 }
    );
  }

  try {
    const { error } = await resend.emails.send({
      from: "Orders From Site <onboarding@resend.dev>",
      to: ["dubaiusedfurniture.ae@gmail.com"],
      subject: "New Order From Dubai Used Furniture",
      react: EmailTemplate({
        name,
        email,
        Date,
        message,
        phone,
        service,
      }),
    });
    if (error) {
      return NextResponse.json(
        {
          message: error.message,
          success: false,
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json({
      message: "Your Message has been sent successfully",
      success: true,
    });
  } catch (reason) {
    console.log("EMAIL SENDING ERROR :: ", reason);

    return NextResponse.json({
      message:
        reason instanceof Error ? reason.message : "Something went wrong",
      success: false,
    });
  }
}
