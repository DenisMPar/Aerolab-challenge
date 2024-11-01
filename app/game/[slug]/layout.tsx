import { SearchGames } from "@/components/search-games";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import classes from "./layout.module.css";
import { Keycaps } from "@/components/keycaps";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Game Haven Z - Game",
  description: "Search and collect your favourite games",
};
export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Keycaps />
      <header className={classes.layout__header}>
        <Link href={"/home"} className={classes.layout__back_wrapper}>
          <ArrowLeft />
          <h2 className={classes.layout__title}>Back</h2>
        </Link>
        <SearchGames />
      </header>
      {children}
    </>
  );
}
