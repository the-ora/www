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
