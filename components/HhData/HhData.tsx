import { HhDataProps } from "./HhData.props";
import styles from "./HhData.module.css";
import Rating from "@/public/rating.svg";
import { numberToPrice } from "@/helpers/numberToPrice";
import { Card } from "../Card/Card";

export const HhData = ({ juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
  const degree = [
    { title: "Начальный", salary: juniorSalary, rating: 1 },
    { title: "Средний", salary: middleSalary, rating: 2 },
    { title: "Профессионал", salary: seniorSalary, rating: 3 },
  ];

  return (
    <Card>
      <ul className={styles.salary}>
        {degree.map(({ title, salary, rating }, id) => (
          <li key={id} className={styles.salaryItem}>
            <p className={styles.title}>{title}</p>
            <span className={styles.salaryValue}>{numberToPrice(salary)}</span>
            <div className={styles.rate}>
              {[...Array(rating)].map((_, idx) => (
                <Rating key={idx} className={styles.filled} />
              ))}
              {[...Array(3 - rating)].map((_, idx) => (
                <Rating key={idx} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};
