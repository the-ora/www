"use server"
import { sendEmail } from '@/lib/resend'
import { redis } from '../lib/redis'

export async function addToWaitlist(email: string) {
  if (!email) throw new Error('email is required')

  await redis.sadd('ora:waitlist', email)

  return { success: true }
}

export async function sendJoiningEmail(email: string) {
  await sendEmail({
    from: process.env.RESEND_FROM!,
    to: [email],
    subject: 'Welcome to our waitlist!',
    html: `<p>Thank you for joining our waitlist!</p>`
  })
}
