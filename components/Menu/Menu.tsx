"use client";

import { useState, useEffect } from "react";
import { getMenu } from "@/api/menu";
import { FirstLevelMenuItem, MenuItem, PageItem } from "@/interfaces/menu.interface";
import CoursesIcon from "@/public/courses.svg";
import ServicesIcon from "@/public/services.svg";
import BooksIcon from "@/public/books.svg";
import ProductsIcon from "@/public/products.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { API } from "@/app/api";

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: "products", name: "Товары", icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const Menu = () => {
  //   const [firstCategory, setFirstCategory] = useState<TopLevelCategory>(0);

  const firstCategory: TopLevelCategory = 0;
  // const router = useRouter();
  const path = usePathname();
  // console.log(path)
  // console.log(API);
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const menuData = await getMenu(0);
      setMenu(menuData);
    };

    fetchData();
  }, [menu]);

  // const menu = await getMenu(0);
  // console.log("menu", menu);
  // console.log("firstLevel", firstLevelMenu);
  // const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <li key={m.route}>
            {/* <li> */}
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
          </li>
          //   </ul>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {menu.map((m) => {
          if (m.pages.map((p) => p.alias).includes(path.split("/")[2])) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <div className={styles.secondLevel}>{m._id.secondCategory}</div>
              <ul
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {/* <div>{menuItem.route}</div> */}
                {buildThirdLevel(m.pages, menuItem.route)}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <li key={p.alias}>
        <Link
          href={`/${route}/${p.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` === path,
          })}
        >
          {p.category}
        </Link>
      </li>
    ));
  };

  //   console.log(menu);
  return (
    <nav>
      <ul className={styles.menu}>{buildFirstLevel()}</ul>
    </nav>
  );
};
