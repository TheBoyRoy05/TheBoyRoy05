import { HiDownload } from "react-icons/hi";
import Page from "../Page/Page";
import Frame from "./Frame";
import resume from "/src/Assets/Images/Other/Resume.png";

const ResumePage = () => {
  const download = () => {
    const link = document.createElement("a");
    link.href = "/src/Assets/Images/Other/Resume.pdf";
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
      <Frame width={"clamp(350px, 50vw, 1000px)"}>
        <div className="glare w-1/3" />
        <div
          className="p-11 pb-0 border border-[--border-color] rounded-2xl frame-bg group hover:cursor-pointer"
          style={{ height: "clamp(400px, 65vw, 1200px)" }}
          onClick={download}
        >
          <div className="frame-content flex-col overflow-hidden">
            <div className="flex items-center justify-between ~text-lg/3xl font-bold text-white">
              <h3 className="~mb-2/4 text-shadow">{"Résumé"}</h3>
              <HiDownload />
            </div>
            <p className="~text-xs/base font-bold mb-[3vw]">
              <span className="text-white">{"Last Updated"}</span>
              {` — September 25, 2024`}
            </p>
            <img
              src={resume}
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
