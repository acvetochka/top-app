"use client";

import { useEffect, useReducer, useState } from "react";
import { Sort, Tag, Title } from "@/components";
import { DescriptionProps } from "./Description.props";
import styles from "./Description.module.css";
import { SortEnum } from "@/components/Sort/Sort.props";
import { Product } from "../Product/Product";
// import { ProductModel } from "@/interfaces/product.interface";
import { sortReducer } from "@/helpers/sort.reducer";

export const Description = ({ page, products }: DescriptionProps): JSX.Element => {
  // const sortedByRating = [...products].sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1));

  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

  const sortProducts = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  // const [sort, setSort] = useState<SortEnum>(SortEnum.Rating);
  // const [sortedProducts, setSortedProducts] = useState<ProductModel[]>(sortedByRating);

  // const sortProducts = (sortType: SortEnum) => {
  //   let sortedArray: ProductModel[];

  //   if (sortType === SortEnum.Rating) {
  //     sortedArray = [...products].sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1));
  //   } else {
  //     sortedArray = [...products].sort((a, b) => (a.price > b.price ? 1 : -1));
  //   }

  //   setSortedProducts(sortedArray);
  //   setSort(sortType);
  // };

  // useEffect(() => {
  //   // switch (sort) {
  //   //   case SortEnum.Rating:
  //   //     sortProducts(SortEnum.Rating);
  //   //     break;
  //   //   case SortEnum.Price:
  //   //     sortProducts(SortEnum.Price);
  //   //     break;
  //   //   default:
  //   //     sortProducts(SortEnum.Rating);
  //   // }
  //   sortProducts(sort);
  //   // setSortedProducts(sortedByRating);
  // }, [sort]);

  // sortProducts(SortEnum.Rating);

  // const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products: products, sort: SortEnum.Price });
  // const setSort = (sort: SortEnum) => {
  //   dispatchSort({ type: sort });
  // };  // const setSort = (sort: SortEnum) => {
  //   dispatchSort({ type: sort });
  // };

  return (
    <>
      <div className={styles.title}>
        <Title tag="h1">{page.title}</Title>
        {products && <Tag color="gray">{products.length}</Tag>}
        <Sort sort={sort} setSort={sortProducts} />
      </div>
      {/* <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div> */}
      <div>{products && sortedProducts.map((p) => <Product layout key={p._id} product={p} />)}</div>
    </>
  );
};
