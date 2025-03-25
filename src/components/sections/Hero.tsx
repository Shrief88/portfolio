"use client";

import { motion } from "framer-motion";

import { hero } from "@/content/data.json";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Hero = () => {
  let delay = 0 
  if (typeof window !== "undefined") {
    delay = window.innerWidth < 768 ? 0.2 : 1;     
 }
 
  return (
    <MaxWidthWrapper className="min-h-screen">
      <section className="flex flex-col justify-center items-start gap-6 max-w-[1000px] w-full">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay, duration: 0.3 }}
          className="font-fira text-foreground"
        >
          Hi, my name is
        </motion.p>
        <div className="flex flex-col gap-1">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.3 }}
            className="text-primary-foreground text-4xl md:text-[80px] font-bold"
          >
            {hero.name}
          </motion.h1>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.4, duration: 0.3 }}
            className="text-secondary-foreground text-[60px] font-bold hidden md:block"
          >
            {hero.title}
          </motion.h1>
        </div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + 0.6, duration: 0.3 }}
          className="text-muted-foreground max-w-[600px]"
        >
          {hero.description}
        </motion.p>
      </section>
    </MaxWidthWrapper>
  );
};

export default Hero;
// className="flex flex-col justify-center items-start max-w-[1000px] gap-6"
