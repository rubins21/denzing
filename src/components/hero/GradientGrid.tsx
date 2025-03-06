import React from "react";
import { motion } from "framer-motion";

export const GradientGrid = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
      }}
      className="absolute inset-0 z-0"
    >
      <div className="absolute inset-0 z-0 bg-grid-primary/10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/0 via-background/50 to-background" />
    </motion.div>
  );
};
