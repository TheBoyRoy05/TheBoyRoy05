import Page from "./Page";

const AboutMePage = () => {
  return (
    <Page>
      <div className="flex flex-col items-center">
        <h2 className="text-[4rem] text-white hero-text-shadow mt-10 mb-6">
          I'm passionate about <span className="text-gradient font-medium">making</span> things that
          improve lives
        </h2>
        <div className="flex gap-40 items-center mt-20">
          <div>
            <div className="project-glare w-10/12 mx-auto" />
            <div className="flex flex-col items-center max-w-[500px] bg-[#181818] border border-[--border-color] rounded-3xl p-3">
              <img
                src="\src\Assets\Images\Profile_Picture.png"
                alt="Me"
                className="w-80 rounded-2xl border-2 border-[--border-color]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <h4 className="text-[2rem] text-white text-shadow font-bold">This is my story</h4>
            <p className="text-gray-400 text-xl font-light leading-9 w-[30vw]">
              I'm currently a student at UCSD studying Data Science. But I'm obsessed with
              everything tech.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default AboutMePage;
