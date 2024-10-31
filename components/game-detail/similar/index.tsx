import { GameCard } from "@/components/game-card";
import classes from "./index.module.css";
interface Props {
  similarGames: {
    id: number;
    slug: string;
    name: string;
    cover?: {
      id: number;
      url: string;
    };
  }[];
}
export function SimilarGames({ similarGames }: Props) {
  return (
    <div className={classes.game_detail_similar__root}>
      <h2 className={classes.game_detail_similar__title}>Similar Games</h2>
      <div className={classes.game_detail_similar__cards_container}>
        {similarGames.map((game, index) => {
          if (index > 5) return null;
          return (
            <GameCard
              key={game.id}
              gameDetailUrl={`/game/${game.slug}`}
              imageUrl={game.cover ? `https:${game.cover.url}` : undefined}
              gameName={game.name}
            />
          );
        })}
      </div>
    </div>
  );
}
