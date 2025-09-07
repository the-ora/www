import { Metadata } from "next";

export const siteConfig = {
  name: "Ora Browser",
  shortName: "Ora",
  description:
    "Built on WebKit, designed for macOS. Ora delivers a clean, native experience that's simple, powerful, and free of bloat.",
  url: "https://orabrowser.com",
  ogImage: "/opengraph-image.png",
  creator: "@orabrowser",
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
};

// Simple structured data for single-page site
export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function createSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BrowserApplication",
    operatingSystem: "macOS",
    description: siteConfig.description,
    url: siteConfig.url,
    downloadUrl: "https://github.com/the-ora/browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Native macOS UI built with SwiftUI/AppKit",
      "Fast, responsive browsing powered by WebKit",
      "Privacy-first browsing with built-in content blocker",
      "Tab management with containers and pinning",
      "Quick Launcher for instant navigation",
      "Developer mode",
    ],
  };
}
