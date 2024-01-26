"use client";

import cn from "classnames";
import Image from "next/image";

import { ProductProps } from "./Product.props";
import { Button, Card, Divider, ProductAdvantages, ProductFeatures, ProductPrice, Rating, Review, ReviewForm, Tag } from "@/components";
import { devOfNum } from "@/helpers/devOfNum";
import styles from "./Product.module.css";
import { useState } from "react";

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

  return (
    <>
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
        <Divider className={cn(styles.hr, styles.hr2)} />
        <div className={styles.actions}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button appearance="ghost" arrow={isReviewOpened ? "down" : "right"} className={styles.reviewButton} onClick={() => setIsReviewOpened(!isReviewOpened)}>
            Читать отзывы
          </Button>
        </div>
      </Card>
      <Card
        color="blue"
        className={cn(styles.reviews, {
          [styles.opened]: isReviewOpened,
          [styles.closed]: !isReviewOpened,
        })}
      >
        {product.reviews.map((r) => (
          <>
            <Review key={r._id} review={r} />
            <Divider />
          </>
        ))}
        <ReviewForm productId={product._id} />
      </Card>
    </>
  );
};
