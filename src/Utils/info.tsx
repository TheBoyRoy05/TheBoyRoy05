import { FaSortAmountDownAlt } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { IoMdColorPalette, IoMdSettings } from "react-icons/io";
import { MdDownload, MdOutlineQueryStats } from "react-icons/md";
import { FaFigma, FaLocationCrosshairs, FaLock, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { TbBrandThreejs, TbChartBubbleFilled } from "react-icons/tb";
import { GiClown, GiCoinsPile, GiFamilyTree } from "react-icons/gi";
import { BsLightningFill, BsSignMergeRightFill, BsYinYang } from "react-icons/bs";
import { FiLayout } from "react-icons/fi";
import { RiSpeakFill } from "react-icons/ri";
import { PiTestTubeFill } from "react-icons/pi";
import { IoSparkles } from "react-icons/io5";
import { SiExpress, SiMongodb, SiNumpy, SiPostman, SiSocketdotio, SiTypescript } from "react-icons/si";

export const baseURL =
  window.location.hostname != "localhost"
    ? "https://raw.githubusercontent.com/TheBoyRoy05/TheBoyRoy05/main"
    : "";

export const projects = [
  {
    name: "YipYap",
    time: "Summer '24",
    description: "The Chat App for Yappers",
    image: `${baseURL}/src/Assets/Images/Projects/YipYap/YipYap.png`,
    link: "/yipyap",
    tech: {
      "React": <FaReact />,
      "TypeScript": <SiTypescript />,
      "MongoDB": <SiMongodb />,
      "Express": <SiExpress />,
      "Node": <FaNodeJs />,
      "Figma": <FaFigma />,
      "Postman": <SiPostman />,
      "SocketIO": <SiSocketdotio />,
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
  },
  {
    name: "Sorting Visualizer",
    time: "Summer '24",
    description: "Visualize your favorite sorting algorithms",
    image: `${baseURL}/src/Assets/Images/Projects/SortingVisualizer/SortingVisualizer.png`,
    link: "/sorting-visualizer",
    tech: {
      "React": <FaReact />,
      "TypeScript": <SiTypescript />,
    },
    priorities: [
      {
        title: "Keep it simple, yet fun to use.",
        text: "Even a child should be able to use and enjoy playing with it.",
        symbol: <LuPartyPopper />,
      },
      {
        title: "A variety of sorting algorithms.",
        text: "At least 5 to start with, but the more the merrier.",
        symbol: <FaSortAmountDownAlt className="rotate-[270deg]" />,
      },
      {
        title: "A myriad of settings to tweak.",
        text: "So you can see where each algorithm shines and where it falls.",
        symbol: <IoMdSettings />,
      },
      {
        title: "Live statistics.",
        text: "So you can track the performance of each algorithm in real time.",
        symbol: <MdOutlineQueryStats />,
      },
    ],
    algorithms: [
      {
        title: "Selection Sort:",
        text: "An algorithm which iterates through the list and 'selects' the smallest/largest item to sort.",
        symbol: <FaLocationCrosshairs />,
      },
      {
        title: "Bubble Sort:",
        text: "An algorithm which runs through a list, comparing adjacent values, and performing swaps when necessary, allowing items towards the end to 'bubble' up.",
        symbol: <TbChartBubbleFilled />,
      },
      {
        title: "Insertion Sort:",
        text: "An algorithm which sorts a list by iteratively 'inserting' each item into their sorted position.",
        symbol: <MdDownload />,
      },
      {
        title: "Heap Sort:",
        text: "An algorithm which uses a data-structure called a 'heap' to heapify the list before sorting it.",
        symbol: <GiCoinsPile />,
      },
      {
        title: "Quick Sort:",
        text: "A recursive algorithm which chooses a 'partition' and recursively splits the list into two parts, one with items less than the partition, and the other with items that are greater.",
        symbol: <BsLightningFill />,
      },
      {
        title: "Merge Sort:",
        text: "A recursive algorithm which splits the list into two halves and recursively sorts them before 'merging' them together.",
        symbol: <BsSignMergeRightFill />,
      },
      {
        title: "Bozo Sort:",
        text: "A terrible algorithm which checks if the list is sorted and if not, swaps two random elements, repeating this process until the list is sorted.",
        symbol: <GiClown />,
      },
    ],
  },
];

export const articles = [
  {
    title: "Boids Simulation",
    time: "January 2025",
    description:
      "Boids are an elegant demonstration of how complex, lifelike group behavior can emerge from simple rules applied to individual agents. These agents can simulate realistic movements such as swarming, avoiding obstacles, and following leaders. It's mesmerizing to witness—and even more fascinating to simulate.",
    image: `${baseURL}/src/Assets/Images/Blog/Boids.gif`,
    link: "https://medium.com/@issacroy05/boids-simulating-flocks-e11c121a35cc",
    tech: {
      "React": <FaReact />,
      "TypeScript": <SiTypescript />,
      "ThreeJS": <TbBrandThreejs />,
    }
  },
  {
    title: "Wave Simulation",
    time: "June 2024",
    description:
      "The wave equation is a 2nd-order partial differential equation used to describe wave phenomena such as mechanical and electromagnetic waves. This article explores solving the wave equation using the finite-difference method in 1D and 2D, covering discretization, damping, and various boundary conditions for different behaviors.",
    image: `${baseURL}/src/Assets/Images/Blog/WaveSimulation.png`,
    link: "https://medium.com/@issacroy05/a-simple-wave-simulation-35bee02c172b",
    tech: {
      "Python": <FaPython />,
      "Numpy": <SiNumpy />,
    }
  },
  {
    title: "Altruism",
    time: "February 2024",
    description:
      "Humans are unique due to altruism, prioritizing others' well-being, which contradicts economic models and is absent in even our closest relatives, chimpanzees. Through various simulations, including adding mutations and intelligent decision-making, this article explores evolutionary and traditional game theory.",
    image: `${baseURL}/src/Assets/Images/Blog/Altruism.png`,
    link: "https://medium.com/cognitive-neuroeconomics/decoding-altruism-ccd72547d20e",
    tech: {
      "Python": <FaPython />,
      "Numpy": <SiNumpy />,
    }
  },
];
