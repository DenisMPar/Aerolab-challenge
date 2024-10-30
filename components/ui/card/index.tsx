import classes from "./index.module.css";
export function Card({ children }: { children: React.ReactNode }) {
  return <div className={classes.card}>{children}</div>;
}
