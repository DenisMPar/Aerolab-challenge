import { Keycaps } from "../keycaps";
import { Title1 } from "../ui/typography";
import { GamesCollection } from "./collection";
import { SortGames } from "./collection/filter";
import classes from "./index.module.css";
export function HomePageComponent() {
  return (
    <main className={classes.home__root}>
      <div className={classes.home__title_filter_container}>
        <Title1>Saved Games</Title1>
        <SortGames />
      </div>
      <GamesCollection />
    </main>
  );
}
