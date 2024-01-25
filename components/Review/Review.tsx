import { Card } from "../Card/Card";
import styles from "./Review.module.css";
import cn from "classnames";
import { ReviewProps } from "./Review.props";
import UserIcon from "@/public/reviewUser.svg";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { Rating } from "../Rating/Rating";

export const Review = ({ review, className, ...props }: ReviewProps) => {
  const { name, title, description, createdAt, rating } = review;
  return (
    // <Card
    //   color="blue"
    //   className={cn(styles.reviews, {
    //     [styles.opened]: isReviewOpened,
    //     [styles.closed]: !isReviewOpened,
    //   })}
    //   //   {...props}
    // >
    <div className={styles.review} {...props}>
      <UserIcon />
      <div>
        <span className={styles.name}>{name}: </span>
        <span>{title}</span>
      </div>
      <div className={styles.date}>{format(new Date(createdAt), "dd MMMM yyyy", { locale: uk })}</div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
    // </Card>
  );
};