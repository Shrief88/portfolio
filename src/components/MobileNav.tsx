"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";

interface Props {
  items: string[];
}

const MobileNav = ({ items }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size={"icon"} className={buttonVariants({ variant: "ghost" })}>
          <Menu className="cursor-pointer" />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="hidden"></SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
        </SheetHeader>
        <ul className="flex flex-col gap-4 py-6 justify-center items-center">
          {items.map((item, index) => (
            <li key={item} onClick={() => setOpen(false)}>
              <Link href={`#${item.toLowerCase()}`}>
                <p className="text-xs font-fira text-foreground">
                  {`0${index + 1}.` + " " + item}
                </p>
              </Link>
            </li>
          ))}
          <Button
            variant={"outline"}
            className="cursor-pointer text-xs font-fira text-foreground"
            asChild
          >
            <a href="/Sherif_Essam_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
