import Scene from "../Components/Boids/Scene";
import Navbar from "../Components/Navbar";
import TypingText from "../Components/TypingText";

const Home = () => {
  return (
    <>
      <Scene />
      <div className="absolute left-0 top-0 w-screen h-screen">
        <Navbar />
        <TypingText />
      </div>
    </>
  );
};

export default Home;
