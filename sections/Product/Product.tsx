// import cn from "classnames";
import Image from "next/image";

import { ProductProps } from "./Product.props";
import { Button, Card, Divider, ProductAdvantages, ProductFeatures, ProductPrice, Rating, Tag } from "@/components";
import { devOfNum } from "@/helpers/devOfNum";
import styles from "./Product.module.css";

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width={70} height={70} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <ProductPrice price={product.price} oldPrice={product.oldPrice} credit={product.credit} />
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c) => (
          <Tag className={styles.category} key={c} color="ghost">
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>
        {product.reviewCount} {devOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
      </div>
      <Divider className={styles.hr} />
      <div className={styles.description}>{product.description}</div>
      <ProductFeatures characteristics={product.characteristics} />
      <ProductAdvantages advantages={product.advantages} disadvantages={product.disadvantages} />
      <Divider className={styles.hr} />
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow={"right"} className={styles.reviewButton}>
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
