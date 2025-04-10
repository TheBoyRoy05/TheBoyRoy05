import Page from "../Page/Page";
import bear from "/src/Assets/Images/Other/Sleepy_Bear.png";

const UnderConstruction = () => {
  return (
    <Page>
      <h2>
        Coming <span className="text-gradient font-medium">Soon</span>
      </h2>
      <h4 className="text-white text-lg font-medium">
        {"Learn More About This Project On My "}
        <a href="/resume" className="underline">
          {"Resume"}
        </a>
      </h4>
      <img src={bear} alt="Under Construction" className="bear mt-24 w-[42vw]" />
    </Page>
  );
};

export default UnderConstruction;
