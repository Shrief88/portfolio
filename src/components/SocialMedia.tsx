import { Linkedin, Github, MailIcon } from "lucide-react";
import { links } from "@/content/data.json";
import { cn } from "@/lib/utils";

type Props = {
  mode: "vertical" | "horizontal";
};

const SocialLinks = [
  {
    icon: <Linkedin size={20} />,
    name: links.Linkedin.name,
    href: links.Linkedin.href,
  },
  {
    icon: <Github size={20} />,
    name: links.Github.name,
    href: links.Github.href,
  },
  {
    icon: <MailIcon size={20} />,
    name: links.Email.name,
    href: `mailto:${links.Email.href}`,
  },
];

const SocialMedia = ({ mode }: Props) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-7",
        mode === "vertical" ? "flex-col" : ""
      )}
    >
      {SocialLinks.map((link) => (
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
