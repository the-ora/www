import * as React from "react";
import {
  Html,
  Body,
  Img,
  Preview,
  Container,
  Text,
  Heading,
  Head,
} from "@react-email/components";

export function WaitlistEmail({ email }: { email: string }) {
  return (
    <Html lang="en">
      <Body
        style={{
          maxWidth: "672px",
          margin: "0 auto",
          fontFamily: "Geist, sans-serif",
        }}
      >
        <Head />
        <Preview>You are on the waitlist! 🎉 </Preview>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            color: "black",
            padding: "24px",
          }}
        >
          <Img
            style={{ maxWidth: "576px", width: "100%" }}
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/email-banner.png`}
            alt="ora browser log banner"
          />
          <div style={{ height: "40px" }} />
          <Heading>Hawdy👋!</Heading>
          <div style={{ height: "40px" }} />

          <Text style={{ fontFamily: "monospace" }}>
            Thanks for joining Ora’s waitlist! We’ll update you on our launch.
          </Text>
          <div style={{ height: "40px" }} />

          <Text style={{ fontFamily: "monospace" }}>
            To keep up to date, follow us on Twitter{" "}
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "14px",
              fontFamily: "monospace",
            }}
          >
            <a
              style={{ textDecoration: "underline", color: "#3b82f6" }}
              href="https://x.com/orabrowser"
            >
              Ora Browser
            </a>
            <a
              style={{ textDecoration: "underline", color: "#3b82f6" }}
              href="https://x.com/yonathandejene"
            >
              Yonaries
            </a>
            <a
              style={{ textDecoration: "underline", color: "#3b82f6" }}
              href="https://x.com/keni_ax"
            >
              Keni
            </a>
          </div>
        </Container>
      </Body>
    </Html>
  );
}
