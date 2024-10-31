import Link from "next/link";
import { Card } from "../ui/card";
import Image from "next/image";
import classes from "./index.module.css";
import { ImageOff } from "lucide-react";
import { Body1 } from "../ui/typography";
interface Props {
  gameDetailUrl: string;
  imageUrl?: string;
  gameName: string;
}
export function GameCard({ gameDetailUrl, imageUrl, gameName }: Props) {
  return (
    <Card>
      <Link href={gameDetailUrl}>
        {imageUrl ? (
          <Image
            className={classes.game_card__image}
            src={imageUrl}
            alt="game"
            width={114}
            height={152}
          />
        ) : (
          <div>
            <Body1>{gameName}</Body1>
            <ImageOff
              className={classes.game_card__image}
              width={114}
              height={152}
            />
          </div>
        )}
      </Link>
    </Card>
  );
}
