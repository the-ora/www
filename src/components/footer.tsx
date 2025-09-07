import { PRESENTATION, SOCIALITEMS } from "@/data/presentation";
import { Logo } from "./logo";
import { BuyMeACoffeeBadge } from "./buymecoffe-badge";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="h-12 border-t">
      <div className="mx-auto max-w-3xl space-y-12 py-8">
        <div className="flex justify-between">
          <div className="flex h-full w-80 flex-col justify-center gap-8">
            <Logo className="size-8" />
            <p className="text-neutral-600 text-sm">
              {PRESENTATION.footer.description}
            </p>

            <div className="flex items-center gap-6">
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
          </div>
          <div className="py-2 px-3 bg-primary h-fit border hover:bg-primary/96">
            <BuyMeACoffeeBadge className="size-24" />
          </div>
        </div>
        <div className="border-t">
          <p className="py-4 text-neutral-600 text-sm">
            Copyright © 2025 Ora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
