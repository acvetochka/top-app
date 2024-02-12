import cn from "classnames";

import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import SortIcon from "@/public/Sort.svg";

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div className={styles.sortName} id="rating">
        Сортировка по рейтингу 
      </div>
      <button
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating,
        })}
        aria-selected={sort === SortEnum.Rating}
        aria-labelledby="rating"
      >
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </button>
      <div className={styles.sortName} id="price">
        Сортировка по цене 
      </div>
      <button
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort === SortEnum.Price,
        })}
        aria-selected={sort === SortEnum.Price}
        aria-labelledby="price"
      >
        <SortIcon className={styles.sortIcon} />
        По цене
      </button>
    </div>
  );
};
