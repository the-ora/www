"use server";
import { sendEmail } from "@/lib/resend";
import { WaitlistEmail } from "@/components/emails/waitlist";
import { redis } from "../lib/redis";
import { render } from "@react-email/render";

export async function addToWaitlist(email: string) {
  if (!email) throw new Error("email is required");

  await redis.sadd("ora:waitlist", email);

  return { success: true };
}

export async function sendJoiningEmail(email: string) {
  const emailHtml = await render(WaitlistEmail({ email }));

  await sendEmail({
    from: process.env.RESEND_FROM!,
    to: [email],
    subject: "You are on the waitlist! 🎉",
    html: emailHtml,
  });
}
