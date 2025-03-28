import MaxWidthWrapper from "../MaxWidthWrapper";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";
import { mainProjects, otherProjects } from "@/content/data.json";
import MainProject from "../MainProject";
import SecondaryProject from "../SecondaryProject";

const Projects = () => {
  return (
    <MaxWidthWrapper>
      <AnimatedSectionWrapper id="projects">
        <h1 className="section-heading mb-10" data-section-number="03.">
          Some Things I’ve Built
        </h1>
        <div className="flex flex-col gap-16">
          {Object.entries(mainProjects).map(([title, project], index) => (
            <MainProject
              key={title}
              title={title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-col gap-10 mt-32 justify-center items-center">
          <h2 className="text-primary-foreground text-[27px] font-bold leading-5">
            Other Noteworthy Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Object.entries(otherProjects).map(([title, project]) => (
              <SecondaryProject key={title} project={project} />
            ))}
          </div>
        </div>
      </AnimatedSectionWrapper>
    </MaxWidthWrapper>
  );
};

export default Projects;
