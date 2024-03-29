"use client";

import { getProduct } from "@/api/product";
import { TopPageModel } from "@/interfaces/page.interface";
import { ProductModel } from "@/interfaces/product.interface";
// import { notFound } from "next/navigation";
import { useEffect,  useState } from "react";
import { Description } from "../Description/Description";
import { HhSection } from "../HhSection/HhSection";
import parse from "html-react-parser";

import styles from "./TopPage.module.css";
import { Advantages, ScrollUp, Title } from "@/components";
import { Skills } from "../Skills/Skills";
// import { useScrollY } from "@/hooks/useScrollY";
// import { sortReducer } from "@/helpers/sort.reducer";

export const TopPage = ({ page }: { page: TopPageModel }) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [firstCategory, setFirstCategory] = useState(0);
  // const [{ products: sortedProducts }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

  // const y = useScrollY();
  // if (!page || !products) {
  //   notFound();
  // }

  useEffect(() => {
    (async () => {
      const prodArray = await getProduct(page.category);
      if (prodArray) {
        setProducts(prodArray);
      }
    })();
    setFirstCategory(page.firstCategory);
  }, [page]);

  return (
    <div className={styles.wrapper}>
      <ScrollUp />
      <Description firstCategory={firstCategory} products={products} page={page} />
      <HhSection page={page} />
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Title tag="h2">Преимущества</Title>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {page.seoText && <div className={styles.seo}>{parse(`${page.seoText}`)}</div>}
      <Skills tags={page.tags} />
    </div>
  );
};
