import { Title1, Title3 } from "@/components/ui/typography";
import Image from "next/image";
import classes from "./index.module.css";
import { PrimaryButton } from "@/components/ui/button";
export function GameOverview({ collected }: { collected: boolean }) {
  return (
    <div className={classes.game_overview__root}>
      <div className={classes.game_overview__header}>
        <Image
          src={"https://images.igdb.com/igdb/image/upload/t_thumb/co2smo.jpg"}
          width={82}
          height={110}
          alt="game image"
          className={classes.game_overview__image}
          priority
        />
        <div className={classes.game_overview__text_container}>
          <Title1>Grand Theft Auto V</Title1>
          <Title3>Rockstar Games</Title3>
        </div>
      </div>
      <PrimaryButton disabled={collected}>
        {collected ? "Game collected" : "Collect Game"}
      </PrimaryButton>
    </div>
  );
}
