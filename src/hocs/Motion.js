import React from "react";
import { motion } from "framer-motion";

const Motion = ({ Component, styles }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles}
    >
      {Component}
    </motion.div>
  );
};

export default Motion;
