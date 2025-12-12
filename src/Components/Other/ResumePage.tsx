import { HiDownload } from "react-icons/hi";
import Page from "../Page/Page";
import Frame from "./Frame";
import sweResumeImage from "/src/Assets/Images/Other/Issac_Roy_SWE.jpg";
import dsResumeImage from "/src/Assets/Images/Other/Issac_Roy_DS.jpg";
import lastUpdatedPath from "/src/Assets/Resume/last_updated.txt";
import { useEffect, useState } from "react";

const ResumePage = () => {
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [resumeType, setResumeType] = useState<string>("SWE");
  const images = {
    SWE: sweResumeImage,
    DS: dsResumeImage,
  };

  const download = () => {
    const link = document.createElement("a");
    link.href = `/Issac_Roy_${resumeType}.pdf`;
    link.download = `Issac_Roy_${resumeType}.pdf`;
    link.click();
  };

  useEffect(() => {
    fetch(lastUpdatedPath)
      .then((response) => response.text())
      .then((text) => setLastUpdated(text.trim()))
      .catch((error) => console.error("Error loading last updated:", error));
  }, []);

  return (
    <Page className="flex flex-col items-center gap-10">
      <h2 className="mb-8">
        Let's
        <span className="text-gradient font-medium">{" make "}</span>
        something amazing
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-y-4 gap-10">
        <h3 className="text-white ~text-lg/2xl font-bold">Select Resume Type:</h3>
        <select
          className="select select-bordered text-white bg-transparent"
          onChange={(e) => setResumeType(e.target.value)}
          name="resumeType"
        >
          <option value="SWE" className="bg-black">Software Engineering</option>
          <option value="DS" className="bg-black">Data Science</option>
        </select>
      </div>
      <Frame midClass={"w-[clamp(325px,50vw,1000px)]"}>
        <div className="glare w-1/3" />
        <div
          className="~p-4/11 pb-0 border border-[--border-color] rounded-2xl frame-bg group hover:cursor-pointer"
          style={{ height: "clamp(400px, 65vw, 1200px)" }}
          onClick={download}
        >
          <div className="frame-content flex-col overflow-hidden">
            <div className="flex items-center justify-between ~text-lg/3xl font-bold text-white">
              <h3 className="~mb-2/4 text-shadow">{`${resumeType} Resume`}</h3>
              <HiDownload />
            </div>
            <p className="~text-xs/base font-bold mb-[3vw]">
              <span className="text-white">{"Last Updated"}</span>
              {` — ${lastUpdated}`}
            </p>
            <img
              src={images[resumeType as keyof typeof images]}
              alt={`${resumeType} Resume`}
              className="border border-slate-500 rounded-xl group-hover:mt-[-0.5rem] transition-all duration-300"
            />
          </div>
        </div>
      </Frame>
    </Page>
  );
};

export default ResumePage;
