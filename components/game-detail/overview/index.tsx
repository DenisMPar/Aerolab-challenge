import { Title1, Title3 } from "@/components/ui/typography";
import { GameDetail } from "@/lib/api";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import { CollectButton } from "./collect-button";
import classes from "./index.module.css";

export function GameOverview({ gameData }: { gameData: GameDetail }) {
  const bigCoverUrl = gameData.cover?.url?.replace("t_thumb", "t_cover_big");

  return (
    <div className={classes.game_overview__root}>
      <div className={classes.game_overview__header}>
        {gameData.cover ? (
          <Image
            src={`https:${bigCoverUrl}`}
            width={264}
            height={374}
            alt="game cover"
            className={classes.game_overview__image}
            priority
          />
        ) : (
          <ImageOff
            width={82}
            height={110}
            className={classes.game_overview__image}
          />
        )}
        <div className={classes.game_overview__text_container}>
          <Title1>{gameData.name}</Title1>
          <Title3>
            {gameData.involved_companies
              ? gameData.involved_companies[0]?.company.name
              : "-"}
          </Title3>
          <div className={classes.collect_button__container_desktop}>
            <CollectButton gameData={gameData} />
          </div>
        </div>
      </div>
      <div className={classes.collect_button__container_mobile}>
        <CollectButton gameData={gameData} />
      </div>
    </div>
  );
}
