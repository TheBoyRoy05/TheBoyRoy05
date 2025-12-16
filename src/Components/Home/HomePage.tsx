import Scene from "./Boids/Scene";
import TypingText from "./TypingText";
import { useRef } from "react";
import Projects from "../Projects/Projects";
import Blog from "../Blog/Blog";
import LoadingScreen from "../Other/LoadingScreen";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import Arrow from "./Arrow";
import { useLoading } from "../../Hooks/useLoading";

const HomePage = () => {
  const mainPage = useRef<HTMLDivElement>(null!);
  const { loading } = useLoading(1000);

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
        <Arrow handleClick={handleClick} />
        <div className="mt-[9vh] h-64 fade-gradient" />
        <div className="bg-[#101010] py-[7vh] flex flex-col items-center gap-20" ref={mainPage}>
          <Projects upTo={2} />
          <Blog upTo={3} />
        </div>
        <Footer />
      </SimpleBar>
    </>
  );
};

export default HomePage;
