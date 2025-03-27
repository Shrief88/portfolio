"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  id: string;
  children: React.ReactNode;
};

const AnimatedSectionWrapper = ({ id, children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-[1000px] flex flex-col justify-center py-24"
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSectionWrapper;
