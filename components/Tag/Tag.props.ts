import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: "small" | "large";
  color?: "ghost" | "red" | "gray" | "green" | "accent";
  href?: string;
}
