import { FaArrowDownLong } from "react-icons/fa6";
import Scene from "./Boids/Scene";
import TypingText from "./TypingText";
import { useRef } from "react";
import Projects from "../Projects/Projects";
import Blog from "../Blogs/Blog";
import "simplebar-react/dist/simplebar.min.css";
import Page from "../Page/Page";

const HomePage = () => {
  const mainPage = useRef<HTMLDivElement>(null!);

  const handleClick = () => {
    if (mainPage) mainPage.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Scene />
      <Page homePage>
        <TypingText />
        <div className="mt-[9vh] h-64 fade-gradient flex justify-center items-center">
          <button onClick={handleClick}>
            <FaArrowDownLong className="text-3xl mt-[12vh]" />
          </button>
        </div>
        <div className="bg-[#101010] pb-[7vh]" ref={mainPage}>
          <Projects upTo={2} />
          <Blog upTo={3} />
        </div>
      </Page>
    </>
  );
};

export default HomePage;
