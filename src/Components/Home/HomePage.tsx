import { FaArrowDownLong } from "react-icons/fa6";
import Scene from "./Boids/Scene";
import Navbar from "../Navbar";
import TypingText from "./TypingText";
import SimpleBar from "simplebar-react";
import { useRef } from "react";
import Projects from "../Projects/Projects";
import Blog from "../Blogs/Blog";
import Footer from "../Footer";
import "simplebar-react/dist/simplebar.min.css";

const HomePage = () => {
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
        <div className="mt-[3vw] h-64 fade-gradient flex justify-center items-center">
          <button onClick={handleClick}>
            <FaArrowDownLong className="text-3xl mt-4" />
          </button>
        </div>
        <div className="bg-[#101010]" ref={mainPage}>
          <Projects upTo={2} />
          <Blog upTo={3} />
          <Footer />
        </div>
      </SimpleBar>
    </>
  );
};

export default HomePage;
