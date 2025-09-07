import { Icons } from "@/components/icons";

interface SocialItem {
  id: number;
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const PRESENTATION = {
  hero: {
    title: "Less noise, more browsing.",
    description:
      "Built on webkit, designed for macOS. Ora delivers a clean, native experience that’s simple, powerful, and free of bloat.",
  },
  urls: {
    github: "https://github.com/the-ora/browser",
    x: "https://x.com/orabrowser",
    discord: "https://discord.gg/TBM7z4ps",
    buymecoffee: "https://buymeacoffee.com/orabrowser",
    website: "https://orabrowser.com",
  },
  footer: {
    description:
      "Ora is a browser that is built on webkit, designed for macOS. It delivers a clean, native experience that’s simple, powerful, and free of bloat.",
  },
} as const;

export const SOCIALITEMS: SocialItem[] = [
  {
    id: 1,
    label: "GitHub",
    href: PRESENTATION.urls.github,
    icon: Icons.github,
  },
  {
    id: 2,
    label: "X (Twitter)",
    href: PRESENTATION.urls.x,
    icon: Icons.x,
  },
  {
    id: 3,
    label: "Discord",
    href: PRESENTATION.urls.discord,
    icon: Icons.discord,
  }
];