import { ButtonHTMLAttributes } from "react";
import classes from "./index.module.css";
export function PrimaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={classes.button}>
      {props.children}
    </button>
  );
}
export function SecondaryButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={classes.button + " " + classes.button__secondary}
    >
      {props.children}
    </button>
  );
}
