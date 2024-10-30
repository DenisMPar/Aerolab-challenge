import { Body1 } from "@/components/ui/typography";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import classes from "./index.module.css";
import Link from "next/link";
export function SearchGamesOption({
  gameName,
  coverUrl,
  slug,
}: {
  gameName: string;
  coverUrl: string;
  slug: string;
}) {
  return (
    <Link
      href={`/game/${slug}`}
      className={classes.option__container}
      onClick={(e) => e.stopPropagation()}
    >
      {coverUrl ? (
        <Image
          className={classes.option__image}
          src={coverUrl}
          alt={gameName}
          width={30}
          height={30}
        />
      ) : (
        <ImageOff width={30} height={30} />
      )}
      <Body1 className={classes.text}>{gameName}</Body1>
    </Link>
  );
}
