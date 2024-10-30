import Link from "next/link";
import { Card } from "../ui/card";
import Image from "next/image";
import classes from "./index.module.css";
interface Props {
  gameDetailUrl: string;
  imageUrl?: string;
}
export function GameCard({ gameDetailUrl }: Props) {
  return (
    <Card>
      <Link href={gameDetailUrl}>
        <Image
          className={classes.game_card__image}
          src={"https://images.igdb.com/igdb/image/upload/t_thumb/co2smo.jpg"}
          alt="game image"
          width={114}
          height={152}
        />
      </Link>
    </Card>
  );
}
