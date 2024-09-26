import { projects } from "../../Utils/info";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  upTo?: number;
}

const Projects = ({ upTo = projects.length }: ProjectsProps) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[4rem] text-white hero-text-shadow mt-10 mb-6">
        {"I like making things"}
      </h2>
      <div className="flex flex-col items-center gap-10">
        {projects.slice(0, upTo).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
