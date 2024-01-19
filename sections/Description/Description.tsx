import { Tag, Title } from "@/components";
import { DescriptionProps } from "./Description.props";
import styles from "./Description.module.css";
// import { HhData } from "../HhData/HhData";
// import parse from "html-react-parser";
// import { TopLevelCategory } from "@/interfaces/page.interface";

export const Description = ({ page, products }: DescriptionProps): JSX.Element => {
  return (
    <>
      <div className={styles.title}>
        <Title tag="h1">{page.title}</Title>
        {products && <Tag color="gray">{products.length}</Tag>}
        <span>Сортировка</span>
      </div>
      <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>
      </>

  );
};
