"use client";

import { getProduct } from "@/api/product";
import { TopPageModel } from "@/interfaces/page.interface";
import { ProductModel } from "@/interfaces/product.interface";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { Description } from "../Description/Description";

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
    <>
      <Description firstCategory={firstCategory} products={products} page={page} />
    </>
  );
};
