"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

import useScroll from "@/hooks/useScroll";
import MobileNav from "./MobileNav";

const links = ["About", "Experience", "Work", "Contact"];

const Navbar = () => {
  const { show, shouldHasShadow } = useScroll();

  return (
    <nav
      className={cn(
        "px-2 md:px-8 fixed top-0 left-0 w-full bg-background transition-transform",
        show ? "translate-y-0" : "-translate-y-full",
        shouldHasShadow
          ? "drop-shadow-lg shadow-gray-900/50 backdrop-blur-md"
          : ""
      )}
    >
      <div className="md:hidden flex justify-end items-center py-3">
        <MobileNav items={links} />
      </div>
      <div className="h-[var(--nav-height)] hidden md:flex items-center justify-end gap-8">
        {links.map((link, index) => (
          <Link key={link} href={`#${link.toLowerCase()}`}>
            <p className="underline-animation text-xs font-fira text-foreground">
              {`0${index + 1}.` + " " + link}
            </p>
          </Link>
        ))}
        <Button
          variant={"outline"}
          className="cursor-pointer text-xs font-fira text-foreground"
          asChild
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
