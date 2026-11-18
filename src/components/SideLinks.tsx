"use client";

import { motion } from "framer-motion";
import SocialMedia from "@/components/SocialMedia";
import type { SiteLinks } from "@/lib/sanity/types";

type Props = {
  links: SiteLinks;
};

const SideLinks = ({ links }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.3 }}
      className="fixed w-10 left-10 bottom-0 hidden md:block"
    >
      <SocialMedia mode="vertical" links={links} />
    </motion.div>
  );
};

export default SideLinks;
