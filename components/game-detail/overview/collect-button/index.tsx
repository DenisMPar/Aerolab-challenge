"use client";
import { PrimaryButton } from "@/components/ui/button";
import { GameDetail } from "@/lib/api";
import { useGameCollectionStore } from "@/lib/state";
import { Skeleton } from "@mui/material";

export function CollectButton({ gameData }: { gameData: GameDetail }) {
  const collection = useGameCollectionStore((state) => state.collection);
  const hydrated = useGameCollectionStore((state) => state.hydrated);
  const isCollected = collection.some((game) => game.id === gameData.id);
  const addGame = useGameCollectionStore((state) => state.addGame);
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
    <>
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
    </>
  );
}
