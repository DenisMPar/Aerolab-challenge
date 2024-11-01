import { Title2 } from "@/components/ui/typography";
import classes from "./index.module.css";
import { ServerCrash } from "lucide-react";
export function GameDetailError() {
  return (
    <div className={classes.game_detail__error_root}>
      <Title2>Something went wrong, please try again later</Title2>
      <ServerCrash className={classes.game_detail__error_icon} />
    </div>
  );
}
