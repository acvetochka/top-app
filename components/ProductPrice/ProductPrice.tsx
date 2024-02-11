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
        <span>
          <span className="visualyHidden">Цена</span>
          {numberToPrice(price)}
        </span>
        {oldPrice && (
          <Tag className={styles.oldPrice} color="green">
            <span className="visualyHidden">скидка</span>
            {numberToPrice(price - oldPrice)}
          </Tag>
        )}
      </div>
      <div className={styles.credit}>
        <span className="visualyHidden">Кредит</span>
        {numberToPrice(credit)}/<span className={styles.month}>мес</span>
      </div>
    </>
  );
};
