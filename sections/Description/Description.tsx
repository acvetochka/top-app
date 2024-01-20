"use client";

import { Sort, Tag, Title } from "@/components";
import { DescriptionProps } from "./Description.props";
import styles from "./Description.module.css";
import { SortEnum } from "@/components/Sort/Sort.props";
import { useEffect, useReducer, useRef } from "react";
import { SortReducerState, sortReducer } from "@/helpers/sort.reducer";
// import { HhData } from "../HhData/HhData";
// import parse from "html-react-parser";
// import { TopLevelCategory } from "@/interfaces/page.interface";

export const Description = ({ page, products }: DescriptionProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Price });
  const productsRef = useRef(products);

  useEffect(() => {
    productsRef.current = products;
    dispatchSort({ type: sort });
  }, [sort]);

  useEffect(() => {
    // Оновлюємо products у редюсері, коли вони змінилися
    dispatchSort({ type: sort });
  }, [products]);

  useEffect(() => {
    dispatchSort((prevState: SortReducerState) => ({ ...prevState, products: productsRef.current }));
  }, [products]);

  // useEffect(() => {
  //   if (products.length > 0) {
  //     sortReducer((sortedProducts) => products);
  //   }
  // });
  // useEffect(() => {
  //   dispatchSort({ type: sort });
  // }, [sort, products]);

  // const setSort = (sort: SortEnum) => {
  //   dispatchSort({ type: sort });
  // };
  const setSort = (newSort: SortEnum) => {
    dispatchSort({ type: newSort });
  };

  return (
    <>
      <div className={styles.title}>
        <Title tag="h1">{page.title}</Title>
        {products && <Tag color="gray">{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort} />
      </div>
      {/* <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div> */}
      <div>{sortedProducts && sortedProducts.map((p) => <div key={p._id}>{p.title}</div>)}</div>
    </>
  );
};
