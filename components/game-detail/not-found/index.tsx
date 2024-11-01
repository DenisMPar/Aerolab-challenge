import { CircleOff } from "lucide-react";
import classes from "./index.module.css";
import { Title2 } from "@/components/ui/typography";
export function GameDetailNotFound() {
  return (
    <div className={classes.game_detail__not_found_root}>
      <Title2>Game not found</Title2>
      <CircleOff className={classes.game_detail__not_found_icon} />
    </div>
  );
}
