import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ora Browser - Fast, Secure, and Minimal Browser for macOS",
  description:
    "Built on WebKit, designed for macOS. Ora delivers a clean, native experience that's simple, powerful, and free of bloat.",
  keywords: [
    "Ora Browser",
    "macOS browser",
    "WebKit browser",
    "native macOS browser",
    "SwiftUI browser",
    "fast browser",
    "secure browser",
    "beautiful browser",
    "minimal browser",
    "clean browser",
    "privacy-first browsing",
    "distraction-free browsing",
    "native experience",
    "tab management",
    "content blocker",
    "Safari alternative",
    "macOS native app",
    "Arc alternative",
    "Arc browser alternative",
    "better than Arc",
    "Arc replacement",
    "Zen alternative",
    "Zen browser alternative",
    "better than Zen",
    "Zen replacement",
    "Dia alternative",
    "Dia browser alternative",
    "better than Dia",
    "Dia replacement",
    "Brave alternative",
    "Chrome alternative",
    "SigmaOS alternative",
    "Firefox alternative",
    "Edge alternative",
    "Vivaldi alternative",
    "Opera alternative",
    "modern browser alternative",
    "productivity browser alternative",
    "aesthetic browser alternative",
  ],
  authors: [{ name: "The Ora Team" }],
  creator: "The Ora Team",
  publisher: "The Ora Team",
  category: "Technology",
  classification: "Web Browser Application",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-token",
  // },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/favicon.svg",
        href: "/icons/favicon.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/favicon-dark.svg",
        href: "/icons/favicon-dark.svg",
      },
    ],
  },
  openGraph: {
    title: "Ora Browser - Fast, Secure, and Minimal Browser for macOS",
    description:
      "Built on WebKit, designed for macOS. Ora delivers a clean, native experience that's simple, powerful, and free of bloat.",
    type: "website",
    url: "https://orabrowser.com",
    siteName: "Ora Browser",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ora Browser - Native macOS Browser built on WebKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ora Browser - Fast, Secure, and Minimal Browser for macOS",
    description:
      "Built on WebKit, designed for macOS. Clean, native experience that's simple, powerful, and free of bloat.",
    creator: "@orabrowser",
    site: "@orabrowser",
    images: ["/opengraph-image.png"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Analytics/>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                borderRadius: 0,
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
