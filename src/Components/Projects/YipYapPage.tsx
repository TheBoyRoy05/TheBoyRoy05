import { useRef } from "react";
import { projects } from "../../Utils/info";
import Frame from "../Other/Frame";
import Page from "../Page/Page";
import Emphasize from "../Other/Emphasize";

const YipYapPage = () => {
  const project = projects[projects.length - 2];
  const overview = useRef(null!);

  const contents = {
    overview,
  };

  return (
    <Page contents={contents}>
      <div className="flex flex-col items-center">
        <h2>
          Yip<span className="text-gradient font-medium">Yap</span>
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
      </div>
    </Page>
  );
};

export default YipYapPage;
