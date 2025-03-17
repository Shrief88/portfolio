"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = ["About", "Experience", "Work", "Contact"];

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldHasShadow, setShouldHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // As long as the currentScrollY is greater than the lastScrollY, that means the user is scrolling down so we hide the navbar otherwise we show it
      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
        setShouldHasShadow(currentScrollY > 0);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "px-8 fixed top-0 left-0 w-full text-xs font-fira bg-background transition-transform",
        show ? "translate-y-0" : "-translate-y-full",
        shouldHasShadow ? "drop-shadow-lg shadow-gray-900/50 backdrop-blur-md" : ""
      )}
    > 
      <div className="h-[var(--nav-height)] flex items-center justify-end gap-8">
        {links.map((link, index) => (
          <Link key={link} href={`#${link.toLowerCase()}`}>
            <p className="underline-animation">
              {`0${index + 1}.` + " " + link}
            </p>
          </Link>
        ))}
        <Button variant={"outline"} className="cursor-pointer">
          Resume
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
