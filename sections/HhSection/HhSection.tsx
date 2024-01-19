// import { HhDataProps, HhSectionProps } from "./HhSection.props";
import styles from "./HhSection.module.css";
import { Card, HhData, Tag, Title } from "@/components";
// import Rating from "@/public/rating.svg";
// import { numberToPrice } from "@/helpers/numberToPrice";
import { TopPageModel } from "@/interfaces/page.interface";

export const HhSection = ({ page }: { page: TopPageModel }): JSX.Element => {
  // const degree = [
  //   { title: "Начальный", salary: juniorSalary, rating: 1 },
  //   { title: "Средний", salary: middleSalary, rating: 2 },
  //   { title: "Профессионал", salary: seniorSalary, rating: 3 },
  // ];

  return (
    <>
      {page.hh && (
        <>
          <div className={styles.hhTitle}>
            <Title tag="h2">Вакансии - {page.category}</Title>
            <Tag color="red">hh.ua</Tag>
          </div>
          <div className={styles.hh}>
            <Card className={styles.count}>
              <p className={styles.title}>Всего вакансий</p>
              <span className={styles.countValue}>{page.hh.count}</span>
            </Card>
            <HhData {...page.hh} />
          </div>
        </>
      )}
    </>
  );
};
