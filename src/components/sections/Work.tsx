import Image from "next/image";

import MaxWidthWrapper from "../MaxWidthWrapper";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";
import { projects } from "@/content/data.json";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

const Work = () => {
  return (
    <MaxWidthWrapper>
      <AnimatedSectionWrapper id="work">
        <h1 className="section-heading mb-10" data-section-number="03.">
          Some Things I’ve Built
        </h1>
        <div className="flex flex-col gap-16">
          {Object.entries(projects).map(([title, project], index) => (
            <div
              key={title}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-10"
            >
              <div
                className={cn(
                  index % 2 === 0
                    ? "md:col-start-1 md:col-end-7"
                    : "md:col-start-6 md:col-end-[-1]"
                )}
              >
                <a
                  href={project.links.Live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="w-full rounded object-cover group-hover:animate-move-diagonal-up opacity-75 hover:opacity-100"
                    src={project.links.image}
                    alt={title}
                    width={1000}
                    height={1000}
                  />
                </a>
              </div>
              <div
                className={cn(
                  "md:absolute",
                  index % 2 === 0
                    ? "md:col-start-6 md:col-end-[-1]"
                    : "md:col-start-1 md:col-end-7"
                )}
              >
                <div
                  className={cn(
                    "flex flex-col gap-6",
                    index % 2 === 0 ? "md:items-end" : "items-start"
                  )}
                >
                  <h2 className="text-primary-foreground text-xl md:text-2xl font-bold">
                    {title}
                  </h2>
                  <div className="bg-secondary w-full p-6 z-20 rounded-2xl">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "flex flex-wrap gap-2",
                      index % 2 === 0 ? "md:pl-10" : "md:pr-10"
                    )}
                  >
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSectionWrapper>
    </MaxWidthWrapper>
  );
};

export default Work;
