import Page from "../Page/Page";
import AboutMeItem from "./AboutMeItem";

const Emphasize = ({ text }: { text: string }) => {
  return <span className="italic text-shadow text-gray-200 gloock mr-1 tracking-wider">{` ${text} `}</span>;
};

const AboutMePage = () => {
  return (
    <Page>
      <div className="flex flex-col items-center">
        <h2>
          I'm passionate about
          <span className="text-gradient font-medium">{" making "}</span>
          things that improve lives
        </h2>
        <div className="flex flex-col gap-10 items-center mt-12">
          <AboutMeItem
            title={"This is my story."}
            image={"https://raw.githubusercontent.com/TheBoyRoy05/TheBoyRoy05/main/src/Assets/Images/Profile_Pic.jpg"}
            text={
              <>
                I'm currently studying Data Science at UCSD. I'm pursuing a Math Minor because I
                love <Emphasize text="analytical" /> thinking and solving challenging problems. I'm
                also pursuing a Cognitive Science Minor because I'm passionate about creating
                beautiful products that <Emphasize text="wow" /> people.
              </>
            }
            flip={false}
          />
          <AboutMeItem
            title={"I love tech"}
            image={"https://raw.githubusercontent.com/TheBoyRoy05/TheBoyRoy05/main/src/Assets/Images/Me_Guitar.png"}
            text={
              <>
                I've loved every aspect of engineering since I first joined robotics in middle
                school. Working hands-on excites me because of the
                <Emphasize text="limitless possibilities" /> within my palms. Here's a recent
                project of mine where I designed, assembled, and programmed a
                <Emphasize text="self-playing guitar" /> over a few weeks with some friends.
              </>
            }
            flip={true}
          />
          <AboutMeItem
            title={"This thing called programming?"}
            image={"https://raw.githubusercontent.com/TheBoyRoy05/TheBoyRoy05/main/src/Assets/Images/Me_Robot.jpeg"}
            text={
              <>
                During quarantine, I was incredibly bored and looking for new things to learn. I
                quickly came to love turning my <Emphasize text="ideas" /> into code. Long story
                short, it didn't take long before I became
                <Emphasize text="obsessed" /> with creating through code.
              </>
            }
            flip={false}
          />
          <AboutMeItem
            title={"In my spare time,"}
            image={"https://raw.githubusercontent.com/TheBoyRoy05/TheBoyRoy05/main/src/Assets/Images/Me_Basketball.png"}
            text={
              <>
                You'll find me working on side projects or learning new programming skills. Other
                than that, I enjoy playing guitar, basketball, hitting the gym, and
                gaming with my friends.
                <span className="block mt-5 text-white text-shadow indent-0">Thanks for stopping by!</span>
                {/* <Emphasize text="Issac" /> */}
                <img src="https://raw.githubusercontent.com/TheBoyRoy05/TheBoyRoy05/main/src/Assets/Images/Signature.png" className="w-[3vw] ml-2 mt-2 mb-[-1.5rem]" />
              </>
            }
            flip={true}
          />
        </div>
      </div>
    </Page>
  );
};

export default AboutMePage;
