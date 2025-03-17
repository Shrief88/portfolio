import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const links = ["About", "Experience", "Work", "Contact"];
  return (
    <div className="flex items-center justify-end gap-4 font-fira text-xs">
      {links.map((link, index) => (
        <Link key={link} href={`#${link.toLowerCase()}`}>
          {`0${index + 1}.` + " " + link}
        </Link>
      ))}
      <Button variant={"outline"} className="cursor-pointer">
        Resume
      </Button>
    </div>
  );
};

export default Navbar;
