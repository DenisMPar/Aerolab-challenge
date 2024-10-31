"use client";
import { Title1, Title3 } from "@/components/ui/typography";
import Image from "next/image";
import classes from "./index.module.css";
import { PrimaryButton } from "@/components/ui/button";
import { GameDetail } from "@/lib/api";
import { useGameCollectionStore } from "@/lib/state";
import { ImageOff } from "lucide-react";

export function GameOverview({ gameData }: { gameData: GameDetail }) {
  const collection = useGameCollectionStore((state) => state.collection);
  const addGame = useGameCollectionStore((state) => state.addGame);
  const isCollected = collection.some((game) => game.id === gameData.id);
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
            src={`https:${gameData.cover.url}`}
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
          <Title3>{gameData.involved_companies[0]?.company.name}</Title3>
        </div>
      </div>
      <PrimaryButton disabled={isCollected} onClick={handleAddGame}>
        {isCollected ? "Game collected" : "Collect Game"}
      </PrimaryButton>
    </div>
  );
}
