import React from "react";
import { motion } from "framer-motion";

const MotionViewHorizontal = ({ children, right }: any) => {
  return (
    <motion.div
      initial={{ position: "relative", opacity: 0, left: right ? -50 : 50 }}
      transition={{
        duration: 0.7
      }}
      whileInView={{ opacity: 1, left: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MotionViewHorizontal;
