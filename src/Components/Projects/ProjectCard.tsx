import { FaArrowRight } from "react-icons/fa6";
import Frame from "../Other/Frame";
import { useNavigate } from "react-router-dom";

interface ProjectProps {
  name: string;
  time: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ name, time, description, image, link }: ProjectProps) => {
  const navigate = useNavigate();

  return (
    <Frame width={"72.5vw"}>
      <div className="project-glare w-1/3" />
      <div className="max-h-[45vw] min-h-[45vw] p-11 pb-0 border border-[--border-color] rounded-2xl project-bg group hover:cursor-pointer" onClick={() => navigate(link)}>
        <div className="project-content flex flex-col overflow-hidden">
          <div className="flex items-center justify-between text-[1.75rem] font-bold text-white">
            <h3 className="mb-2 text-shadow">{name}</h3>
            <FaArrowRight />
          </div>
          <p className="font-bold mb-14">
            <span className="text-white">{time}</span>
            {` — ${description}`}
          </p>
          <img
            src={image}
            alt={name}
            className="border border-slate-500 rounded-xl group-hover:mt-[-0.5rem] transition-all duration-300"
          />
        </div>
      </div>
    </Frame>
  );
};

export default ProjectCard;
