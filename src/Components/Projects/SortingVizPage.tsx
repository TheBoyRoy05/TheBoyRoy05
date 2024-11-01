import { projects } from "../../Utils/info.tsx";
import Emphasize from "../Other/Emphasize";
import Frame from "../Other/Frame";
import Page from "../Page/Page";
import SectionCard from "../Other/SectionCard";
import { FaTimes } from "react-icons/fa";
import SectionList from "../Other/SectionList";
import { FaCode, FaExclamation } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";

const SortingVizPage = () => {
  const project = projects[projects.length - 1];
  const overview = useRef(null!);
  const problem = useRef(null!);
  const priorities = useRef(null!);
  const challenges = useRef(null!);
  const algorithms = useRef(null!);

  const contents = {
    overview,
    problem,
    priorities,
    challenges,
    algorithms,
  };

  return (
    <Page contents={contents}>
      <div>
        <h2>
          Sorting <span className="text-gradient font-medium">Visualizer</span>
        </h2>
        <h4 className="font-bold mt-[-1.5rem] text-xl">
          <span className="text-white">{project.time}</span>
          {` — ${project.description}`}
        </h4>
      </div>

      <div className="flex flex-col w-[60vw]">
        <div id="overview" ref={overview} className="flex flex-col gap-10 pt-14">
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
                algorithms <Emphasize text="simple" /> and <Emphasize text="fun" />
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
        </div>

        <div className="divider py-20" ref={problem} />

        <div id="problem" className="flex flex-col gap-20 pb-6">
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

        <div className="divider pt-14 pb-20" ref={priorities} />

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
            <SectionList items={project.priorities!} color={"#7dd3fc"} />
          </div>
        </div>

        <div className="divider py-20" ref={challenges} />

        <div id="challenges" className="flex flex-col gap-20">
          <SectionCard
            width="60vw"
            color="#F9D10C"
            symbol={<FaExclamation />}
            title="The Main Challenge"
            text="Implementing the Algorithms"
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

        <div className="divider pt-20" />

        <div id="algorithms" ref={algorithms} className="flex flex-col items-center gap-12 pt-20">
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
              src={`${baseURL}/src/Assets/Images/Projects/Algorithms.png`}
              className="border border-slate-500 rounded-xl"
            />
          </Frame> */}
          <div className="flex flex-col gap-10">
            <div className="flex gap-10">
              <SectionList items={project.algorithms!.slice(0, 3)} color={"#7dd3fc"} />
              <SectionList items={project.algorithms!.slice(3, 6)} color={"#7dd3fc"} />
            </div>
            <SectionList items={project.algorithms!.slice(6)} color={"#7dd3fc"} />
          </div>
        </div>

        <div className="divider py-20" />
      </div>

      <div className="flex flex-col items-center gap-12">
        <h3 className="text-white hero-text-shadow text-4xl font-bold">Explore my Next Project</h3>
        <ProjectCard {...projects[projects.length - 2]} width={"60vw"} />
      </div>
    </Page>
  );
};

export default SortingVizPage;
