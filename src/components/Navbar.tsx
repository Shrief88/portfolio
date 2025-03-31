"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import useScroll from "@/hooks/useScroll";
import MobileNav from "./MobileNav";


const links = ["About", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const { show, shouldHasShadow } = useScroll();

  return (
    <nav
      className={cn(
        "px-2 md:px-8 fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md transition-transform ",
        show ? "translate-y-0" : "-translate-y-full",
        shouldHasShadow
          ? "drop-shadow-lg shadow-gray-900/50 bg-background/70 z-50"
          : ""
      )}
    >
      <div className="md:hidden flex justify-end items-center py-3">
        <MobileNav items={links} />
      </div>
      <div className="h-[var(--nav-height)] hidden md:flex items-center justify-end gap-8">
        {links.map((link, index) => (
          <Link key={link} href={`#${link.toLowerCase()}`}>
            <motion.p
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 + index * 0.1 }}
              className="underline-animation text-xs font-fira text-foreground"
            >
              {`0${index + 1}.` + " " + link}
            </motion.p>
          </Link>
        ))}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 + links.length * 0.1 , ease: "easeInOut"}}
        >
          <Button
            variant={"outline"}
            className="cursor-pointer text-xs font-fira text-foreground"
            asChild
          >
            <a href="/Sherif_Essam_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
