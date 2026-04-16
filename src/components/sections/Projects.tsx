import MaxWidthWrapper from "../MaxWidthWrapper";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";
import data from "@/content/data.json";
import MainProject from "../MainProject";

const Projects = () => {
  const { mainProjects } = data;
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
      </AnimatedSectionWrapper>
    </MaxWidthWrapper>
  );
};

export default Projects;
