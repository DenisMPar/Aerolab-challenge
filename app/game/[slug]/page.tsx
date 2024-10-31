import { GameDetailPageComponent } from "@/components/game-detail";

export default async function GameDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  return <GameDetailPageComponent slug={slug} />;
}
