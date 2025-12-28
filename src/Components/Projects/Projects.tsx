import { useNavigate } from "react-router-dom";
import { projects } from "../../Assets/Data/projects/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  upTo?: number;
}

const Projects = ({ upTo = Object.keys(projects).length }: ProjectsProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col items-center ~px-4/12 gap-10 ${
        upTo === Object.keys(projects).length || "pb-[5vh]"
      }`}
    >
      <h2>
        I like <span className="text-gradient font-medium">making</span> things
      </h2>
      <div className="flex flex-col items-center gap-10 w-[80vw] md:w-[60vw]">
        {Object.keys(projects)
          .slice(0, upTo)
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
      {upTo !== Object.keys(projects).length && (
        <button
          onClick={() => navigate("/projects")}
          className="btn btn-lg bg-gray-300 bg-opacity-10 shadow-lg text-gray-200 text-shadow hover:bg-gray-500 hover:bg-opacity-30"
        >
          View All Projects
        </button>
      )}
    </div>
  );
};

export default Projects;
