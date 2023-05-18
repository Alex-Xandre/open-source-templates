import { motion } from "framer-motion";
import React from "react";

const TitleDescription = ({ title }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.25 }}
      className="text-xl md:-mt-10 -mt-10 lg:mt-10 dark:text-white"
    >
      {title}
    </motion.h1>
  );
};

export default TitleDescription;
