import MaxWidthWrapper from "../MaxWidthWrapper";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";
import type { Project } from "@/lib/sanity/types";
import MainProject from "../MainProject";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <MaxWidthWrapper>
      <AnimatedSectionWrapper id="projects">
        <h1 className="section-heading mb-10" data-section-number="03.">
          Some Things I’ve Built
        </h1>
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <MainProject key={project._id} project={project} index={index} />
          ))}
        </div>
      </AnimatedSectionWrapper>
    </MaxWidthWrapper>
  );
};

export default Projects;
