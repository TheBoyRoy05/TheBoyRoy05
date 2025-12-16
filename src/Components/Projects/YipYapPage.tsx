import { useRef } from "react";
import { projects } from "../../Utils/info";
import Frame from "../Other/Frame";
import Page from "../Page/Page";
import Emphasize from "../Other/Emphasize";
import SectionList from "../Other/Section/SectionList";
import SectionHeader from "../Other/Section/SectionHeader";
import SectionCard from "../Other/Section/SectionCard";
import { FaExclamation } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";

import home from "/src/Assets/Images/Projects/YipYap/HomePage.png";
import friends from "/src/Assets/Images/Projects/YipYap/FriendsPage.png";
import apiViz from "/src/Assets/Images/Projects/YipYap/APIViz.png";
import databaseViz from "/src/Assets/Images/Projects/YipYap/DatabaseViz.png";
import chat from "/src/Assets/Images/Projects/YipYap/ChatPage.png";

const YipYapPage = () => {
  const yipyap = projects.YipYap;
  const overview = useRef(null!);
  const design = useRef(null!);
  const backend = useRef(null!);
  const database = useRef(null!);
  const challenges = useRef(null!);
  const future = useRef(null!);

  const contents = {
    overview,
    "Frontend Design": design,
    "API & Backend": backend,
    database,
    challenges,
    future,
  };

  return (
    <Page contents={contents} color={yipyap.color + "c0"}>
      <div className="flex-col items-center">
        <h2>
          Yip<span className="text-gradient font-medium">Yap</span>
        </h2>
        <h4 className="font-bold mt-[-1.5rem] ~text-base/xl text-center px-8">
          <span className="text-white">{yipyap.time}</span>
          {` — ${yipyap.description}`}
        </h4>
      </div>

      <div className="flex-col w-[80vw] md:w-[60vw]">
        <div id="overview" ref={overview} className="flex-col gap-10 pt-14">
          <div className="fade-in-up">
            <Frame midClass={"w-full min-w-[325px]"}>
              <div className="glare w-1/3" />
              <img src={yipyap.image} alt="YipYap" className="border border-slate-500 rounded-xl" />
            </Frame>
          </div>

          <div className="flex-col gap-4">
            <div className="flex justify-between">
              <SectionHeader text={"Overview"} style={"~text-base/xl"} />
              <div className="flex ~gap-1/4 items-center mr-4">
                {Object.entries(yipyap.tech).map(([name, item], index) => (
                  <span key={index} className="text-white ~text-lg/3xl" title={name}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row ~gap-4/12 ~text-base/lg ~leading-7/8">
              <p className="flex-1">
                <span className="text-white">Unleash your inner Yapper with YipYap</span> - the
                ultimate chat app designed for those who love to talk! Whether you're a Yapper who
                loves sharing stories, brainstorming ideas, or just staying connected, YipYap makes
                every conversation <Emphasize text="vibrant" /> and <Emphasize text="engaging" />.
              </p>
              <p className="flex-1">
                With smart features like <Emphasize text="AI-driven" /> topic suggestions,{" "}
                <Emphasize text="seamless" /> communication, and a <Emphasize text="sleek" />,
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

        <div className="divider ~py-4/10" />

        <div id="design" className="flex-col gap-10 ~pt-4/10" ref={design}>
          <SectionHeader text={"Frontend Design"} style={"~text-xl/3xl"} />

          <div className="flex flex-col items-center gap-12">
            <div className="flex-1">
              <Frame midClass="w-full min-w-[325px]">
                <div className="glare w-1/3" />
                <div className="flex flex-col gap-6">
                  <img
                    src={home}
                    alt="Home Page Design"
                    className="border border-[--border-color] rounded-xl"
                  />
                  <img
                    src={friends}
                    alt="Friends Page Design"
                    className="border border-[--border-color] rounded-xl"
                  />
                </div>
              </Frame>
            </div>

            <div className="flex-1 flex-col lg:flex-row justify-around items-center gap-6">
              <div className="flex-col ~gap-1/4 ~text-base/lg ~leading-7/8 flex-[3]">
                <p>
                  <span className="text-white">To design YipYap,</span> my girlfriend and I used{" "}
                  <Emphasize text="Figma" /> to sketch out ideas and iterate on them until we had a
                  design that was both functional and visually appealing.
                </p>
                <p>
                  The next step was to start building the frontend. I used{" "}
                  <Emphasize text="React.js" /> to build the user interface and{" "}
                  <Emphasize text="Zustand" /> to manage the state of the application.
                </p>
                <p>
                  Here are some priorities and goals I kept in mind while designing YipYap to ensure
                  that it was user-friendly, even in early stages.
                </p>
              </div>
              <SectionList items={yipyap.design!} color={"#7dd3fc"} className="flex-[4]" />
            </div>
          </div>
        </div>

        <div className="divider ~pt-8/20" />

        <div id="API_Backend" className="flex-col gap-10 pt-20" ref={backend}>
          <SectionHeader text={"API & Backend"} style={"~text-xl/3xl"} />

          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center h-fit">
            {/* <div className="flex-1 flex-col justify-around gap-6">
              <p className="~text-base/lg ~leading-7/8">
                <span className="text-white">
                  A scalable API is the backbone of any successful application.
                </span>{" "}
                I built a custom API using <Emphasize text="express.js" /> in order to provide a
                secure and reliable platform for YipYap to function.
              </p>
            </div> */}
            <SectionList items={yipyap.api!} color={"#7dd3fc"} className="flex-1" />

            <Frame midClass="w-full min-w-[325px] lg:h-[500px]" topClass="flex-1">
              <div className="glare w-1/3" />
              <div className="w-full h-[clamp(250px,30vw,1000px)] lg:h-full bg-[#1E1E1E] flex items-center justify-center border border-[--border-color] rounded-xl">
                <img src={apiViz} alt="API Design" className="rounded-xl h-full lg:h-fit" />
              </div>
            </Frame>
          </div>
        </div>

        <div className="divider ~pt-8/20 ~pb-6/16" />

        <div id="database" className="flex-col gap-10 ~pt-6/14" ref={database}>
          <SectionHeader text={"Database"} style={"~text-xl/3xl"} />

          <Frame midClass="w-full min-w-[325px]">
            <div className="glare w-1/3" />
            <img
              src={databaseViz}
              alt="Backend Design"
              className="border border-[--border-color] rounded-xl"
            />
          </Frame>

          <div className="flex flex-col lg:flex-row ~gap-4/12 ~text-base/lg ~leading-7/8">
            <p className="flex-1">
              <span className="text-white">To create YipYap,</span> I decided to use{" "}
              <Emphasize text="MongoDB" /> a NoSQL, document-based database. The JSON format allows
              for more <Emphasize text="flexible" /> data storage than what is possible with a SQL
              database. This choice also ensures <Emphasize text="scalability" /> as the app grows
              in complexity and users.
            </p>
            <p className="flex-1">
              Currently, YipYap uses <Emphasize text="four" /> collections of documents to store
              information about users, messages, conversations, and friend requests with their
              relationships drawn above. These collections are optimized for{" "}
              <Emphasize text="fast" /> retrieval and
              <Emphasize text="smooth" /> interaction handling.
            </p>
          </div>
        </div>

        <div className="divider ~pt-8/20" />

        <div id="challenges" className="flex-col ~gap-12/20 ~pt-8/20" ref={challenges}>
          <SectionCard
            color="#F9D10C"
            symbol={<FaExclamation />}
            title="The Main Challenges"
            text="Building an App is Hard"
            className="w-full min-w-[325px]"
          />

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <SectionHeader text={"Challenges"} style={"~text-xl/3xl"} />
            </div>
            <div className="flex-1 flex-col gap-6 ~text-base/lg ~leading-7/8">
              <p>
                <span className="text-white">When I started working on YipYap,</span> I only had a
                vague idea of what I wanted to do with the app. As it was my first app, I was
                surprised at the amount of time it takes to <Emphasize text="brainstorm" /> good
                ideas.
              </p>
              <p>
                One main challenge was creating a <Emphasize text="scalable" /> app structure. I had
                to frequently <Emphasize text="refactor" /> the database schemas, API, and code
                whenever I worked on a new feature.
              </p>
              <p>
                This isn't ideal since it took many hours away from building the feature itself. In
                hindsight, I should have spent more time on the designing and planning stage to
                <Emphasize text="minimize" /> refactoring.
              </p>
              <p>
                Other challenges included learning how to use new technologies, such as{" "}
                <Emphasize text="express.js" /> for the backend and <Emphasize text="socket.io" />{" "}
                to set up instant communication, as well as non-technical challenges such as
                <Emphasize text="balancing" /> traditional chat app design while keeping YipYap{" "}
                <Emphasize text="unique" />.
              </p>
            </div>
          </div>
        </div>

        <div className="divider ~pt-8/20" />

        <div id="Future" className="flex-col gap-10 ~pt-8/20" ref={future}>
          <SectionHeader text={"Future"} style={"~text-xl/3xl"} />

          <Frame midClass="w-full min-w-[325px]">
            <div className="glare w-1/3" />
            <img src={chat} alt="Chat Page" className="border border-[--border-color] rounded-xl" />
          </Frame>

          <div className="flex flex-col lg:flex-row ~gap-4/12 ~text-base/lg ~leading-7/8">
            <p className="flex-1">
              <span className="text-white">
                There's many ways that YipYap could evolve from here.
              </span>{" "}
              I want to focus on more Yapper features. Currently, the main feature is the{" "}
              <Emphasize text="AI suggestions" />, which could still be improved, as you can see
              above.
            </p>
            <p className="flex-1">
              Although there are many other features that I'd like to implement, I plan on learning
              from my mistakes, so I'll spend more time <Emphasize text="designing" /> before
              implementing. I'm excited to see where this goes!
            </p>
          </div>
        </div>

        <div className="divider ~py-8/20" />
        <div className="flex-col items-center gap-12">
          <h3 className="text-white hero-text-shadow ~text-2xl/4xl font-bold">
            Explore my Last Project
          </h3>
          <ProjectCard project="Sorting Visualizer" />
        </div>
      </div>
    </Page>
  );
};

export default YipYapPage;
