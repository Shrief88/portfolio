import { Linkedin, Github, MailIcon } from "lucide-react";
import type { SiteLinks } from "@/lib/sanity/types";
import { cn } from "@/lib/utils";

type Props = {
  mode: "vertical" | "horizontal";
  links: SiteLinks;
};

const SocialMedia = ({ mode, links }: Props) => {
  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      name: "Linkedin",
      href: links.linkedin,
    },
    {
      icon: <Github size={20} />,
      name: "Github",
      href: links.github,
    },
    {
      icon: <MailIcon size={20} />,
      name: "Email",
      href: links.email ? `mailto:${links.email}` : undefined,
    },
  ].filter((link) => link.href);

  return (
    <div
      className={cn(
        "flex justify-center items-center gap-7",
        mode === "vertical" ? "flex-col" : ""
      )}
    >
      {socialLinks.map((link) => (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-white hover:animate-move-up [&:not(:hover)]:animate-move-down"
          key={link.name}
        >
          {link.icon}
        </a>
      ))}

      {mode === "vertical" && (
        <div className="h-20 w-0.25 bg-muted-foreground"></div>
      )}
    </div>
  );
};

export default SocialMedia;
