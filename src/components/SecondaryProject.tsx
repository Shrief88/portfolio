import { Github, Link } from "lucide-react";
import { Badge } from "./ui/badge";

type Props = {
  project: {
    title: string;
    description: string;
    skills: string[];
    links: {
      Source?: string;
      Live?: string;
    };
  };
};

const SecondaryProject = ({ project }: Props) => {
  return (
    <div className="flex flex-col gap-6 py-8 px-7 bg-secondary rounded hover:animate-move-up [&:not(:hover)]:animate-move-down">
      <div className="flex justify-end">
        <div className="flex items-center gap-6">
          {project.links.Source && (
            <a
              href={project.links.Source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white "
            >
              <Github size={20} />
            </a>
          )}
          {project.links.Live && (
            <a
              href={project.links.Live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white "
            >
              <Link size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-foreground text-xl font-bold">
          {project.title}
        </h3>
        <p className="text-muted-foreground">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.skills.map((skill) => (
          <Badge key={skill} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SecondaryProject;
