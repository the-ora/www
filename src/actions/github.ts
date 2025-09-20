"use server";

export async function getRepoStars(owner: string, repo: string) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "ora-app", // github requires a user-agent
    },
    next: { revalidate: 60 }, // cache for 1 minute
  });

  if (!res.ok) {
    throw new Error(`failed to fetch repo: ${res.status}`);
  }

  const data = await res.json();
  return data.stargazers_count as number;
}

export async function getRepoContributors(owner: string, repo: string) {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contributors`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "ora-app",
      },
      next: { revalidate: 300 }, // cache for 5 minutes
    },
  );

  if (!res.ok) {
    throw new Error(`failed to fetch contributors: ${res.status}`);
  }

  const data = await res.json();

  return data.map((contributor: any) => ({
    name: contributor.login,
    avatarUrl: contributor.avatar_url,
    contributions: contributor.contributions,
    profileUrl: contributor.html_url,
  }));
}

export async function getLatestReleaseDmgUrl(owner: string, repo: string) {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases/latest`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "ora-app", // github requires a user-agent
      },
      next: { revalidate: 300 }, // cache for 5 minutes
    },
  );

  if (!res.ok) {
    throw new Error(`failed to fetch latest release: ${res.status}`);
  }

  const data = await res.json();

  // Find the .dmg file in the assets
  const dmgAsset = data.assets?.find((asset: any) =>
    asset.name.toLowerCase().endsWith(".dmg"),
  );

  if (!dmgAsset) {
    throw new Error("No .dmg file found in latest release");
  }

  return dmgAsset.browser_download_url as string;
}
