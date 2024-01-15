import { Tag, Title } from "@/components";
import { DescriptionProps } from "./Description.props";

export const Description = ({ page, products, firstCategory }: DescriptionProps): JSX.Element => {
  return (
    <div className="">
      <Title tag="h1">{page.title}</Title>
      {products && <Tag color="gray">{products.length}</Tag>}
      <span>Сортировка</span>
    </div>
  );
};
