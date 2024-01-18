// import cn from "classnames";

import styles from "./Advantages.module.css";
import { AdvantagesProps } from "./Advantages.props";
import CheckIcon from "@/public/check.svg";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <ul className={styles.list}>
      {advantages.map((a) => (
        <li key={a._id} className={styles.advantage}>
          <CheckIcon />
          <h3 className={styles.title}>{a.title}</h3>
          <hr className={styles.vline}></hr>
          <p>{a.description}</p>
        </li>
      ))}
    </ul>
  );
};
