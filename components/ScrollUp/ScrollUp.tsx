"use client";

import cn from "classnames";

import UpIcon from "@/public/up.svg";
import styles from "./ScrollUp.module.css";
import { useScrollY } from "@/hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

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
    <motion.div className={styles.up} animate={controls} initial={{ opacity: 0 }}>
      <ButtonIcon appearance="primary" icon="up" onClick={scrollToTop} />
    </motion.div>
  );
};
