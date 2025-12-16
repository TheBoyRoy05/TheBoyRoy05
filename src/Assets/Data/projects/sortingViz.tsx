import { FaSortAmountDownAlt } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { MdDownload, MdOutlineQueryStats } from "react-icons/md";
import { FaLocationCrosshairs, FaReact } from "react-icons/fa6";
import { TbChartBubbleFilled } from "react-icons/tb";
import { GiClown, GiCoinsPile } from "react-icons/gi";
import { BsLightningFill, BsSignMergeRightFill } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";

import sortingViz from "/src/Assets/Images/Projects/SortingVisualizer/SortingVisualizer.png";

export default {
  time: "Summer '24",
  color: "#193F77",
  description: "Visualize your favorite sorting algorithms",
  image: sortingViz,
  link: "/sorting-visualizer",
  tech: {
    React: <FaReact />,
    TypeScript: <SiTypescript />,
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
      text: "An algorithm which goes over the list and 'selects' the next item to sort.",
      symbol: <FaLocationCrosshairs />,
    },
    {
      title: "Bubble Sort:",
      text: "An algorithm which runs through a list, comparing adjacent values, performing swaps when necessary, allowing items towards the end to 'bubble' up.",
      symbol: <TbChartBubbleFilled />,
    },
    {
      title: "Insertion Sort:",
      text: "An algorithm which sorts a list by iteratively 'inserting' each item into their sorted place.",
      symbol: <MdDownload />,
    },
    {
      title: "Heap Sort:",
      text: "An algorithm which uses a data structure called a 'heap' to heapify the list before sorting it.",
      symbol: <GiCoinsPile />,
    },
    {
      title: "Quick Sort:",
      text: "A recursive algorithm which chooses a 'partition' and recursively splits the list into two parts, one with items less than the partition, and the other with items that are greater.",
      symbol: <BsLightningFill />,
    },
    {
      title: "Merge Sort:",
      text: "A recursive algorithm which splits the list in half and recursively sorts them before 'merging' them together.",
      symbol: <BsSignMergeRightFill />,
    },
    {
      title: "Bozo Sort:",
      text: "A terrible algorithm which checks if the list is sorted and if not, swaps two random elements, repeating this process until the list is sorted.",
      symbol: <GiClown />,
    },
  ],
};
