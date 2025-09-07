import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
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
  title: "Ora Browser",
  description: "Less noise, more browsing.",
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
    title: "Ora Browser",
    description: "Less noise, more browsing.",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ora Browser - Less noise, more browsing.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ora Browser",
    description: "Less noise, more browsing.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
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
