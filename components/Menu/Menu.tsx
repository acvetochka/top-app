"use client";

import { useState, useEffect } from "react";
import { getMenu } from "@/api/menu";
import { FirstLevelMenuItem, MenuItem, PageItem } from "@/interfaces/menu.interface";

import { TopLevelCategory } from "@/interfaces/page.interface";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { firstLevelMenu } from "@/helpers/firstLevelMenu";

export const Menu = () => {
  const [firstCategory, setFirstCategory] = useState<TopLevelCategory>(0);

  // const firstCategory: TopLevelCategory = 0;
  // const router = useRouter();
  const path = usePathname();
  // console.log(path);
  // console.log(API);
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    setMenu(menu);
    // setFirstCategory(firstCategory);
  }, [menu]);

  // useEffect(() => {
  //   // const fetchData =
  //   (async () => {
  //     firstLevelMenu.map(async ({ route, id }) => {
  //       if (route === path.split("/")[1]) {
  //         const menuData = await getMenu(id);
  //         console.log(menuData);
  //         setMenu(menuData);
  //       }
  //     });
  //   })();
  //   // console.log(menu);
  //   // fetchData();
  // }, [path]);

  // useEffect(() => {
  //   // const fetchData =
  //   (async () => {
  //     firstLevelMenu.map(async ({ id }) => {
  //       const menuData = await getMenu(id);
  //       console.log(menuData);
  //       setMenu(menuData);
  //     });
  //   })();
  //   // console.log(menu);
  //   // fetchData();
  // }, []);

  // console.log(firstLevelMenu);
  // const firstCategoryItem = firstLevelMenu.find((m) => m.route === path.split("/")[0]);
  // if (!firstCategoryItem) {
  //   return {
  //     notFound: true,
  //   };
  // }

  // console.log(firstCategoryItem.id);

  // const menu = await getMenu(0);
  // console.log("menu", menu);
  // console.log("firstLevel", firstLevelMenu);
  // const { menu, setMenu, firstCategory } = useContext(AppContext);

  const openSecondLevel = (secondCategory: string) => {
    // console.log(firstCategory);
    menu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }
          // else {
          //   m.isOpened = false;
          //   // if (m.isOpened) {
          //   //   m.isOpened = !m.isOpened;
          //   // }
          // }
          // console.log(m);
          return m;
        })
      );
    // console.log(menu);
  };

  const openFirstLevel = (category: number) => {
    // setMenu(
    firstLevelMenu.map(
      async (m) => {
        // setFirstCategory(
        // console.log(m);
        if (m.id === category) {
          m.isOpened = !m.isOpened;
          const menuData = await getMenu(category);
          console.log(menuData);
          setMenu(menuData);
          setFirstCategory(category);
          // console.log("firstLevelMenuItem", m);
          // console.log("cATEGORY", category);
        }
        // else {
        //   m.isOpened = false;
        //   // if (m.isOpened) {
        //   //   m.isOpened = !m.isOpened;
        //   // }
        // }
        return m;
      }
      // firstLevelMenu.map(async ({ id }) => {
      //   const menuData = await getMenu(id);
      //   console.log(menuData);
      //   setMenu(menuData);
      // })
    );
    // );
    // console.log(firstLevelMenu);
    // );
  };

  const buildFirstLevel = () => {
    // console.log(firstCategory);
    return (
      <ul className={styles.menu}>
        {firstLevelMenu.map((m) => {
          // console.log(m);
          // console.log(path);
          // console.log(path.split("/")[1]);
          if (m.route.includes(path.split("/")[1])) {
            console.log(true);
            m.isOpened = true;
          }
          return (
            <li key={m.route}>
              {/* <Link href={`/${m.route}`}> */}
              <div onClick={() => openFirstLevel(m.id)}>
                {/* <div> */}
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id === firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </div>
              {/* {m.id === firstCategory && buildSecondLevel(m)} */}
              {m.id === firstCategory && buildSecondLevel(m)}
            </li>
          );
        })}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    // console.log(menuItem);
    // console.log(menu);
    return (
      <ul className={styles.secondBlock}>
        {menu &&
          menu.map((m) => {
            // console.log(path.split("/")[2]);
            // console.log(m);
            if (m.pages.map((p) => p.alias).includes(path.split("/")[2])) {
              m.isOpened = true;
            }
            return (
              <li key={m._id.secondCategory}>
                <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
                  {m._id.secondCategory}
                </div>
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
  return <nav>{buildFirstLevel()}</nav>;
};
