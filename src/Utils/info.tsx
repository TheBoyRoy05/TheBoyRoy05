import { FaSortAmountDownAlt } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { MdDownload, MdOutlineQueryStats } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { TbChartBubbleFilled } from "react-icons/tb";
import { GiClown, GiCoinsPile } from "react-icons/gi";
import { BsLightningFill, BsSignMergeRightFill } from "react-icons/bs";

export const projects = [
  {
    name: "YipYap",
    time: "Summer '24",
    description: "The Chat App for Yappers",
    image: "/src/Assets/Images/Projects/YipYap.png",
    link: "/yipyap",
  },
  {
    name: "Sorting Visualizer",
    time: "Summer '24",
    description: "Visualize your favorite sorting algorithms",
    image: "/src/Assets/Images/Projects/SortingVisualizer.png",
    link: "/sorting-visualizer",
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
        text: "A simple algorithm which runs through the list iteratively and 'selects' the smallest/largest item to sort.",
        symbol: <FaLocationCrosshairs />,
      },
      {
        title: "Bubble Sort:",
        text: "A simple algorithm which runs through a list, comparing adjacent values, and performing swaps when necessary, allowing items towards the end to 'bubble' up.",
        symbol: <TbChartBubbleFilled />,
      },
      {
        title: "Insertion Sort:",
        text: "A simple algorithm which sorts a list by iteratively 'inserting' each item into their sorted position.",
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
    title: "Wave Simulation",
    time: "June 2024",
    description: "The wave equation is a 2nd-order partial differential equation used to describe wave phenomena such as mechanical and electromagnetic waves. This article explores solving the wave equation using the finite-difference method in 1D and 2D, covering discretization, damping, and various boundary conditions for different behaviors.",
    image: "/src/Assets/Images/Blog/WaveSimulation.png",
    link: "https://medium.com/@issacroy05/a-simple-wave-simulation-35bee02c172b",
  },
  {
    title: "Altruism",
    time: "February 2024",
    description: "Humans are unique due to altruism, prioritizing others' well-being, which contradicts economic models and is absent in even our closest relatives, chimpanzees. Through various simulations, including adding mutations and intelligent decision-making, this article explores evolutionary and traditional game theory.",
    image: "/src/Assets/Images/Blog/Altruism.png",
    link: "https://medium.com/cognitive-neuroeconomics/decoding-altruism-ccd72547d20e",
  },
];