import { FaArrowRight } from "react-icons/fa6";
import Frame from "../Other/Frame";
import { useNavigate } from "react-router-dom";

interface ProjectProps {
  name: string;
  time: string;
  description: string;
  image: string;
  link: string;
  width?: string;
}

const ProjectCard = ({ name, time, description, image, link, width }: ProjectProps) => {
  const navigate = useNavigate();
  const height = width ? Math.round((Number(width.slice(0, -2)) * 45) / 72.5) + 2 : 45;

  return (
    <Frame width={width || "72.5vw"}>
      <div className="project-glare w-1/3" />
      <div
        className={`p-[2.75vw] pb-0 border border-[--border-color] rounded-2xl frame-bg group hover:cursor-pointer`}
        style={{ maxHeight: `${height}vw`, minHeight: `${height}vw` }}
        onClick={() => navigate(link)}
      >
        <div className="frame-content flex flex-col overflow-hidden">
          <div className="flex items-center justify-between text-[1.75rem] font-bold text-white">
            <h3 className="mb-[0.5vw] text-shadow">{name}</h3>
            <FaArrowRight />
          </div>
          <p className="font-bold mb-[3vw]">
            <span className="text-white">{time}</span>
            {` — ${description}`}
          </p>
          <img
            src={image}
            alt={name}
            className="border border-slate-500 rounded-xl group-hover:mt-[-0.5vw] transition-all duration-300"
          />
        </div>
      </div>
    </Frame>
  );
};

export default ProjectCard;
