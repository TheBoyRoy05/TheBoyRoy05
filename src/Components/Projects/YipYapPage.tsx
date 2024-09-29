import Page from "../Page/Page";

const YipYapPage = () => {
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
      <img
        src="https://raw.githubusercontent.com/TheBoyRoy05/TheBoyRoy05/main/src/Assets/Images/Sleepy_Bear.png"
        alt="Under Construction"
        className="bear mt-24 w-[42vw]"
      />
    </Page>
  );
};

export default YipYapPage;
