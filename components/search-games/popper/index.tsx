import { Popper } from "@mui/material";
import { PopperProps } from "@mui/material/Popper/BasePopper.types";
export function SearchGamesPopper(props: PopperProps) {
  return (
    <Popper
      sx={{
        borderRadius: "0 0 20px 20px",
        "& .MuiPaper-root": {
          borderRadius: "0 0 20px 20px",
          border: "1px solid var(--pink-50)",
          borderTop: "none",
        },
      }}
      {...props}
    />
  );
}
