"use server";
import { sendEmail } from "@/lib/resend";
import { WaitlistEmail } from "@/components/emails/waitlist";
import { ratelimit, redis } from "../lib/redis";
import { render } from "@react-email/render";

export async function addToWaitlist(email: string, ip: string) {
  if (!email) throw new Error("email is required");

  const { success } = await ratelimit.limit(ip);
  if (!success) throw new Error("Too many requests, please try again later.");

  const added = await redis.sadd("ora:waitlist", email);
  const isNewEmail = added === 1;

  return { success: true, isNewEmail };
}

export async function getWaitlistCount() {
  const count = await redis.scard("ora:waitlist");
  return count;
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
