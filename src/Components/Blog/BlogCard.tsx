import { FaArrowRight } from "react-icons/fa6";
import Frame from "../Other/Frame";

interface BlogProps {
  title: string;
  time: string;
  description: string;
  image: string;
  link: string;
}

const BlogCard = ({ title, time, description, image, link }: BlogProps) => {
  return (
    <Frame width="500px">
      <div className="glare w-1/2" />
      <div
        className="max-h-[560px] min-h-[560px] p-4 pb-0 border border-[--border-color] rounded-2xl frame-bg group hover:cursor-pointer"
        onClick={() => window.open(link, "_blank")}
      >
        <div className="frame-content flex-col overflow-hidden">
          <img
            src={image}
            alt={title}
            className="min-h-[260px] rounded-xl border border-[--border-color]"
          />
          <div className="flex justify-between items-center text-xl font-bold text-white text-shadow mt-6 mb-4">
            <span className="text-white">{title}</span>
            <span className="text-white">{time}</span>
          </div>
          <p className="font-light indent-8 leading-7">{description}</p>
          <div className="flex items-center text-white justify-end">
            <p className="text-right p-2 underline text-shadow font-light text-white">
              {"Learn More"}
            </p>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default BlogCard;
