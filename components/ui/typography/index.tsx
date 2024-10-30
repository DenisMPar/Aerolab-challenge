import { HTMLAttributes } from "react";
import classes from "./index.module.css";
export const Title1 = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h1 {...props} className={`${classes.h1} ${classes.titles} ${className}`}>
    {props.children}
  </h1>
);

export const Title2 = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h2 {...props} className={`${classes.h2} ${classes.titles} ${className}`}>
    {props.children}
  </h2>
);

export const Title3 = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 {...props} className={`${classes.h3} ${classes.titles} ${className}`}>
    {props.children}
  </h3>
);

export const Title4 = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h4 {...props} className={`${classes.h4} ${classes.titles} ${className}`}>
    {props.children}
  </h4>
);

export const Title5 = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h5 {...props} className={`${classes.h5} ${classes.titles} ${className}`}>
    {props.children}
  </h5>
);
export const Body1 = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p {...props} className={`${classes.body1} ${className}`}>
      {props.children}
    </p>
  );
};
