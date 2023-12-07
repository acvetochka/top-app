import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: "small" | "large";
  color?: "ghost" | "red" | "grey" | "green" | "accent";
  href?: string;
}
