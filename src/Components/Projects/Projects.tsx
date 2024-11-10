import { projects } from "../../Utils/info";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  upTo?: number;
}

const Projects = ({ upTo = projects.length }: ProjectsProps) => {
  return (
    <div className="flex-col items-center">
      <h2>
        I like <span className="text-gradient font-medium">making</span> things
      </h2>
      <div className="flex-col items-center gap-10">
        {projects.slice(0, upTo).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
