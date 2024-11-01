"use client";
import classes from "./index.module.css";
import { KeyCapsCanvas } from "./canvas";

export function Keycaps() {
  return (
    <>
      <div className={`${classes.keycaps__container} `}>
        <KeyCapsCanvas />
      </div>
    </>
  );
}
