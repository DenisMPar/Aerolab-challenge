import { GameDetailPageComponent } from "@/components/game-detail";
import { getGameDetails } from "@/lib/api";

export default async function GameDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const gameData = await getGameDetails(params.slug);

  return <GameDetailPageComponent gameData={gameData} />;
}
