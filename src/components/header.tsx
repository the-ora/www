import { SOCIALITEMS } from "@/data/presentation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";

interface NavigationItem {
  name: string;
  href: string;
}

const _navigationItems: NavigationItem[] = [
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
      <nav className="fixed z-20 mt-4 w-full">
        <div
          className={cn(
            "mx-auto flex w-3xl items-center justify-between gap-6 rounded-none border bg-background/10 px-4 py-4 backdrop-blur-md",
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
              <p className="font-semibold text-xl">Ora</p>
            </Link>
          </div>

          {/*<ul className="flex items-center gap-4 text-sm">
            {_navigationItems.map((item, index) => (
              <li key={index}>
                <Button
                  variant="link"
                  className="block text-foreground/60 duration-150 hover:text-accent-foreground p-0"
                  disabled
                >
                  <Link href={item.href}>
                    <span>{item.name}</span>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>*/}

          <div className="flex items-center gap-12">
            <div className={cn("flex items-center gap-6")}>
              {SOCIALITEMS.map((item) => (
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
