import { FaArrowDownLong } from "react-icons/fa6";
import Scene from "./Boids/Scene";
import TypingText from "./TypingText";
import { useEffect, useRef, useState } from "react";
import Projects from "../Projects/Projects";
import Blog from "../Blog/Blog";
import LoadingScreen from "../Other/LoadingScreen";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";

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
      <SimpleBar className={`absolute left-0 top-0 w-screen h-screen overflow-x-hidden`}>
        <Navbar />
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
        <Footer />
      </SimpleBar>
    </>
  );
};

export default HomePage;
