"use client";

import cn from "classnames";

import UpIcon from "@/public/up.svg";
import styles from "./ScrollUp.module.css";
import { useScrollY } from "@/hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const ScrollUp = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button className={styles.up} onClick={scrollToTop} animate={controls} initial={{ opacity: 0 }}>
      <UpIcon />
    </motion.button>
  );
};
