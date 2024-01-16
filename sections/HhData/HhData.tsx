import { HhDataProps } from "./HhData.props";
import styles from "./HhData.module.css";
import { Card } from "@/components";
import Rating from "@/public/rating.svg";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
  const degree = [
    { title: "Начальный", salary: juniorSalary, rating: 1 },
    { title: "Средний", salary: middleSalary, rating: 2 },
    { title: "Профессионал", salary: seniorSalary, rating: 3 },
  ];

  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <p className={styles.title}>Всего вакансий</p>
        <span className={styles.countValue}>{count}</span>
      </Card>
      <Card>
        <ul className={styles.salary}>
          {degree.map(({ title, salary, rating }, id) => (
            <li key={id} className={styles.salaryItem}>
              <p className={styles.title}>{title}</p>
              <span className={styles.salaryValue}>{salary}</span>
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
        {/* <p className={styles.title}>Всего вакансий</p>
        <span className={styles.salaryValue}>{count}</span>
        <div className={styles.rate}>
          <Rating />
          <Rating />
          <Rating />
        </div> */}
      </Card>
    </div>
  );
};
