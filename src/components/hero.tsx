import { Star } from "lucide-react";
import Link from "next/link";
import { PRESENTATION } from "../data/presentation";
import { ArrowRight } from "./animate-ui/icons/arrow-right";
import HeroBackground from "./hero-background";
import { Icons } from "./icons";
import { ShinyButton } from "./ui/shiny-button";
import { WaitlistForm } from "./waitlist-form";
import { getWaitlistCount } from "@/actions/waitlist";
import { getRepoStars } from "@/actions/github";
import { formatNumber } from "@/lib/utils";
import { Button } from "./ui/button";
import { GithubStarsButton } from "./github-stars-button";
import { DownloadAlphaButton } from "./download-alpha-button";
import Image from "next/image";
import { ContributorsList } from "./contributors-list";
import { AnimatedGroup } from "./ui/animated-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export async function Hero() {
  const waitlistCount = await getWaitlistCount();

  return (
    <div className="h-screen overflow-clip">
      <HeroBackground />
      <main className="absolute inset-0 z-10 flex flex-col items-center gap-8 px-4 sm:gap-12 md:gap-16">
        <div className="h-24" />
        <AnimatedGroup variants={transitionVariants}>
          <GithubStarsButton />
        </AnimatedGroup>
        <AnimatedGroup variants={transitionVariants} className="flex flex-col items-center gap-8">
          <h1 className="z-10 w-full max-w-[42rem] text-center font-medium text-4xl md:text-5xl">
            {PRESENTATION.hero.title}
          </h1>
          <p className="w-full max-w-xl text-center text-base text-muted-foreground leading-6 px-4">
            {PRESENTATION.hero.description}
          </p>
        </AnimatedGroup>
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
          className="flex flex-col gap-8 w-full max-w-md px-4"
        >
          <WaitlistForm />
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 self-center">
              <div className="size-2 animate-pulse rounded-full bg-green-400 shadow-2xl shadow-green-400" />
              <p className="text-muted-foreground text-sm">
                <span className="font-medium text-primary">
                  {formatNumber(waitlistCount)}{" "}
                </span>
                people have joined the waitlist for beta
              </p>
            </div>
          </div>
        </AnimatedGroup>
        {/* <ContributorsList /> */}
        <div className="hidden sm:block xl:w-7xl h-fit sm:h-[36rem] overflow-hidden p-2 border rounded-t-2xl blur-in-2xl bg-white/10 justify-center">
          <Image
            src="/browser-3.png"
            alt="Mockup"
            width={1536}
            height={973}
          // className="w-full h-full"
          />
        </div>
      </main>
    </div>
  );
}
