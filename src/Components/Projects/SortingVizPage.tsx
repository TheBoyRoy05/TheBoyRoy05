import { FaArrowRight } from "react-icons/fa6";
import { projects } from "../../Utils/info";
import Frame from "../Other/Frame";
import Page from "../Page/Page";

const SortingVizPage = () => {
  return (
    <Page>
      <Frame width={"72.5vw"}>
        <img
          src={projects[projects.length - 1].image}
          alt={projects[projects.length - 1].name}
          className="border border-slate-500 rounded-xl group-hover:mt-[-0.5rem] transition-all duration-300"
        />
      </Frame>
    </Page>
  );
};

export default SortingVizPage;
