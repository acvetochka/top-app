// import { ProductProps } from "@/sections/Product/Product.props";
import styles from "./ProductPrice.module.css";
import { numberToPrice } from "@/helpers/numberToPrice";
import { Tag } from "../Tag/Tag";
import { ProductPriceProps } from "./ProductPrice.props";

export const ProductPrice = ({ price, oldPrice, credit }: ProductPriceProps) => {
  // const { price, oldPrice, credit } = product;
  return (
    <>
      <div className={styles.price}>
        {numberToPrice(price)}
        {oldPrice && (
          <Tag className={styles.oldPrice} color="green">
            {numberToPrice(price - oldPrice)}
          </Tag>
        )}
      </div>
      <div className={styles.credit}>
        {numberToPrice(credit)}/<span className={styles.month}>мес</span>
      </div>
    </>
  );
};
