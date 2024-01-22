"use client";

import { Sort, Tag, Title } from "@/components";
import { DescriptionProps } from "./Description.props";
import styles from "./Description.module.css";
import { SortEnum } from "@/components/Sort/Sort.props";
import { useEffect, useReducer, useRef, useState } from "react";
import { SortReducerState, sortReducer } from "@/helpers/sort.reducer";
import { Product } from "../Product/Product";
import { ProductModel } from "@/interfaces/product.interface";
// import { HhData } from "../HhData/HhData";
// import parse from "html-react-parser";
// import { TopLevelCategory } from "@/interfaces/page.interface";

export const Description = ({ page, products }: DescriptionProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products: products, sort: SortEnum.Price });
  // const productsRef = useRef(products);
  // const [isClient, setIsClient] = useState(false);
  // const [sort, setSort] = useState<SortEnum>(SortEnum.Rating);

  // const sortedByRating = products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1));
  // const [sortedProducts, setSortedProducts] = useState<ProductModel[]>(sortedByRating);
  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // useEffect(() => {
  //   productsRef.current = products;
  //   setTimeout(() => {
  //     dispatchSort({ type: sort });
  //   }, 1000);
  // }, [sort, products]);

  // useEffect(() => {
  //   // Оновлюємо products у редюсері, коли вони змінилися
  //   dispatchSort({ type: sort });
  // }, [products]);

  // useEffect(() => {
  //   dispatchSort((prevState: SortReducerState) => ({ ...prevState, products: productsRef.current, sort: SortEnum.Price }));
  // }, []);

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
  // const setSort = (sort: SortEnum) => {
  //   setSortedProducts(sort);
  //   // dispatchSort({ type: newSort });
  // };

  if (!products) {
    // Додайте відповідну обробку, наприклад, відображення лоадера чи іншого індікатора завантаження
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.title}>
        <Title tag="h1">{page.title}</Title>
        {products && <Tag color="gray">{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort} />
      </div>
      {/* <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div> */}
      <div>{products && products.map((p) => <Product key={p._id} product={p} />)}</div>
    </>
  );
};
