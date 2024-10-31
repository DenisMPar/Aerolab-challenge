import classes from "./index.module.css";
export function Tag({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className={classes.tag__root}>
      <div className={classes.tag__icon_container}>{icon}</div>
      <h4 className={classes.tag__title}>{title}</h4>
      <p className={classes.tag__text}>{text}</p>
    </div>
  );
}
