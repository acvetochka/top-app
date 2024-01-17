import { Tag, Title } from "@/components";
import { DescriptionProps } from "./Description.props";
import styles from "./Description.module.css";
import { HhData } from "../HhData/HhData";
// import { TopLevelCategory } from "@/interfaces/page.interface";

export const Description = ({ page, products }: DescriptionProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Title tag="h1">{page.title}</Title>
        {products && <Tag color="gray">{products.length}</Tag>}
        <span>Сортировка</span>
      </div>
      <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>

      {/* {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />} */}
      {page.hh && (
        <>
          <div className={styles.hhTitle}>
            <Title tag="h2">Вакансии - {page.category}</Title>
            <Tag color="red">hh.ua</Tag>
          </div>
          <HhData {...page.hh} />
        </>
      )}
    </div>
  );
};
