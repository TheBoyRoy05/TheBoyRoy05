import { FaArrowRight } from "react-icons/fa6";
import Frame from "../Other/Frame";

interface BlogProps {
  title: string;
  time: string;
  description: string;
  image: string;
  link: string;
  tech: { [key: string]: React.ReactNode };
}

const BlogCard = ({ title, time, description, image, link, tech }: BlogProps) => {
  return (
    <Frame width="clamp(350px, 40vw, 500px)">
      <div className="glare w-1/2" />
      <div
        className="p-4 pb-0 border border-[--border-color] rounded-2xl frame-bg group hover:cursor-pointer"
        style={{ height: "clamp(475px, 50vw, 580px)" }}
        onClick={() => window.open(link, "_blank")}
      >
        <div className="frame-content flex-col overflow-hidden h-full">
          <img
            src={image}
            alt={title}
            className="rounded-xl border border-[--border-color]"
            style={{ height: "clamp(175px, 20vw, 260px)" }}
          />
          <div className="flex justify-between items-center ~text-sm/xl font-bold text-white text-shadow mt-6 mb-4">
            <span className="text-white">{title}</span>
            <span className="text-white">{time}</span>
          </div>
          <p className="~text-xs/base font-light indent-8 ~leading-5/7">{description}</p>

          <div className="flex-1 flex items-end">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-4 items-center py-4 px-2">
                {Object.entries(tech).map(([name, item], index) => (
                  <span key={index} className="text-white text-3xl" title={name}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-white justify-end ~text-xs/base">
                <p className="text-right p-2 underline text-shadow font-light text-white">
                  Learn More
                </p>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default BlogCard;
