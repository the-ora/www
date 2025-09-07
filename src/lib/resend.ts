import { Resend, CreateEmailOptions } from "resend";

const resend = new Resend(process.env.RESEND);

export async function sendEmail(options: CreateEmailOptions) {
  await resend.emails.send(options);
}