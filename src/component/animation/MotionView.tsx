import React from "react";
import { motion } from "framer-motion";

const MotionView = ({ children, down, none }: any) => {
  return (
    <motion.div
      initial={{
        position: "relative",
        opacity: 0,
        top: none ? 0 : down ? -50 : 50
      }}
      transition={{
        duration: 0.7
      }}
      whileInView={{ opacity: 1, top: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MotionView;
