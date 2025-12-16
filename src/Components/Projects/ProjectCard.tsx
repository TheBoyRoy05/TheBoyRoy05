import { FaArrowRight } from "react-icons/fa6";
import Frame from "../Other/Frame";
import { useNavigate } from "react-router-dom";
import { projects } from "../../Assets/Data/projects/projects";

interface ProjectProps {
  project: string;
}

const ProjectCard = ({ project }: ProjectProps) => {
  const projectInfo = projects[project as keyof typeof projects];
  const navigate = useNavigate();

  return (
    <Frame midClass="w-full min-w-[325px]" hoverColor={projectInfo.color}>
      <div className="glare w-1/3" />
      <div
        className={`~pt-2/6 ~px-2/6 pb-0 border border-[--border-color] rounded-2xl frame-bg group hover:cursor-pointer`}
        onClick={() => navigate(projectInfo.link)}
      >
        <div className="frame-content flex-col overflow-hidden">
          <div className="flex items-center justify-between ~text-lg/3xl font-bold text-white">
            <h3 className="~mb-2/4 text-shadow">{project}</h3>
            <FaArrowRight />
          </div>
          <p className="~text-xs/base font-bold mb-[3vw]">
            <span className="text-white">{projectInfo.time}</span>
            {` — ${projectInfo.description}`} 
          </p>
          <img
            src={projectInfo.image}
            alt={project}
            className="border border-slate-500 rounded-xl group-hover:-translate-y-[0.75vw] ~-mb-2/8 transition-all duration-300"
          />
        </div>
      </div>
    </Frame>
  );
};

export default ProjectCard;
