"use client";
import { GameCard } from "@/components/game-card";
import { useGameCollectionStore } from "@/lib/state";
import { EmptyCollectionComponent } from "./empty";
import classes from "./index.module.css";

export function GamesCollection() {
  const collection = useGameCollectionStore((state) => state.collection);
  const collectionHasGames = collection.length > 0;

  return (
    <>
      {collectionHasGames ? (
        <div className={classes.games_collection__root}>
          <div className={classes.games_collection__cards_container}>
            {collection.map((game) => (
              <GameCard
                key={game.id}
                gameDetailUrl={`/game/${game.slug}`}
                imageUrl={game.cover ? `https:${game.cover.url}` : undefined}
                gameName={game.name}
              />
            ))}
          </div>
        </div>
      ) : (
        <EmptyCollectionComponent />
      )}
    </>
  );
}
