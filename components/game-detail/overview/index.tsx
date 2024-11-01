"use client";
import { Title1, Title3 } from "@/components/ui/typography";
import Image from "next/image";
import classes from "./index.module.css";
import { PrimaryButton } from "@/components/ui/button";
import { GameDetail } from "@/lib/api";
import { useGameCollectionStore } from "@/lib/state";
import { ImageOff } from "lucide-react";
import { Skeleton } from "@mui/material";

export function GameOverview({ gameData }: { gameData: GameDetail }) {
  const collection = useGameCollectionStore((state) => state.collection);
  const hydrated = useGameCollectionStore((state) => state.hydrated);
  const addGame = useGameCollectionStore((state) => state.addGame);
  const isCollected = collection.some((game) => game.id === gameData.id);
  const bigCoverUrl = gameData.cover?.url?.replace("t_thumb", "t_cover_big");

  function handleAddGame() {
    const gameDataToStore = {
      id: gameData.id,
      cover: gameData.cover,
      name: gameData.name,
      slug: gameData.slug,
      releaseDate: gameData.first_release_date,
      savedAt: Date.now(),
    };
    addGame(gameDataToStore);
  }
  return (
    <div className={classes.game_overview__root}>
      <div className={classes.game_overview__header}>
        {gameData.cover ? (
          <Image
            src={`https:${bigCoverUrl}`}
            width={82}
            height={110}
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
        </div>
      </div>
      {hydrated ? (
        <PrimaryButton disabled={isCollected} onClick={handleAddGame}>
          {isCollected ? "Game collected" : "Collect Game"}
        </PrimaryButton>
      ) : (
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={40}
          sx={{ borderRadius: "30px" }}
        />
      )}
    </div>
  );
}
