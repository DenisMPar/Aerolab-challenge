"use client";

import { ToggleButton } from "@/components/ui/toggle";
import { useEffect, useRef, useState } from "react";
import classes from "./index.module.css";
import { useGameCollectionStore } from "@/lib/state";
export function SortGames() {
  const collection = useGameCollectionStore((state) => state.collection);
  const sortByLastAdded = useGameCollectionStore(
    (state) => state.sortByLastAdded
  );
  const sortByReleaseDate = useGameCollectionStore(
    (state) => state.sortByReleaseDate
  );
  const [isSticky, setIsSticky] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<"lastAdded" | "newest" | "oldest">(
    "lastAdded"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const rect = filterRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function handleFilterClick(selected: "lastAdded" | "newest" | "oldest") {
    const actions: Record<string, () => void> = {
      lastAdded: sortByLastAdded,
      newest: () => sortByReleaseDate("desc"),
      oldest: () => sortByReleaseDate("asc"),
    };
    actions[selected]();
    setSelected(selected);
  }

  return (
    <div
      ref={filterRef}
      className={`${classes.sort_games__root} ${isSticky && classes.sticky} ${
        collection.length === 0 && classes.empty
      }`}
    >
      <ToggleButton
        active={selected === "lastAdded"}
        onClick={() => handleFilterClick("lastAdded")}
      >
        Last added
      </ToggleButton>
      <ToggleButton
        active={selected === "newest"}
        onClick={() => handleFilterClick("newest")}
      >
        Newest
      </ToggleButton>
      <ToggleButton
        active={selected === "oldest"}
        onClick={() => handleFilterClick("oldest")}
      >
        Oldest
      </ToggleButton>
    </div>
  );
}
