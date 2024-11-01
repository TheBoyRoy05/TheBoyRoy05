import { projects } from "../../Utils/info";
import Emphasize from "../Other/Emphasize";
import Frame from "../Other/Frame";
import Page from "../Page/Page";
import SectionCard from "../Other/SectionCard";
import { FaSortAmountDownAlt, FaTimes } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { MdDownload, MdOutlineQueryStats } from "react-icons/md";
import SectionList from "../Other/SectionList";
import { FaCode, FaExclamation, FaLocationCrosshairs } from "react-icons/fa6";
import { TbChartBubbleFilled } from "react-icons/tb";
import { GiClown, GiCoinsPile } from "react-icons/gi";
import { BsLightningFill, BsSignMergeRightFill } from "react-icons/bs";
import ProjectCard from "./ProjectCard";

const SortingVizPage = () => {
  const project = projects[projects.length - 1];
  const priorities = [
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
  ];
  const algorithms = [
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
  ];

  return (
    <Page>
      <div>
        <h2>
          Sorting <span className="text-gradient font-medium">Visualizer</span>
        </h2>
        <h4 className="font-bold mt-[-1.5rem] mb-14 text-xl">
          <span className="text-white">{project.time}</span>
          {` — ${project.description}`}
        </h4>
      </div>

      <div className="flex flex-col gap-10 w-[60vw]">
        <div className="fade-in-up">
          <Frame width={"60vw"}>
            <div className="project-glare w-1/3" />
            <img
              src={project.image}
              alt={project.name}
              className="border border-slate-500 rounded-xl"
            />
          </Frame>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-[10px] h-[10px] bg-white rounded-full white-glow" />
            <h3 className="text-white text-shadow font-bold text-xl">Overview</h3>
          </div>
          <div className="flex gap-12 text-lg leading-8">
            <p className="flex-1">
              <span className="text-white">
                Sorting algorithms are an important factor in algorithmic thinking,
              </span>{" "}
              and visualizing them will undoubtedly deepen your understanding of each algorithm's
              key ideas and features.
            </p>
            <p className="flex-1">
              I built this application to dive deep into sorting algorithms while making sorting
              algorithms <Emphasize text="trivial" /> and <Emphasize text="fun" />
              to learn. Feel free to play around with it here:{" "}
              <a
                href="https://theboyroy05.github.io/Sorting-Visualizer/"
                target="_blank"
                className="text-blue-400 underline"
              >
                Sorting Visualizer
              </a>
            </p>
          </div>
        </div>

        <div className="divider my-12" />

        <div id="problem" className="flex flex-col gap-20">
          <SectionCard
            width="60vw"
            color="#f00"
            symbol={<FaTimes />}
            title="The Problem"
            text="Sorting Algorithms are Hard"
          />

          <div className="flex gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div className="w-[10px] h-[10px] bg-white rounded-full white-glow" />
                <h4 className="text-white text-shadow font-bold text-3xl">Problem</h4>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 text-lg leading-8">
              <p>
                <span className="text-white">Sorting algorithms are hard to understand,</span>{" "}
                especially as they are taught in class. Typically, you're exposed to the code behind
                each algorithm and the motivations behind them but rarely do you get to see the
                algorithms in action.
              </p>
              <p>
                This means you miss out on the most important aspect of learning, building
                <Emphasize text="intuition" />. So I set out to change that by creating something
                <Emphasize text="simple" /> and <Emphasize text="fun" /> to use.
              </p>
              <p>
                Not only would I <Emphasize text="deepen" /> my understanding of these essential
                algorithms, but I could also provide something <Emphasize text="useful" /> for my
                fellow students to learn from.
              </p>
            </div>
          </div>
        </div>

        <div className="divider my-12" />

        <div id="priorities" className="flex gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <div className="w-[10px] h-[10px] bg-white rounded-full white-glow" />
              <h4 className="text-white text-shadow font-bold text-3xl">Priorities</h4>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-lg leading-8">
              <p>
                <span className="text-white">
                  Before I could start building, I had to outline a plan,
                </span>{" "}
                carefully deciding on the most essential features. This ensures that the project can
                provide value from the get-go.
              </p>
              <p>
                With a clear <Emphasize text="vision" /> in place, I could focus on delivering a
                user-friendly and engaging tool. These were the non-negotiable{" "}
                <Emphasize text="priorities" /> that I set out to achieve:
              </p>
            </div>
            <SectionList items={priorities} color={"#7dd3fc"} />
          </div>
        </div>

        <div className="divider my-12" />

        <div id="challenges" className="flex flex-col gap-20">
          <SectionCard
            width="60vw"
            color="#F9D10C"
            symbol={<FaExclamation />}
            title="The Main Challenge"
            text="All of the Algorithms Must be In-Place"
          />

          <div className="flex gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div className="w-[10px] h-[10px] bg-white rounded-full white-glow" />
                <h4 className="text-white text-shadow font-bold text-3xl">Challenges</h4>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 text-lg leading-8">
              <p>
                <span className="text-white">
                  In practice, sorting algorithms don't need to be in-place.
                </span>{" "}
                However, since I'm displaying these algorithms in a list that evolves over time,
                traditional algorithms won't cut it.
              </p>
              <p>
                After doing some <Emphasize text="research" />, I found in-place solutions for some
                of the sorting algorthms. However, most of them didn't fit my needs and so I had to
                implement them <Emphasize text="from scratch" />.
              </p>
              <p>
                In particular, the variations of quick sort and merge sort were the most
                <Emphasize text="difficult" />. But after <Emphasize text="diving deep" /> into
                these algorithms, I found the best ways to implement them.
              </p>
            </div>
          </div>
        </div>

        <div className="divider my-12" />

        <div id="algorithms" className="flex flex-col items-center gap-12">
          <SectionCard
            width="60vw"
            color="#7dd3fc"
            symbol={<FaCode />}
            title="The Algorithms"
            text="Meet the Algorithms"
          />
          {/* <h3 className="text-white hero-text-shadow text-4xl font-bold">Meet the Algorithms</h3> */}
          {/* <Frame width={"60vw"}>
            <div className="project-glare w-1/3" />
            <img
              alt="Algorithms"
              src="/src/Assets/Images/Projects/Algorithms.png"
              className="border border-slate-500 rounded-xl"
            />
          </Frame> */}
          <div className="flex flex-col gap-10">
            <div className="flex gap-10">
              <SectionList items={algorithms.slice(0, 3)} color={"#7dd3fc"} />
              <SectionList items={algorithms.slice(3, 6)} color={"#7dd3fc"} />
            </div>
            <SectionList items={algorithms.slice(6)} color={"#7dd3fc"} />
          </div>
        </div>

        <div className="divider my-12" />
      </div>
      <div className="flex flex-col items-center gap-12">
        <h3 className="text-white hero-text-shadow text-4xl font-bold">Explore my Next Project</h3>
        <ProjectCard {...projects[projects.length - 2]} />
      </div>
    </Page>
  );
};

export default SortingVizPage;
