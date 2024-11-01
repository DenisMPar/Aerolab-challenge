import { ImageOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";
import classes from "./index.module.css";
interface Props {
  gameDetailUrl: string;
  imageUrl?: string;
  gameName: string;
  priority: boolean;
  index?: number;
}
export function GameCard({
  gameDetailUrl,
  imageUrl,
  gameName,
  priority,
  index,
}: Props) {
  const bigCoverUrl = imageUrl?.replace("t_thumb", "t_cover_big");
  return (
    <Card index={index}>
      <Link href={gameDetailUrl}>
        {bigCoverUrl ? (
          <Image
            className={classes.game_card__image}
            src={bigCoverUrl}
            alt="game"
            width={264}
            height={374}
            priority={priority}
          />
        ) : (
          <div className={classes.game_card__offImage_container}>
            <p className={classes.game_card__offImage_title}>{gameName}</p>
            <ImageOff className={classes.game_card__offImage} />
          </div>
        )}
      </Link>
    </Card>
  );
}
