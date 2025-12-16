import { IoMdColorPalette } from "react-icons/io";
import { FaFigma, FaLock, FaNodeJs, FaReact } from "react-icons/fa6";
import { GiFamilyTree } from "react-icons/gi";
import { BsYinYang } from "react-icons/bs";
import { SiExpress, SiMongodb, SiPostman, SiSocketdotio, SiTypescript } from "react-icons/si";
import { FiLayout } from "react-icons/fi";
import { RiSpeakFill } from "react-icons/ri";
import { PiTestTubeFill } from "react-icons/pi";
import { IoSparkles } from "react-icons/io5";

import yipyap from "/src/Assets/Images/Projects/YipYap/YipYap.png";

export default {
  time: "Summer '24",
  color: "#195277",
  description: "The Chat App for Yappers",
  image: yipyap,
  link: "/yipyap",
  tech: {
    React: <FaReact />,
    TypeScript: <SiTypescript />,
    MongoDB: <SiMongodb />,
    Express: <SiExpress />,
    Node: <FaNodeJs />,
    Figma: <FaFigma />,
    Postman: <SiPostman />,
    SocketIO: <SiSocketdotio />,
  },
  design: [
    {
      title: "User Experience is key -",
      text: "A clean and simple UI that is easy to navigate and understand.",
      symbol: <FiLayout />,
    },
    {
      title: "Blending tradition with innovation -",
      text: "Preserving tried and true features from other chat apps while introducing new and exciting ones.",
      symbol: <BsYinYang />,
    },
    {
      title: "What Yappers need -",
      text: "Prioritizing features that allow for maximum user engagement, including AI suggestions to keep conversations flowing.",
      symbol: <RiSpeakFill />,
    },
    {
      title: "Future color themes -",
      text: "Designing in grayscale for flexibility in future color themes.",
      symbol: <IoMdColorPalette />,
    },
  ],
  api: [
    {
      title: "Security -",
      text: "Industry practices like password hashing, user authentication middleware, and session management ensures a secure experience.",
      symbol: <FaLock />,
    },
    {
      title: "Testing -",
      text: "Frequent testing using Postman ensures a stable and reliable API, ensuring minimal downtime and maximized functionality.",
      symbol: <PiTestTubeFill />,
    },
    {
      title: "AI Suggestions -",
      text: "Using Mintral AI's API with custom prompting to generate text suggestions keeps conversations flowing.",
      symbol: <IoSparkles />,
    },
    {
      title: "Visualizing the API -",
      text: "Tableau allows us to visualize the current YipYap API endpoints in use. As YipYap grows, so will this graph.",
      symbol: <GiFamilyTree className="rotate-180 text-3xl" />,
    },
  ],
};
