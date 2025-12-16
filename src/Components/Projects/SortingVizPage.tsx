import { projects } from "../../Utils/info.tsx";
import Emphasize from "../Other/Emphasize";
import Frame from "../Other/Frame";
import Page from "../Page/Page";
import SectionCard from "../Other/Section/SectionCard.tsx";
import { FaTimes } from "react-icons/fa";
import SectionList from "../Other/Section/SectionList.tsx";
import { FaCode, FaExclamation } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import SectionHeader from "../Other/Section/SectionHeader.tsx";

const SortingVizPage = () => {
  const project = projects["Sorting Visualizer"];
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
    <Page contents={contents} color={"#00639b80"}>
      <div className="flex-col items-center">
        <h2>
          Sorting <span className="text-gradient font-medium">Visualizer</span>
        </h2>
        <h4 className="font-bold mt-[-1.5rem] ~text-base/xl text-center px-8">
          <span className="text-white">{project.time}</span>
          {` — ${project.description}`}
        </h4>
      </div>

      <div className="flex-col w-[80vw] md:w-[60vw]">
        <div id="overview" ref={overview} className="flex-col gap-10 pt-14">
          <div className="fade-in-up">
            <Frame midClass="w-full min-w-[325px]">
              <div className="glare w-1/3" />
              <img
                src={project.image}
                alt="Sorting Visualizer"
                className="border border-slate-500 rounded-xl"
              />
            </Frame>
          </div>

          <div className="flex-col gap-4">
            <div className="flex justify-between">
              <SectionHeader text={"Overview"} style={"~text-base/xl"} />
              <div className="flex ~gap-1/4 items-center mr-4">
                {Object.entries(project.tech).map(([name, item], index) => (
                  <span key={index} className="text-white text-3xl" title={name}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row ~gap-4/12 ~text-base/lg ~leading-7/8">
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

        <div className="divider ~py-8/20" ref={problem} />

        <div id="problem" className="flex-col ~gap-12/20 ~pb-3/6">
          <SectionCard
            color="#f00"
            symbol={<FaTimes />}
            title="The Problem"
            text="Sorting Algorithms are Hard"
            className="w-full min-w-[325px]"
          />

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <SectionHeader text={"Problem"} style={"~text-xl/3xl"} />
            </div>
            <div className="flex-1 flex-col gap-6 ~text-base/lg ~leading-7/8">
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

        <div className="divider ~pt-6/14 ~pb-8/20" ref={priorities} />

        <div id="priorities" className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <SectionHeader text={"Priorities"} style={"~text-xl/3xl"} />
          </div>
          <div className="flex-1 flex-col gap-10">
            <div className="flex-col gap-6 ~text-base/lg ~leading-7/8">
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

        <div className="divider ~py-8/20" ref={challenges} />

        <div id="challenges" className="flex-col ~gap-12/20">
          <SectionCard
            color="#F9D10C"
            symbol={<FaExclamation />}
            title="The Main Challenge"
            text="Implementing the Algorithms"
            className="w-full min-w-[325px]"
          />

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <SectionHeader text={"Challenge"} style={"~text-xl/3xl"} />
            </div>
            <div className="flex-1 flex-col gap-6 ~text-base/lg ~leading-7/8">
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

        <div className="divider ~pt-8/20" />

        <div id="algorithms" ref={algorithms} className="flex-col items-center gap-12 pt-20">
          <SectionCard
            color="#7dd3fc"
            symbol={<FaCode />}
            title="The Algorithms"
            text="Meet the Algorithms"
            className="w-full min-w-[325px]"
          />

          <div className="flex-col gap-10">
            {/* lg and up: split into two rows */}
            <div className="hidden lg:flex gap-10">
              <SectionList items={project.algorithms!.slice(0, 3)} color={"#7dd3fc"} />
              <SectionList items={project.algorithms!.slice(3, 6)} color={"#7dd3fc"} />
            </div>
            <div className="hidden lg:block">
              <SectionList items={project.algorithms!.slice(6)} color={"#7dd3fc"} />
            </div>

            {/* below lg: all in one */}
            <div className="block lg:hidden">
              <SectionList items={project.algorithms!} color={"#7dd3fc"} />
            </div>
          </div>
        </div>

        <div className="divider ~py-8/20" />
        <div className="flex-col items-center gap-12">
          <h3 className="text-white hero-text-shadow ~text-2xl/4xl font-bold">
            Explore my Next Project
          </h3>
          <ProjectCard
            project="Turbo3D"
            props={{ midClass: "w-full min-w-[325px]" }}
          />
        </div>
      </div>
    </Page>
  );
};

export default SortingVizPage;
