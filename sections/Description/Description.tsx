"use client";

import { Sort, Tag, Title } from "@/components";
import { DescriptionProps } from "./Description.props";
import styles from "./Description.module.css";
import { SortEnum } from "@/components/Sort/Sort.props";
import { useState } from "react";
// import { SortReducerState, sortReducer } from "@/helpers/sort.reducer";
import { Product } from "../Product/Product";
import { ProductModel } from "@/interfaces/product.interface";
// import { HhData } from "../HhData/HhData";
// import parse from "html-react-parser";
// import { TopLevelCategory } from "@/interfaces/page.interface";

export const Description = ({ page, products }: DescriptionProps): JSX.Element => {
  const [sort, setSort] = useState<SortEnum>(SortEnum.Price);
  const [sortedProducts, setSortedProducts] = useState<ProductModel[]>([]);

  const sortProducts = (sortType: SortEnum) => {
    let sortedArray: ProductModel[];

    if (sortType === SortEnum.Rating) {
      sortedArray = [...products].sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1));
    } else {
      sortedArray = [...products].sort((a, b) => (a.price > b.price ? 1 : -1));
    }

    setSortedProducts(sortedArray);
    setSort(sortType);
  };

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
      <div>{sortedProducts && sortedProducts.map((p) => <Product key={p._id} product={p} />)}</div>
    </>
  );
};
