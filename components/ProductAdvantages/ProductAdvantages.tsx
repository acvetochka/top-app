import styles from "./ProductAdvantages.module.css";
import { ProductAdvantagesProps } from "./ProductAdvantages.props";

export const ProductAdvantages = ({ advantages, disadvantages }: ProductAdvantagesProps) => {
  return (
    <div className={styles.advBlock}>
      {advantages && (
        <div className={styles.advantages}>
          <h3 className={styles.advTitle}>Преимущества</h3>
          <div>{advantages}</div>
        </div>
      )}
      {disadvantages && (
        <div className={styles.disadvantages}>
          <h3 className={styles.advTitle}>Недостатки</h3>
          <div>{disadvantages}</div>
        </div>
      )}
    </div>
  );
};
