import { FaArrowRight } from "react-icons/fa6";

interface ProjectProps {
  name: string;
  time: string;
  description: string;
  image: string;
}

const ProjectCard = ({ name, time, description, image }: ProjectProps) => {
  return (
    <div>
      <div className="project-glare" />
      <div className="flex flex-col items-center max-w-[1440px] bg-[#181818] border border-[#505050] rounded-3xl p-3">
        <div className="project-glare w-1/2" />
        <div className="max-h-[900px] min-h-[900px] p-11 pb-0 border border-[#505050] rounded-2xl project-bg group">
          <div className="project-content flex flex-col overflow-hidden">
            <div className="flex items-center justify-between text-[1.75rem] font-bold text-white">
              <h3 className="mb-2">{name}</h3>
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
      </div>
    </div>
  );
};

export default ProjectCard;
