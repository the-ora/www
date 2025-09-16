import { getRepoStars, getLatestReleaseDmgUrl } from "@/actions/github";
import Link from "next/link";
import { ShinyButton } from "./ui/shiny-button";
import { Icons } from "./icons";
import { Button } from "./ui/button";

export async function DownloadAlphaButton() {
  const stars = await getRepoStars("the-ora", "browser");
  const dmgUrl = await getLatestReleaseDmgUrl("the-ora", "browser");
  return (
    <Link href={dmgUrl} target="_blank">
      <Button className="flex rounded-none text-sm sm:text-base">
        <Icons.apple className="size-3 sm:size-4" />
        <span className="font-medium text-sm">Download Alpha</span>
      </Button>
    </Link>
  );
}
