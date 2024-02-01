"use client";

import { useEffect, useReducer } from "react";

import { Sort, Tag, Title } from "@/components";
import { DescriptionProps } from "./Description.props";
import { SortEnum } from "@/components/Sort/Sort.props";
import { Product } from "../Product/Product";
import { sortReducer } from "@/helpers/sort.reducer";
import styles from "./Description.module.css";

export const Description = ({ page, products }: DescriptionProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

  const sortProducts = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  return (
    <>
      <div className={styles.title}>
        <Title tag="h1">{page.title}</Title>
        {products && <Tag color="gray">{products.length}</Tag>}
        <Sort sort={sort} setSort={sortProducts} />
      </div>
      <div>{products && sortedProducts.map((p) => <Product layout key={p._id} product={p} />)}</div>
    </>
  );
};
