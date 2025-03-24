"use client";

import { motion } from "framer-motion";
import SocialMedia from "@/components/SocialMedia";

const SideLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.3 }}
      className="fixed w-10 left-10 bottom-0 hidden md:block"
    >
      <SocialMedia mode="vertical" />
    </motion.div>
  );
};

export default SideLinks;
