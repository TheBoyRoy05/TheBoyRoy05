import { FaArrowDownLong } from "react-icons/fa6";
import Scene from "./Boids/Scene";
import Navbar from "../Navbar";
import TypingText from "./TypingText";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const Home = () => {
  const mainPage = useRef<HTMLDivElement>(null!);
  const projects = [
    {
      name: "YipYap",
      time: "Summer '24",
      description: "The Chat App for Yappers",
      image: "/src/Assets/YipYap.png",
    },
    {
      name: "Sorting Visualizer",
      time: "Summer '24",
      description: "Visualize your favorite sorting algorithms",
      image: "/src/Assets/SortingVisualizer.png",
    },
  ];

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
          <div className="flex flex-col items-center gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </SimpleBar>
    </>
  );
};

export default Home;
