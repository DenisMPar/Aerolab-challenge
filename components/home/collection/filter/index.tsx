"use client";

import { ToggleButton } from "@/components/ui/toggle";
import { useEffect, useRef, useState } from "react";
import classes from "./index.module.css";
export function SortGames() {
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

  return (
    <div
      ref={filterRef}
      className={`${classes.sort_games__root} ${isSticky && classes.sticky}`}
    >
      <ToggleButton
        active={selected === "lastAdded"}
        onClick={() => setSelected("lastAdded")}
      >
        Last added
      </ToggleButton>
      <ToggleButton
        active={selected === "newest"}
        onClick={() => setSelected("newest")}
      >
        Newest
      </ToggleButton>
      <ToggleButton
        active={selected === "oldest"}
        onClick={() => setSelected("oldest")}
      >
        Oldest
      </ToggleButton>
    </div>
  );
}
