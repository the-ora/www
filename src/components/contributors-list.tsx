import { getRepoContributors } from "@/actions/github";
import AvatarGroup from "./ui/avatar-group";

export async function ContributorsList() {
  const contributors = await getRepoContributors("the-ora", "browser");

  // Transform contributors to match AvatarGroup format
  const avatarItems = contributors.map((contributor, index) => ({
    id: index + 1,
    name: contributor.name,
    designation: `${contributor.contributions} contributions`,
    image: contributor.avatarUrl,
  }));

  return (
    <AvatarGroup
      items={avatarItems}
      maxVisible={5}
      size="md"
    />
  );
}