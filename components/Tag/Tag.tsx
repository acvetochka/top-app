import cn from "classnames";

import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";

export const Tag = ({ size = "small", children, color = "ghost", href, className, ...props }: TagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.tag, className, {
        [styles.small]: size === "small",
        [styles.large]: size === "large",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
        [styles.accent]: color === "accent",
      })}
      {...props}
    >
      {href ? <a>{children}</a> : <>{children}</>}
    </p>
  );
};
