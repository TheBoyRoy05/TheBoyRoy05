import { FaArrowRight } from "react-icons/fa6";

interface BlogProps {
  title: string;
  time: string;
  description: string;
  image: string;
  link: string;
}

const BlogCard = ({ title, time, description, image, link }: BlogProps) => {
  return (
    <div>
      <div className="project-glare w-10/12 mx-auto" />
      <div className="flex flex-col items-center max-w-[500px] bg-[#181818] border border-[--border-color] rounded-3xl p-3">
        <div className="project-glare w-1/2" />
        <div
          className="max-h-[560px] min-h-[560px] p-4 pb-0 border border-[--border-color] rounded-2xl project-bg group hover:cursor-pointer"
          onClick={() => window.open(link, '_blank')}
        >
          <div className="project-content flex flex-col overflow-hidden">
            <img
              src={image}
              alt={title}
              className="min-h-[260px] rounded-xl border border-[--border-color]"
            />
            <div className="flex justify-between items-center text-xl font-bold text-white text-shadow mt-6 mb-4">
              <span>{title}</span>
              <span>{time}</span>
            </div>
            <p className="font-light indent-8 leading-7">{description}</p>
            <div className="flex items-center text-white justify-end">
              <p className="text-right p-2 underline text-shadow font-light">{"Learn More"}</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
