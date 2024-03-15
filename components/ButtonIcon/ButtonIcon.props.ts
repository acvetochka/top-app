import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from "@/public/up.svg";
import menu from "@/public/menu.svg";
import close from "@/public/menuClose.svg";

export const icons = {
  up,
  menu,
  close,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: IconName;
  appearance: "primary" | "white";
}
