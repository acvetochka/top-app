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

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: "products", name: "Товары", icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const Menu = async () => {
  // const [firstCategory, setFirstCategory] = useState(0);

  const menu = await getMenu(0);
  console.log(menu);
  // const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => {
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  //   [styles.firstLevelActive]: menu.id === firstCategory,
                })}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
            {/* {menu.id === firstCategory && buildSecondLevel(menu)} */}
          </div>;
        })}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => {
      <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, { [styles.thirdLevelActive]: true })}>
        {p.category}
      </a>;
    });
  };

  const handleClick = () => {
    console.log(menu);
  };
  console.log(menu);
  return (
    // <div className={styles.menu}>{buildFirstLevel()}</div>
    <ul>
      {/* <div>{menu}</div> */}
      {menu.map((item) => (
        <li key={item._id.secondCategory} onClick={handleClick}>
          {item._id.secondCategory}
        </li>
      ))}
    </ul>
  );
};
