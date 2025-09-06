import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Logo } from "./logo";

export const URLS = {
  GITHUB: "https://github.com/the-ora/browser",
  TWITTER: "https://x.com/orabrowser",
  DISCORD: "https://discord.gg/TBM7z4ps",
  SITE: "https://orabrowser.com",
} as const;

interface SocialItem {
  id: number;
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface NavigationItem {
  name: string;
  href: string;
}

const socialItems: SocialItem[] = [
  {
    id: 1,
    label: "GitHub",
    href: URLS.GITHUB,
    icon: Icons.github,
  },
  {
    id: 2,
    label: "Twitter",
    href: URLS.TWITTER,
    icon: Icons.x,
  },
  {
    id: 3,
    label: "Discord",
    href: URLS.DISCORD,
    icon: Icons.discord,
  },
];

const navigationItems: NavigationItem[] = [
  { name: "Why", href: "#why" },
  { name: "Changelogs", href: "#changelogs" },
  { name: "Contributors", href: "#contributors" },
];

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header>
      <nav className="fixed z-20 w-full mt-4 items-center flex justify-center">
        <div
          className={cn(
            "bg-background/10 backdrop-blur-md border rounded-none w-3xl flex items-center justify-between gap-6 px-4 py-4",
            className,
          )}
        >
          <div className="flex justify-between">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2 opacity-80 duration-150 hover:opacity-100"
            >
              <Logo className="size-6" />
              <p className="text-xl font-semibold">Ora</p>
            </Link>
          </div>

          {/*<ul className="flex items-center gap-4 text-sm">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block text-foreground/60 duration-150 hover:text-accent-foreground"
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>*/}

          <div className="flex items-center gap-12">
            <div className={cn("flex items-center gap-6")}>
              {socialItems.map((item) => (
                <a
                  className="size-4 rounded-full duration-150 hover:opacity-80"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.label}
                >
                  <item.icon className="fill-primary" />
                  <span className="sr-only">{item.label}</span>
                </a>
              ))}
            </div>
            {/*<Button className="rounded-none">Download</Button>*/}
          </div>
        </div>
      </nav>
    </header>
  );
}
