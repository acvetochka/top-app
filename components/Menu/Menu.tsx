"use client";

import { useState, useEffect, KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

import { getMenu } from "@/api/menu";
import { FirstLevelMenuItem, MenuItem, PageItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { firstLevelMenu } from "@/helpers/firstLevelMenu";
import styles from "./Menu.module.css";

export const Menu = () => {
  const [firstCategory, setFirstCategory] = useState<TopLevelCategory>();
  const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
  const shouldReduceMotion = useReducedMotion();
  const variants = {
    visible: {
      transition: shouldReduceMotion ? {} : {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
      marginBottom: 20,
    },
    hidden: {
      marginBottom: 0,
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      height: 0,
    },
  };

  const path = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    setMenu(menu);
  }, [menu]);

  useEffect(() => {
    (async () => {
      firstLevelMenu.map(async ({ route, id }) => {
        if (route === path.split("/")[1]) {
          const menuData = await getMenu(id);
          setMenu(menuData);
        }
      });
    })();
  }, [path]);

  const openSecondLevel = (secondCategory: string) => {
    menu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            setAnnounce(m.isOpened ? 'closed' : "opened")
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === "Space" || key.code === "Enter") {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const openFirstLevel = (category: number) => {
    firstLevelMenu.map(
      async (m) => {
        if (m.id === category) {
          m.isOpened = !m.isOpened;
          const menuData = await getMenu(category);
          console.log(menuData);
          setMenu(menuData);
          setFirstCategory(category);
        }
        return m;
      }
    );
  };

  const buildFirstLevel = () => {
    return (
      <ul className={styles.menu}>
        {firstLevelMenu.map((m) => {
          if (m.route.includes(path.split("/")[1])) {
            m.isOpened = true;
          }
          return (
            <li key={m.route} aria-expanded={m.id == firstCategory}>
              <div onClick={() => openFirstLevel(m.id)}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id === firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </div>
              {m.id === firstCategory && buildSecondLevel(m)}
            </li>
          );
        })}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {menu &&
          menu.map((m) => {
            if (m.pages.map((p) => p.alias).includes(path.split("/")[2])) {
              m.isOpened = true;
            }
            return (
              <li key={m._id.secondCategory}>
                <button
                  tabIndex={0}
                  onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                  className={styles.secondLevel}
                  onClick={() => openSecondLevel(m._id.secondCategory)}
                  aria-expanded={m.isOpened}
                >
                  {m._id.secondCategory}
                </button>
                <motion.ul
                  layout
                  variants={variants}
                  initial={m.isOpened ? "visible" : "hidden"}
                  animate={m.isOpened ? "visible" : "hidden"}
                  className={cn(
                    styles.secondLevelBlock
                  )}
                >
                  {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                </motion.ul>
              </li>
            );
          })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return pages.map((p) => (
      <motion.li key={p.alias} variants={variantsChildren}>
        <Link
          tabIndex={isOpened ? 0 : -1}
          href={`/${route}/${p.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` === path,
          })}
          aria-current={`/${route}/${p.alias}` === path ? "page" : false}
        >
          {p.category}
        </Link>
      </motion.li>
    ));
  };
  
  return <nav role="navigation" className={styles.nav}>
    {announce && <span className="visualyHidden">{announce === "opened" ? "развернуто" : "свернуто"} </span>}
    {buildFirstLevel()}</nav>;
};
