import cn from "classnames";

import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import { Button, Card, Rating, Tag } from "@/components";
import { numberToPrice } from "@/helpers/numberToPrice";

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {numberToPrice(product.price)}
        {product.oldPrice && (
          <Tag className={styles.oldPrice} color="green">
            {numberToPrice(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={styles.credit}>
        {numberToPrice(product.credit)}/<span className={styles.month}>мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c) => (
          <Tag key={c} color="ghost">
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>фичи</div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          <h3>Преимущества</h3>
          <div>{product.advantages}</div>
        </div>
        <div className={styles.disadvantages}>
          <h3>Недостатки</h3>
          <div>{product.disadvantages}</div>
        </div>
      </div>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow={"right"}>
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
