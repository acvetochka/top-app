import cn from "classnames";

import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";

export const Tag = ({ size = "small", children, color = "ghost", href, className, ...props }: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === "small",
        [styles.large]: size === "large",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.gray]: color === "gray",
        [styles.green]: color === "green",
        [styles.accent]: color === "accent",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
