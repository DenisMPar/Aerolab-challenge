import { Skeleton } from "@mui/material";
import classes from "./index.module.css";
export function GameDetailLoading() {
  return (
    <div className={classes.game_detail_loading__root}>
      <div className={classes.game_detail_loading__header_container}>
        <Skeleton variant="rectangular" width={82} height={110} />
        <Skeleton variant="rectangular" width={"100%"} height={50} />
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={40}
          sx={{ gridColumnStart: 1, gridColumnEnd: 3 }}
        />
      </div>
      <div className={classes.game_detail_loading__tags_container}>
        <Skeleton
          variant="rectangular"
          width={110}
          height={40}
          sx={{ borderRadius: 30 }}
        />
        <Skeleton
          variant="rectangular"
          width={110}
          height={40}
          sx={{ borderRadius: 30 }}
        />
        <Skeleton
          variant="rectangular"
          width={110}
          height={40}
          sx={{ borderRadius: 30 }}
        />
      </div>
      <div className={classes.game_detail_loading__text_container}>
        <Skeleton variant="rectangular" width={"100%"} height={40} />
        <Skeleton variant="rectangular" width={"100%"} height={100} />
      </div>
    </div>
  );
}
