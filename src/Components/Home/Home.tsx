import { FaArrowDownLong } from "react-icons/fa6";
import Scene from "./Boids/Scene";
import Navbar from "../Navbar";
import TypingText from "./TypingText";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import BlogCard from "./BlogCard";
import { blogs, projects } from "../../Utils/info";

const Home = () => {
  const mainPage = useRef<HTMLDivElement>(null!);

  const handleClick = () => {
    if (mainPage) mainPage.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Scene />
      <SimpleBar className="absolute left-0 top-0 w-screen h-screen overflow-x-hidden">
        <Navbar />
        <TypingText />
        <div className="mt-28 h-64 fade-gradient flex justify-center items-center">
          <button onClick={handleClick}>
            <FaArrowDownLong className="text-3xl mt-4" />
          </button>
        </div>
        <div className="bg-[#101010]" ref={mainPage}>
          <div className="flex flex-col items-center">
            <h2 className="text-[4rem] text-white hero-text-shadow mt-10 mb-6">
              {"I like making things"}
            </h2>
            <div className="flex flex-col items-center gap-10">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[4rem] text-white hero-text-shadow mt-10 mb-6">
              {"I like sharing what I learn"}
            </h2>
            <div className="flex gap-20 flex-wrap justify-center">
              {blogs.map((project, index) => (
                <BlogCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </SimpleBar>
    </>
  );
};

export default Home;
