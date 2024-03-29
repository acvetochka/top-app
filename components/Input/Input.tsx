import { ForwardedRef, forwardRef } from "react";
import cn from "classnames";

import { InputProps } from "./Input.props";
import styles from "./Input.module.css";

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={cn(styles.input, className, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});
