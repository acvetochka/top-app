// import { ProductModel } from "@/interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProductPriceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: number;
  credit: number;
  oldPrice: number;
}
