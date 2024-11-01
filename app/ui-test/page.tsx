import { GameCard } from "@/components/game-card";
import { SortGames } from "@/components/home/collection/filter";
import { SearchGames } from "@/components/search-games";
import { PrimaryButton } from "@/components/ui/button";
import { EmptyCollectionLogo } from "@/components/ui/icons/empty-collection";
import { Logo } from "@/components/ui/logo";
import { Tag } from "@/components/ui/tag";
import {
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
} from "@/components/ui/typography";
import { Star } from "lucide-react";
import classes from "./index.module.css";
export default function UiPage() {
  return (
    <div className={classes.ui__root}>
      <SortGames />
      <Title1>Heading 1</Title1>
      <Title2>Heading 2</Title2>
      <Title3>Heading 3</Title3>
      <Title4>Heading 4</Title4>
      <Title5>Heading 5</Title5>
      <PrimaryButton> Collect Game</PrimaryButton>

      <Logo />
      <EmptyCollectionLogo />
      <SearchGames />
      <Tag icon={<Star />} title="Rating:" text="8.9" />
      <div style={{ display: "flex", gap: "10px" }}>
        <GameCard gameDetailUrl="/" imageUrl="" gameName="game name" />
        <GameCard gameDetailUrl="/" imageUrl="" gameName="game name" />
        <GameCard gameDetailUrl="/" imageUrl="" gameName="game name" />
      </div>
    </div>
  );
}
