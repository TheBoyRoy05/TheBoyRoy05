import { HiDownload } from "react-icons/hi";
import Page from "../Page/Page";
import Frame from "./Frame";
import resume from "/src/Assets/Images/Other/Resume.jpg";
import lastUpdatedPath from "/src/Assets/Resume/last_updated.txt";
import { useEffect, useState } from "react";

const ResumePage = () => {
  const [lastUpdated, setLastUpdated] = useState<string>("");
  
  const download = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Issac_Roy_Resume.pdf";
    link.click();
  };

  useEffect(() => {
    fetch(lastUpdatedPath)
      .then(response => response.text())
      .then(text => setLastUpdated(text.trim()))
      .catch(error => console.error("Error loading last updated:", error));
  }, []);

  return (
    <Page>
      <h2 className="mb-20">
        Let's
        <span className="text-gradient font-medium">{" make "}</span>
        something amazing
      </h2>
      <Frame midClass={"w-[clamp(325px,50vw,1000px)]"}>
        <div className="glare w-1/3" />
        <div
          className="~p-4/11 pb-0 border border-[--border-color] rounded-2xl frame-bg group hover:cursor-pointer"
          style={{ height: "clamp(400px, 65vw, 1200px)" }}
          onClick={download}
        >
          <div className="frame-content flex-col overflow-hidden">
            <div className="flex items-center justify-between ~text-lg/3xl font-bold text-white">
              <h3 className="~mb-2/4 text-shadow">{"Resume"}</h3>
              <HiDownload />
            </div>
            <p className="~text-xs/base font-bold mb-[3vw]">
              <span className="text-white">{"Last Updated"}</span>
              {` — ${lastUpdated}`}
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
