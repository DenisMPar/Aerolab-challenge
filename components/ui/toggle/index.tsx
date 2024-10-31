import { ReactNode } from "react";
import classes from "./index.module.css";
export function ToggleButton({
  onClick,
  active,
  children,
}: {
  onClick: () => void;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <button
      className={`${classes.toggle_button__root} ${active && classes.active}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
