"use client";

import { getProduct } from "@/api/product";
import { TopPageModel } from "@/interfaces/page.interface";
import { ProductModel } from "@/interfaces/product.interface";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { Description } from "../Description/Description";
import { HhData } from "../HhData/HhData";
import parse from "html-react-parser";

import styles from "./TopPage.module.css";
import { Advantages, Tag, Title } from "@/components";
import { Skills } from "../Skills/Skills";

export const TopPage = ({ page }: { page: TopPageModel }) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [firstCategory, setFirstCategory] = useState(0);

  if (!page || !products) {
    notFound();
  }

  useEffect(() => {
    // if (page) {
    (async () => {
      const prodArray = await getProduct(page.category);
      //   console.log("category", prodArray);
      if (prodArray) {
        setProducts(prodArray);
        // console.log("category", prodArray);
      }
    })();
    setFirstCategory(page.firstCategory);
    // }
  }, [page]);
  return (
    <div className={styles.wrapper}>
      <Description firstCategory={firstCategory} products={products} page={page} />
      {page.hh && (
        <>
          <div className={styles.hhTitle}>
            <Title tag="h2">Вакансии - {page.category}</Title>
            <Tag color="red">hh.ua</Tag>
          </div>
          <HhData {...page.hh} />
        </>
      )}
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
