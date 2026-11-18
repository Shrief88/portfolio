import { Link } from "lucide-react";
import Image from "next/image";

import { urlFor } from "@/lib/sanity/image";
import type { Project } from "@/lib/sanity/types";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

type Props = {
  project: Project;
  index: number;
};

const MainProject = ({ project, index }: Props) => {
  const { title, image, liveUrl } = project;
  const { lqip } = image.asset.metadata;

  return (
    <div
      key={title}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-10"
    >
      <div
        className={cn(
          index % 2 === 0
            ? "lg:col-start-1 lg:col-end-8"
            : "lg:col-start-6 lg:col-end-13"
        )}
      >
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          <Image
            className="w-full aspect-[2/1] rounded object-cover group-hover:animate-move-diagonal-up opacity-75 hover:opacity-100"
            src={urlFor(image).width(1200).height(600).fit("crop").url()}
            alt={image.alt ?? title}
            width={1200}
            height={600}
            placeholder="blur"
            blurDataURL={lqip}
          />
        </a>
      </div>
      <div
        className={cn(
          "lg:absolute",
          index % 2 === 0
            ? "lg:col-start-7 lg:col-end-13"
            : "lg:col-start-1 lg:col-end-7"
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-6",
            index % 2 === 0 ? "lg:items-end" : "items-start"
          )}
        >
          <h2 className="text-primary-foreground text-xl lg:text-2xl font-bold">
            {title}
          </h2>
          <div className="bg-secondary w-full p-6 z-20 rounded-2xl">
            <p className="text-muted-foreground">{project.description}</p>
          </div>
          <div
            className={cn(
              "flex flex-wrap gap-2",
              index % 2 === 0
                ? "lg:pl-14 lg:justify-end"
                : "lg:pr-10 lg:justify-start"
            )}
          >
            {project.skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>

          <div
            className={cn("flex gap-8", index % 2 === 0 && "flex-row-reverse")}
          >
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white hover:animate-move-up [&:not(:hover)]:animate-move-down"
              >
                <Link size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProject;
