import { Title1 } from "../ui/typography";
import { GamesCollection } from "./collection";
import classes from "./index.module.css";
export function HomePageComponent() {
  return (
    <main className={classes.home__root}>
      <Title1>Saved Games</Title1>
      <GamesCollection />
    </main>
  );
}
