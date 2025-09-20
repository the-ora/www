import { getRepoContributors } from "@/actions/github";
import Image from "next/image";
import Link from "next/link";

interface Contributor {
  name: string;
  avatarUrl: string;
  contributions: number;
  profileUrl: string;
}

export async function ContributorsList() {
  const contributors = await getRepoContributors("the-ora", "browser");

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {contributors.map((contributor: Contributor) => (
        <Link
          key={contributor.name}
          href={contributor.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <Image
            src={contributor.avatarUrl}
            alt={contributor.name}
            width={48}
            height={48}
            className="rounded-full border-2 border-white/10"
          />
        </Link>
      ))}
    </div>
  );
}