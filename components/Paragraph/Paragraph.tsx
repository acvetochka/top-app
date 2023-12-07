import cn from "classnames";

import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";

export const Paragraph = ({ size ='normal', children, className, ...props }: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.text, className, {
        [styles.small]: size === "small",
        [styles.large]: size === "large",
      })}
          {...props}
    >
      {children}
    </p>
  );
};
