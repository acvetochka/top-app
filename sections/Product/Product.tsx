'use client';

import cn from 'classnames';
import Image from 'next/image';

import { ProductProps } from './Product.props';
import {
  Button,
  Card,
  Divider,
  ProductAdvantages,
  ProductFeatures,
  ProductPrice,
  Rating,
  Review,
  ReviewForm,
  Tag,
} from '@/components';
import { devOfNum } from '@/helpers/devOfNum';
import styles from './Product.module.css';
import { ForwardedRef, forwardRef, useEffect, useRef, useState, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';

export const Product = motion(
  forwardRef(
    (
      { product, className, ...props }: ProductProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

      const variants = {
        visible: { opacity: 1, height: 'auto' },
        hidden: { opacity: 0, height: '0' },
      };
      const reviewRef = useRef<HTMLDivElement>(null);

      const scrollToReview = () => {
        setIsReviewOpened(true);
        setTimeout(() => {
          reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 300);
        reviewRef.current?.focus();
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === 'Space' || e.code === 'Enter') {
          e.preventDefault();
          scrollToReview();
        }
      };

      useEffect(() => {
        setIsReviewOpened(isReviewOpened);
      }, [isReviewOpened]);

      return (
        <div className={className} {...props} ref={ref}>
          <Card className={styles.product}>
            <div className={styles.logo}>
              <Image
                src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                alt={product.title}
                width={70}
                height={70}
              />
            </div>
            <div className={styles.title}>{product.title}</div>
            <ProductPrice
              price={product.price}
              oldPrice={product.oldPrice}
              credit={product.credit}
            />
            <div className={styles.rating}>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map(c => (
                <Tag className={styles.category} key={c} color="ghost">
                  {c}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>
              <a href="#ref" onClick={scrollToReview} onKeyDown={handleKeyDown}>
                {product.reviewCount}
                {devOfNum(product.reviewCount, [' отзыв', ' отзыва', ' отзывов'])}
              </a>
            </div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <ProductFeatures characteristics={product.characteristics} />
            <ProductAdvantages
              advantages={product.advantages}
              disadvantages={product.disadvantages}
            />
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.actions}>
              <Button appearance="primary">Узнать подробнее</Button>
              <Button
                appearance="ghost"
                arrow={isReviewOpened ? 'down' : 'right'}
                className={styles.reviewButton}
                onClick={() => setIsReviewOpened(!isReviewOpened)}
              >
                Читать отзывы
              </Button>
            </div>
          </Card>
          <motion.div
            animate={isReviewOpened ? 'visible' : 'hidden'}
            variants={variants}
            initial="hidden"
            className={cn(styles.reviewWrapper, {
              [styles.opened]: isReviewOpened,
              [styles.closed]: !isReviewOpened,
            })}
          >
            <Card color="blue" className={cn(styles.reviews)} ref={reviewRef}>
              {product.reviews.map(r => (
                <div key={r._id}>
                  <Review review={r} />
                  <Divider />
                </div>
              ))}
              <ReviewForm productId={product._id} isOpened={isReviewOpened} />
            </Card>
          </motion.div>
        </div>
      );
    }
  )
);
