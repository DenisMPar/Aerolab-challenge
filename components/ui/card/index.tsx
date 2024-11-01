"use client";
import classes from "./index.module.css";

import { motion } from "framer-motion";
export function Card({
  children,
  index,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={classes.card}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
    >
      {children}
    </motion.div>
  );
}
