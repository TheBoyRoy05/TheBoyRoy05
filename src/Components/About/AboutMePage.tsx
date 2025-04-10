import Emphasize from "../Other/Emphasize";
import Page from "../Page/Page";
import AboutMeItem from "./AboutMeItem";

import profile from "/src/Assets/Images/About/Profile_Pic.jpeg";
import guitar from "/src/Assets/Images/About/Me_Guitar.png";
import robot from "/src/Assets/Images/About/Me_Robot.jpeg";
import activity from "/src/Assets/Images/About/Me_Basketball.png";
import signature from "/src/Assets/Images/Other/Signature.png";

const AboutMePage = () => {
  return (
    <Page>
      <div className="flex-col items-center">
        <h2>
          I'm passionate about
          <span className="text-gradient font-medium">{" improving "}</span>
          lives
        </h2>
        <div className="flex-col gap-10 items-center mt-12 P-8 w-full">
          <AboutMeItem
            title={"This is my story."}
            image={profile}
            text={
              <>
                I'm currently studying Data Science at UCSD. I'm pursuing a Math Minor because I
                love <Emphasize text="analytical" /> thinking and solving challenging problems. I'm
                also pursuing a Cognitive Science Minor because I'm passionate about creating
                beautiful products that <Emphasize text="wow" /> people.
              </>
            }
          />
          <AboutMeItem
            title={"I love tech"}
            image={guitar}
            text={
              <>
                I've loved every aspect of engineering since I first joined robotics in middle
                school. Working hands-on excites me because of the
                <Emphasize text="limitless possibilities" /> within my palms. Here's a recent
                project of mine where I designed, assembled, and programmed a
                <Emphasize text="self-playing guitar" /> over a few weeks with some friends.
              </>
            }
            flip
          />
          <AboutMeItem
            title={"This thing called programming?"}
            image={robot}
            text={
              <>
                During quarantine, I was incredibly bored and looking for new things to learn. I
                quickly came to love turning my <Emphasize text="ideas" /> into code. Long story
                short, it didn't take long before I became
                <Emphasize text="obsessed" /> with creating through code.
              </>
            }
          />
          <AboutMeItem
            title={"In my spare time,"}
            image={activity}
            text={
              <>
                You'll find me working on side projects or learning new programming skills. Other
                than that, I enjoy playing guitar, basketball, hitting the gym, and gaming with my
                friends.
                <span className="block mt-5 text-white text-shadow indent-0">
                  Thanks for stopping by!
                </span>
                <img
                  src={signature}
                  className="~w-10/14 ml-2 mt-2 mb-[-1.5rem]"
                />
              </>
            }
            flip
          />
        </div>
      </div>
    </Page>
  );
};

export default AboutMePage;
