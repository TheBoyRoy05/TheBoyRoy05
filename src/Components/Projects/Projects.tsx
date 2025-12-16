import { projects } from "../../Utils/info";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  upTo?: number;
}

const Projects = ({ upTo = Object.keys(projects).length }: ProjectsProps) => {
  return (
    <div className="flex flex-col items-center ~px-4/12">
      <h2>
        I like <span className="text-gradient font-medium">making</span> things
      </h2>
      <div className="flex flex-col items-center gap-10 w-full">
        {Object.keys(projects).slice(0, upTo).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
