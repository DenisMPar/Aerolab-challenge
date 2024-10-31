import classes from "./index.module.css";
import { GameOverview } from "./overview";
import { GameDetailTags } from "./tags";
import { GameDetailTexts } from "./texts";
export async function GameDetailPageComponent({ slug }: { slug: string }) {
  //   const gameData = await getGameDetails(slug);
  return (
    <section className={classes.game_detail__root}>
      <GameOverview collected={false} />
      <GameDetailTags rating={5} releaseDate={1640995200} platform={"PS5"} />
      <GameDetailTexts summary={"summary"} platforms={"platforms"} />
    </section>
  );
}
