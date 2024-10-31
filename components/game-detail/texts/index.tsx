import { Body1, Title2 } from "@/components/ui/typography";
import classes from "./index.module.css";
export function GameDetailTexts({
  summary,
  platforms,
}: {
  summary: string;
  platforms: {
    id: number;
    name: string;
  }[];
}) {
  const platformsTexts = platforms.map((platform) => platform.name).join(", ");
  return (
    <div className={classes.game_detail_texts__root}>
      <div className={classes.game_detail_texts__wrapper}>
        <Title2>Summary</Title2>
        <Body1>{summary}</Body1>
      </div>
      <div className={classes.game_detail_texts__wrapper}>
        <Title2>Platforms</Title2>
        <Body1>{platformsTexts}</Body1>
      </div>
    </div>
  );
}
