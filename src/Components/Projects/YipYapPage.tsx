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
  const yipyap = projects[projects.length - 2];
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
    <Page contents={contents} color="#00639b80">
      <div className="flex-col items-center">
        <h2>
          Yip<span className="text-gradient font-medium">Yap</span>
        </h2>
        <h4 className="font-bold mt-[-1.5rem] text-xl">
          <span className="text-white">{yipyap.time}</span>
          {` — ${yipyap.description}`}
        </h4>
      </div>

      <div className="flex-col w-[60vw]">
        <div id="overview" ref={overview} className="flex-col gap-10 pt-14">
          <div className="fade-in-up">
            <Frame width={"60vw"}>
              <div className="glare w-1/3" />
              <img
                src={yipyap.image}
                alt={yipyap.name}
                className="border border-slate-500 rounded-xl"
              />
            </Frame>
          </div>

          <div className="flex-col gap-4">
            <div className="flex justify-between">
              <SectionHeader text={"Overview"} style={"text-xl"} />
              <div className="flex gap-4 items-center mr-4">
                {Object.entries(yipyap.tech).map(([name, item], index) => (
                  <span key={index} className="text-white text-3xl" title={name}>
                    {item}
                  </span>
                ))}
              </div>
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

        <div className="divider pt-10 pb-10" />

        <div id="design" className="flex-col gap-10 pt-10" ref={design}>
          <SectionHeader text={"Frontend Design"} style={"text-3xl"} />

          <div className="flex gap-12">
            <Frame width="30vw">
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

            <div className="flex-1 flex-col justify-around">
              <div className="flex-col gap-4 text-lg leading-8">
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
              <SectionList items={yipyap.design!} color={"#7dd3fc"} />
            </div>
          </div>
        </div>

        <div className="divider pt-20" />

        <div id="API_Backend" className="flex-col gap-10 pt-20" ref={backend}>
          <SectionHeader text={"API & Backend"} style={"text-3xl"} />

          <div className="flex gap-12">
            <div className="flex-1 flex-col justify-around">
              <p className="text-lg leading-8">
                <span className="text-white">
                  A scalable API is the backbone of any successful application.
                </span>{" "}
                I built a custom API using <Emphasize text="express.js" /> in order to provide a
                secure and reliable platform for YipYap to function.
              </p>
              <SectionList items={yipyap.api!} color={"#7dd3fc"} />
            </div>

            <Frame width="30vw">
              <div className="glare w-1/3" />
              <div className="h-[70vh] bg-[#1E1E1E] flex items-center border border-[--border-color] rounded-xl">
                <img src={apiViz} alt="API Design" />
              </div>
            </Frame>
          </div>
        </div>

        <div className="divider pt-20 pb-16" />

        <div id="database" className="flex-col gap-10 pt-14" ref={database}>
          <SectionHeader text={"Database"} style={"text-3xl"} />

          <Frame width="60vw">
            <div className="glare w-1/3" />
            <img
              src={databaseViz}
              alt="Backend Design"
              className="border border-[--border-color] rounded-xl"
            />
          </Frame>

          <div className="flex gap-12 text-lg leading-8">
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

        <div className="divider pt-20" />

        <div id="challenges" className="flex-col gap-20 pt-20" ref={challenges}>
          <SectionCard
            width="60vw"
            color="#F9D10C"
            symbol={<FaExclamation />}
            title="The Main Challenges"
            text="Building an App is Hard"
          />

          <div className="flex gap-4">
            <div className="flex-1">
              <SectionHeader text={"Challenges"} style={"text-3xl"} />
            </div>
            <div className="flex-1 flex-col gap-6 text-lg leading-8">
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

        <div className="divider pt-20" />

        <div id="Future" className="flex-col gap-10 pt-20" ref={future}>
          <SectionHeader text={"Future"} style={"text-3xl"} />

          <Frame width="60vw">
            <div className="glare w-1/3" />
            <img src={chat} alt="Chat Page" className="border border-[--border-color] rounded-xl" />
          </Frame>

          <div className="flex gap-12 text-lg leading-8">
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

        <div className="divider py-20" />
      </div>

      <div className="flex-col items-center gap-12">
        <h3 className="text-white hero-text-shadow text-4xl font-bold">Explore my Last Project</h3>
        <ProjectCard {...projects[projects.length - 1]} width={"60vw"} />
      </div>
    </Page>
  );
};

export default YipYapPage;
