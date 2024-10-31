import { Body1, Title2 } from "@/components/ui/typography";
import classes from "./index.module.css";
export function GameDetailTexts({
  summary,
  platforms,
}: {
  summary: string;
  platforms: string;
}) {
  return (
    <div className={classes.game_detail_texts__root}>
      <div className={classes.game_detail_texts__wrapper}>
        <Title2>Summary</Title2>
        <Body1>
          Grand Theft Auto V is a vast open world game set in Los Santos, a
          sprawling sun-soaked metropolis struggling to stay afloat in an era of
          economic uncertainty and cheap reality TV. The game blends
          storytelling and gameplay in new ways as players repeatedly jump in
          and out of the lives of the game’s three lead characters, playing all
          sides of the game’s interwoven story.
        </Body1>
      </div>
      <div className={classes.game_detail_texts__wrapper}>
        <Title2>Platforms</Title2>
        <Body1>
          {
            "PC (Microsoft Windows), PlayStation 3, PlayStation 4, Xbox 360, Xbox One"
          }
        </Body1>
      </div>
    </div>
  );
}
