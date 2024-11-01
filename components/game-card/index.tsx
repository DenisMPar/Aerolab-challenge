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
  const bigCoverUrl = imageUrl?.replace("t_thumb", "t_cover_big");
  return (
    <Card>
      <Link href={gameDetailUrl}>
        {bigCoverUrl ? (
          <Image
            className={classes.game_card__image}
            src={bigCoverUrl}
            alt="game"
            width={264}
            height={374}
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
