import { FaArrowRight } from "react-icons/fa6";
import Frame from "../Other/Frame";
import { useNavigate } from "react-router-dom";

interface ProjectProps {
  name: string;
  time: string;
  description: string;
  image: string;
  link: string;
  props?: any;
}

const ProjectCard = ({ name, time, description, image, link, props }: ProjectProps) => {
  const navigate = useNavigate();

  return (
    <Frame midClass="w-[clamp(350px,72.5vw,1500px)]" {...props}>
      <div className="glare w-1/3" />
      <div
        className={`~pt-2/6 ~px-2/6 pb-0 border border-[--border-color] rounded-2xl frame-bg group hover:cursor-pointer`}
        onClick={() => navigate(link)}
      >
        <div className="frame-content flex-col overflow-hidden">
          <div className="flex items-center justify-between ~text-lg/3xl font-bold text-white">
            <h3 className="~mb-2/4 text-shadow">{name}</h3>
            <FaArrowRight />
          </div>
          <p className="~text-xs/base font-bold mb-[3vw]">
            <span className="text-white">{time}</span>
            {` — ${description}`}
          </p>
          <img
            src={image}
            alt={name}
            className="border border-slate-500 rounded-xl group-hover:mt-[-0.5vw] ~-mb-2/8 transition-all duration-300"
          />
        </div>
      </div>
    </Frame>
  );
};

export default ProjectCard;
