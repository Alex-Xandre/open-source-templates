import React from "react";
import { motion } from "framer-motion";
const Title = ({ title, cN }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.25 }}
      className={`text-[80px] absolute -top-16 lg:-top-20 leading-tight gradient-text px-4 lg:px-0 w-full font-semibold ${cN}`}
    >
      {title}
    </motion.h1>
  );
};

export default Title;
