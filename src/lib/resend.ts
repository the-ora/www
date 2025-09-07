import { Resend, CreateEmailOptions } from "resend";

const resend = new Resend(process.env.RESEND);

export async function sendEmail(options: CreateEmailOptions) {
  try {
    await resend.emails.send(options);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}