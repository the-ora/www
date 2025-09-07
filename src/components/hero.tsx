import { Star } from "lucide-react";
import Link from "next/link";
import { PRESENTATION } from "../data/presentation";
import { ArrowRight } from "./animate-ui/icons/arrow-right";
import HeroBackground from "./hero-background";
import { Icons } from "./icons";
import { ShinyButton } from "./ui/shiny-button";
import { WaitlistForm } from "./waitlist-form";

export function Hero() {
  return (
    <div className="h-screen overflow-clip">
      <HeroBackground />
      <main className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-18">
        <GithubStarButton />
        <div className="flex flex-col items-center gap-8">
          <h1 className="z-10 w-[42rem] text-center font-medium text-7xl">
            {PRESENTATION.hero.title}
          </h1>
          <p className="w-xl text-center text-lg text-muted-foreground leading-6">
            {PRESENTATION.hero.description}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <WaitlistForm/>
          <div className="flex items-center gap-2">
            <div className="size-2 animate-pulse rounded-full bg-green-400 shadow-2xl shadow-green-400" />
            <p className="text-muted-foreground text-sm">
              <span className="font-medium text-primary">1,872 </span>people
              have joined the waitlist
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function GithubStarButton() {
  return (
    <Link href={PRESENTATION.urls.github} target="_blank">
      <ShinyButton className="flex rounded-none transition-transform hover:bg-foreground/2">
        <Icons.github className="size-4 fill-white" />
        <span className="font-medium">Github</span>
        <Star className="size-3 fill-white" />
        <span className="font-medium">200</span>
        <ArrowRight className="size-4" animation="out" animateOnHover />
      </ShinyButton>
    </Link>
  );
}
