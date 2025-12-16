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

import teapot from "/src/Assets/Images/Projects/Turbo3D/teapot.png";
import grass from "/src/Assets/Images/Projects/Turbo3D/grass.png";

const Turbo3DPage = () => {
  const turbo3d = projects.Turbo3D;
  const overview = useRef(null!);
  const priorities = useRef(null!);
  const pipeline = useRef(null!);
  const math = useRef(null!);
  const lighting = useRef(null!);
  const challenges = useRef(null!);
  const future = useRef(null!);

  const contents = {
    overview,
    priorities,
    pipeline,
    "Math & Camera": math,
    "Lighting & Texturing": lighting,
    challenges,
    future,
  };

  return (
    <Page contents={contents} color={turbo3d.color + "80"}>
      <div className="flex-col items-center">
        <h2>
          Turbo <span className="text-gradient font-medium">3D</span>
        </h2>
        <h4 className="font-bold mt-[-1.5rem] ~text-base/xl text-center px-8 text-gray-300">
          <span className="text-white">{turbo3d.time}</span>
          {` — ${turbo3d.description}`}
        </h4>
      </div>

      <div className="flex-col w-[80vw] md:w-[60vw]">
        <div id="overview" ref={overview} className="flex-col gap-10 pt-14">
          <div className="fade-in-up">
            <Frame midClass={"w-full min-w-[325px]"}>
              <div className="glare w-1/3" />
              <img
                src={turbo3d.gif || turbo3d.image}
                alt="Turbo3D"
                className="border border-slate-500 rounded-xl"
              />
            </Frame>
          </div>

          <div className="flex-col gap-4">
            <div className="flex justify-between">
              <SectionHeader text={"Overview"} style={"~text-base/xl"} />
              <div className="flex ~gap-1/4 items-center mr-4">
                {Object.entries(turbo3d.tech).map(([name, item], index) => (
                  <span key={index} className="text-white ~text-lg/3xl" title={name}>
                    {item as React.ReactNode}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row ~gap-4/12 ~text-base/lg ~leading-7/8">
              <p className="flex-1">
                <span className="text-white">Q:</span> What do you get when you cross C++, Linear
                Algebra, and tears? <span className="text-white">A:</span> A slightly awful graphics
                engine that runs on the CPU! <span className="text-white">Why?</span> Because I like
                making things from scratch.
              </p>
              <p className="flex-1">
                This graphics engine includes revolutionary features like{" "}
                <Emphasize text="camera movement" />, <Emphasize text="lighting" />, and{" "}
                <Emphasize text="texturing" />. For a full list of features, see the{" "}
                <a
                  href="https://github.com/TheBoyRoy05/Turbo-3D"
                  target="_blank"
                  className="text-blue-400 underline"
                >
                  GitHub repository
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="divider ~pt-6/14 ~pb-8/20" ref={priorities} />

        <div id="priorities" className="flex-col gap-10 ~pb-6/14">
          <SectionHeader text={"Priorities"} style={"~text-xl/3xl"} />

          <div className="flex flex-col lg:flex-row-reverse gap-6">
            <div className="flex-1 flex-col justify-center gap-6 ~text-base/lg ~leading-7/8">
              <p>
                <span className="text-white">
                  Before starting implementation, I outlined clear priorities
                </span>{" "}
                to guide the development process. Modern graphics APIs like OpenGL and DirectX make
                it easy to create beautiful visuals, but they also hide a lot of the details.
              </p>
              <p>
                I wanted a project that would force me to understand every step of the rendering
                pipeline, from the <Emphasize text="math" /> behind transformations to the
                pixel-by-pixel drawing on screen.
              </p>
              <p>
                With a clear <Emphasize text="vision" /> in place, I could focus on building
                features that mattered most. These were the non-negotiable{" "}
                <Emphasize text="priorities" /> that shaped every decision and kept the engine both
                educational and maintainable:
              </p>
            </div>
            <SectionList items={turbo3d.priorities!} color={"#7DFCE5"} className="flex-1" />
          </div>
        </div>

        <div className="divider" ref={pipeline} />

        <div id="pipeline" className="flex-col gap-10 ~pt-6/14">
          <SectionHeader text={"Rendering Pipeline"} style={"~text-xl/3xl"} />

          <Frame midClass="w-full min-w-[325px]">
            <div className="glare w-1/3" />
            <img
              src={teapot}
              alt="Teapot rendered in Turbo3D"
              className="border border-[--border-color] rounded-xl"
            />
          </Frame>

          <div className="flex flex-col lg:flex-row ~gap-4/12 ~text-base/lg ~leading-7/8">
            <p className="flex-1">
              <span className="text-white">The rendering pipeline transforms 3D models</span> from
              their original coordinates all the way to pixels on your screen. Each stage performs
              specific transformations and calculations, building up the final image step by step.
            </p>
            <p className="flex-1">
              Understanding this pipeline is crucial for graphics programming. From loading vertices
              from OBJ files to calculating lighting and sampling textures, every stage requires{" "}
              <Emphasize text="careful attention" /> to detail and a solid grasp of linear algebra.
            </p>
          </div>

          <div className="flex-col gap-10">
            {/* lg and up: split into two columns */}
            <div className="hidden lg:flex gap-10">
              <SectionList items={turbo3d.pipeline!.slice(0, 3)} color={"#7DFCE5"} />
              <SectionList items={turbo3d.pipeline!.slice(3, 6)} color={"#7DFCE5"} />
            </div>

            {/* below lg: all in one */}
            <div className="block lg:hidden">
              <SectionList items={turbo3d.pipeline!} color={"#7DFCE5"} />
            </div>
          </div>
        </div>

        <div className="divider ~pt-8/20" ref={math} />

        <div id="math_camera" className="flex-col gap-10 ~pt-6/14 ~pb-8/20">
          <SectionHeader text={"Math & Camera"} style={"~text-xl/3xl"} />

          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center h-fit">
            <div className="flex-1 flex-col gap-6 ~text-base/lg ~leading-7/8">
              <p>
                <span className="text-white">
                  Linear algebra is the foundation of 3D graphics programming.
                </span>{" "}
                Every transformation, from rotating a model to positioning the camera, relies on
                vector and matrix operations. I implemented a custom math library to handle all
                these calculations, giving me full control over the rendering process.
              </p>
              <p>
                The camera system supports <Emphasize text="FPS-style" /> movement and navigation
                with mouse controls. Implementing smooth camera controls required careful handling
                of input and coordinate system transformations.
              </p>
            </div>
            <SectionList items={turbo3d.math!} color={"#7DFCE5"} className="flex-1" />
          </div>
        </div>

        <div className="divider" ref={lighting} />

        <div id="lighting" className="flex-col gap-10 ~pt-6/14">
          <SectionHeader text={"Lighting & Texturing"} style={"~text-xl/3xl"} />

          <Frame midClass="w-full min-w-[325px]">
            <div className="glare w-1/3" />
            <img
              src={grass}
              alt="Grass texture rendered in Turbo3D"
              className="border border-[--border-color] rounded-xl"
            />
          </Frame>

          <div className="flex flex-col lg:flex-row gap-6 ~pb-8/20">
            <div className="flex-1 flex-col justify-center gap-6 ~text-base/lg ~leading-7/8">
              <p>
                <span className="text-white">Lighting and texturing bring 3D scenes to life.</span>{" "}
                I implemented both directional and point lights, calculating diffuse shading based
                on surface normals. The lighting model uses <Emphasize text="Lambertian shading" />,
                which creates realistic depth and dimension.
              </p>
              <p>
                Texture mapping was one of the more challenging features to implement. It requires
                careful interpolation of UV coordinates across triangle surfaces and proper texture
                sampling. The result is <Emphasize text="detailed" /> and{" "}
                <Emphasize text="visually appealing" /> surfaces that make models look much more
                realistic.
              </p>
            </div>
            <SectionList items={turbo3d.lighting!} color={"#7DFCE5"} className="flex-1" />
          </div>
        </div>

        <div className="divider" ref={challenges} />

        <div id="challenges" className="flex-col ~gap-12/20 ~pt-8/20">
          <SectionCard
            color="#F9D10C"
            symbol={<FaExclamation />}
            title="The Main Challenges"
            text="Debugging Without Visual Tools"
            className="w-full min-w-[325px]"
          />

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <SectionHeader text={"Challenges"} style={"~text-xl/3xl"} />
            </div>
            <div className="flex-1 flex-col gap-6 ~text-base/lg ~leading-7/8">
              <p>
                <span className="text-white">
                  Building a graphics engine from scratch comes with unique challenges.
                </span>{" "}
                One of the hardest parts was debugging matrix transformations. When a model appears
                upside-down or in the wrong position, it's not immediately obvious where the bug is.
                I spent many hours <Emphasize text="tracing through matrix multiplications" /> and
                checking coordinate system conversions.
              </p>
              <p>
                Implementing texture mapping required learning about{" "}
                <Emphasize text="barycentric coordinates" /> and proper UV interpolation. Getting
                textures to display correctly without distortion or artifacts was a process of trial
                and error and I ended up spending many hours on it, but the end result was worth it.
              </p>
              <p>
                I tried implementing <Emphasize text="multithreading" /> on the CPU to somewhat
                simulate GPU performance by parallelizing the rendering work across multiple cores.
                However, it only <Emphasize text="marginally improved" /> rendering speed. In the
                future, I would like to add GPU rendering using OpenGL or Vulkan to improve
                performance.
              </p>
            </div>
          </div>
        </div>

        <div className="divider ~pt-8/20" ref={future} />

        <div id="future" className="flex-col gap-10 ~pt-8/20">
          <SectionHeader text={"Future"} style={"~text-xl/3xl"} />

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 flex-col justify-center gap-6 ~text-base/lg ~leading-7/8">
              <p>
                <span className="text-white">There's so much more I'd like to add to Turbo3D.</span>{" "}
                The most obvious next step would be moving to GPU rendering using OpenGL or Vulkan,
                which would unlock <Emphasize text="realistic performance" /> and enable more
                complex scenes.
              </p>
              <p>
                I'd also love to add more advanced lighting features like{" "}
                <Emphasize text="shadows" />, <Emphasize text="reflections" />, and physically-based
                rendering. A scene graph system would make it easier to organize and render complex
                scenes, and physics integration would add interactivity.
              </p>
            </div>
            <SectionList items={turbo3d.future!} color={"#7DFCE5"} className="flex-1" />
          </div>
        </div>

        <div className="divider ~py-8/20" />
        <div className="flex-col items-center gap-12">
          <h3 className="text-white hero-text-shadow ~text-2xl/4xl font-bold">
            Explore my Last Project
          </h3>
          <ProjectCard project="YipYap" />
        </div>
      </div>
    </Page>
  );
};

export default Turbo3DPage;
