import { ProductCharacteristic } from "@/interfaces/product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProductFeaturesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  characteristics: ProductCharacteristic[];
}
