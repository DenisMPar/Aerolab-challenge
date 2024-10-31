import { GameCard } from "@/components/game-card";
import { SortGames } from "./filter";
import classes from "./index.module.css";

export function GamesCollection() {
  return (
    <div className={classes.games_collection__root}>
      <SortGames />
      <div className={classes.games_collection__cards_container}>
        <GameCard gameDetailUrl="/game/gta" imageUrl="" />
        <GameCard gameDetailUrl="/game/gta" imageUrl="" />
        <GameCard gameDetailUrl="/game/gta" imageUrl="" />
      </div>
    </div>
  );
}
