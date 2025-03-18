import { Linkedin, Github, MailIcon } from "lucide-react";
import { links } from "@/data.json";

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

const Links = () => {
  return (
    <div className="fixed w-10 left-10 bottom-0">
      <div className="flex flex-col justify-center items-center gap-7">
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

        <div className="h-20 w-0.25 bg-muted-foreground"></div>
      </div>
    </div>
  );
};

export default Links;
