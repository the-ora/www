import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Try to get IP from various headers (common in production environments)
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip");

  let ip = "unknown";

  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, get the first one
    ip = forwarded.split(",")[0].trim();
  } else if (realIp) {
    ip = realIp;
  } else if (cfConnectingIp) {
    ip = cfConnectingIp;
  } else {
    // Fallback IP for development/localhost
    ip = "127.0.0.1";
  }

  return NextResponse.json({ ip });
}
