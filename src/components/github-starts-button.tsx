import { getRepoStars } from "@/actions/github";
import { PRESENTATION } from "@/data/presentation";
import Link from "next/link";
import { ShinyButton } from "./ui/shiny-button";
import { Icons } from "./icons";
import { Star } from "lucide-react";
import { ArrowRight } from "./animate-ui/icons/arrow-right";
import { formatNumber } from "@/lib/utils";

export async function GithubStarButton() {
  const stars = await getRepoStars("the-ora", "browser");
  return (
    <Link href={PRESENTATION.urls.github} target="_blank">
      <ShinyButton className="flex rounded-none text-sm sm:text-base">
        <Icons.github className="size-3 sm:size-4 fill-white" />
        <span className="font-medium">Github</span>
        <Star className="size-2.5 sm:size-3 fill-white" />
        <span className="font-medium">{formatNumber(stars)}</span>
        <ArrowRight
          className="size-3 sm:size-4"
          animation="out"
          animateOnHover
        />
      </ShinyButton>
    </Link>
  );
}