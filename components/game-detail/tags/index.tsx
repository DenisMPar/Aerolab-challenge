import { Tag } from "@/components/ui/tag";
import { timeStamptUnixToDate } from "@/lib/utils";
import { Calendar, Puzzle, Star } from "lucide-react";
import classes from "./index.module.css";
export function GameDetailTags({
  rating,
  releaseDate,
  genre,
}: {
  rating?: number;
  releaseDate: number;
  genre: string;
}) {
  const formattedRating = rating ? rating.toFixed(1).toString() : "-";
  const formattedDate = timeStamptUnixToDate(releaseDate);

  return (
    <div className={classes.tags__root}>
      <Tag icon={<Star />} title="Rating:" text={formattedRating} />
      <Tag icon={<Calendar />} title="Release Date:" text={formattedDate} />
      <Tag icon={<Puzzle />} title="Genre:" text={genre} />
    </div>
  );
}
