import { FaArrowDownLong } from "react-icons/fa6";
import Scene from "./Boids/Scene";
import TypingText from "./TypingText";
import { useEffect, useRef, useState } from "react";
import Projects from "../Projects/Projects";
import Blog from "../Blog/Blog";
import Page from "../Page/Page";
import LoadingScreen from "../Other/LoadingScreen";

const HomePage = () => {
  const mainPage = useRef<HTMLDivElement>(null!);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleClick = () => {
    if (mainPage) mainPage.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <Scene />
      <Page homePage>
        <TypingText />
        <div className="mt-[9vh] h-64 fade-gradient flex justify-center items-center">
          <button onClick={handleClick} className="absolute top-[90vh]">
            <FaArrowDownLong className="text-3xl text-white" />
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
