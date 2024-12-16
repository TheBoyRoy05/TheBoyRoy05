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
    <Page contents={contents} color="#00639b80">
      <div className="flex-col items-center">
        <h2>
          Yip<span className="text-gradient font-medium">Yap</span>
        </h2>
        <h4 className="font-bold mt-[-1.5rem] text-xl">
          <span className="text-white">{project.time}</span>
          {` — ${project.description}`}
        </h4>
      </div>

      <div className="flex-col w-[60vw]">
        <div id="overview" ref={overview} className="flex-col gap-10 pt-14">
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

          <div className="flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-[10px] h-[10px] bg-white rounded-full white-glow" />
              <h3 className="text-white text-shadow font-bold text-xl">Overview</h3>
            </div>
            <div className="flex gap-12 text-lg leading-8">
              <p className="flex-1">
                <span className="text-white">Unleash your inner Yapper with YipYap</span> - the
                ultimate chat app designed for those who love to talk! Whether you're a Yapper who
                loves sharing stories, brainstorming ideas, or just staying connected, YipYap makes
                every conversation <Emphasize text="vibrant" /> and <Emphasize text="engaging" />.
              </p>
              <p className="flex-1">
                With smart features like <Emphasize text="AI-driven" /> topic suggestions,{" "}
                <Emphasize text="seamless" /> group chats, and a <Emphasize text="sleak" />,
                user-friendly design, YipYap keeps the conversation flowing. Start yapping today by{" "}
                <a
                  href="https://yipyap.onrender.com/signup"
                  target="_blank"
                  className="text-blue-400 underline"
                >
                  creating an account
                </a>{" "}
                and join the YipYap community!
              </p>
            </div>
          </div>
        </div>

        <div className="divider py-20" />

        
      </div>
    </Page>
  );
};

export default YipYapPage;
