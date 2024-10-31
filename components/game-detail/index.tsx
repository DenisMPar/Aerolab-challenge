import { getGameDetails } from "@/lib/api";
import classes from "./index.module.css";
import { GameDetailMedia } from "./media";
import { GameOverview } from "./overview";
import { SimilarGames } from "./similar";
import { GameDetailTags } from "./tags";
import { GameDetailTexts } from "./texts";
export async function GameDetailPageComponent({ slug }: { slug: string }) {
  const gameData = await getGameDetails(slug);

  return (
    <section className={classes.game_detail__root}>
      {gameData && (
        <>
          <GameOverview gameData={gameData} />
          <GameDetailTags
            rating={gameData.rating}
            releaseDate={gameData.first_release_date}
            genre={gameData.genres[0]?.name || "-"}
          />
          <GameDetailTexts
            summary={gameData.summary}
            platforms={gameData.platforms}
          />
          <GameDetailMedia screenshots={gameData.screenshots} />
          <SimilarGames similarGames={gameData.similar_games} />
        </>
      )}
      {!gameData && (
        <div className={classes.game_detail__error}>{"Game not found :("}</div>
      )}
    </section>
  );
}
