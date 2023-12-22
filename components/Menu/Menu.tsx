"use client";

import { useState } from "react";
import { getMenu } from "@/api/menu";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import CoursesIcon from "@/public/courses.svg";
import ServicesIcon from "@/public/services.svg";
import BooksIcon from "@/public/books.svg";
import ProductsIcon from "@/public/products.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: "products", name: "Товары", icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const Menu = async () => {
  const [firstCategory, setFirstCategory] = useState<TopLevelCategory>(0);

  const menu = await getMenu(0);
  console.log("menu", menu);
  console.log("firstLevel", firstLevelMenu);
  // const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {/* <div>{menuItem.route}</div> */}
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, { [styles.thirdLevelActive]: true })}>
        {p.category}
      </Link>
    ));
  };

  //   console.log(menu);
  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
