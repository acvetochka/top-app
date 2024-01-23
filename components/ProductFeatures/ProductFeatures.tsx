import styles from "./ProductFeatures.module.css";
import { ProductFeaturesProps } from "./ProductFeatures.props";

export const ProductFeatures = ({ characteristics }: ProductFeaturesProps) => {
  return (
    <>
      <div className={styles.feature}>
        {characteristics.map((c) => (
          <div className={styles.charact} key={c.name}>
            <span className={styles.charactName}>{c.name}</span>
            <span className={styles.charactDots}></span>
            <span className={styles.charactValue}>{c.value}</span>
          </div>
        ))}
      </div>
    </>
  );
};
