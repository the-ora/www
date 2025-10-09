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
      "Ora is an open-source macOS browser built with Swift and WebKit. Fast, secure, and native Arc alternative that puts users first with smooth tab management, spaces, vertical sidebar, and many more.",
  },
  urls: {
    github: "https://github.com/the-ora/browser",
    x: "https://x.com/orabrowser",
    discord: "https://discord.gg/9aZWH52Zjm",
    buymecoffee: "https://buymeacoffee.com/orabrowser",
    website: "https://orabrowser.com",
  },
  footer: {
    description:
      "Ora is an open-source macOS browser built with Swift and WebKit. Fast, secure, native and free of bloat Arc alternative that puts users first.",
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
  },
];
