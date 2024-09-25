import { FaArrowDownLong } from "react-icons/fa6";
import Scene from "../Components/Boids/Scene";
import Navbar from "../Components/Navbar";
import TypingText from "../Components/TypingText";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { useRef } from "react";

const Home = () => {
  const mainPage = useRef<HTMLDivElement>(null!);

  const handleClick = () => {
    if (mainPage) mainPage.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <Scene />
      <SimpleBar className="absolute left-0 top-0 w-screen h-screen overflow-x-hidden">
        <Navbar />
        <TypingText />
        <div className="mt-20 h-64 bg-gradient-to-b from-transparent to-gray-800 flex justify-center items-center">
          <button onClick={handleClick}>
            <FaArrowDownLong className="text-3xl mt-20" />
          </button>
        </div>
        <div className="h-[1000px] bg-gray-800" ref={mainPage}></div>
      </SimpleBar>
    </>
  );
};

export default Home;
