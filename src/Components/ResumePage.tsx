import { HiDownload } from "react-icons/hi";
import Frame from "./Frame";
import Page from "./Page/Page";

const ResumePage = () => {
  const download = () => {
    const link = document.createElement("a");
    link.href = "/src/Assets/Resume.pdf";
    link.download = "Issac_Roy_Resume.pdf";
    link.click();
  };

  return (
    <Page>
      <h2 className="mb-20">
        Let's
        <span className="text-gradient font-medium">{" make "}</span>
        something amazing
      </h2>
      <Frame width={"50vw"}>
        <div className="project-glare w-1/3" />
        <div
          className="max-h-[65.5vw] min-h-[65.5vw] p-11 pb-0 border border-[--border-color] rounded-2xl project-bg group hover:cursor-pointer"
          onClick={download}
        >
          <div className="project-content flex flex-col overflow-hidden">
            <div className="flex items-center justify-between text-[1.75rem] font-bold text-white">
              <h3 className="mb-2 text-shadow">{"Resume"}</h3>
              <HiDownload />
            </div>
            <p className="font-bold mb-14">
              <span className="text-white">{"Last Updated"}</span>
              {` — September 25, 2024`}
            </p>
            <img
              src={"https://raw.githubusercontent.com/TheBoyRoy05/TheBoyRoy05/main/src/Assets/Images/Resume.png"}
              alt={"Résumé"}
              className="border border-slate-500 rounded-xl group-hover:mt-[-0.5rem] transition-all duration-300"
            />
          </div>
        </div>
      </Frame>
    </Page>
  );
};

export default ResumePage;
