"use client";
import { CarouselComponent } from "@/components/ui/carousel";
import Image from "next/image";
import classes from "./index.module.css";
import { Title2 } from "@/components/ui/typography";
interface Props {
  screenshots: {
    id: number;
    url: string;
  }[];
}
export function GameDetailMedia({ screenshots }: Props) {
  return (
    <div className={classes.game_detail_media__root}>
      <Title2>Media</Title2>
      <CarouselComponent>
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.id}
            className={classes.game_detail_media__container}
          >
            <Image
              className={classes.game_detail_media__image}
              width={83}
              height={83}
              src={`https:${screenshot.url}`}
              alt="game screenshot"
            />
          </div>
        ))}
      </CarouselComponent>
    </div>
  );
}
