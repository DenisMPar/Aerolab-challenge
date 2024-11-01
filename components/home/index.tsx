import { Title1 } from "../ui/typography";
import { GamesCollection } from "./collection";
import classes from "./index.module.css";
export function HomePageComponent() {
  return (
    <main className={classes.home__root}>
      <div className={classes.home__title_filter_container}>
        <Title1>Saved Games</Title1>
      </div>
      <GamesCollection />
    </main>
  );
}
