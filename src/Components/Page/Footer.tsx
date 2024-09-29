import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import LastUpdated from "./LastUpdate";

const Footer = () => {
  const navigate = useNavigate();
  const btnClass =
    "btn rounded-full text-white text-lg w-12 p-0 border-none bg-[#202020] hover:bg-[#282828] glow";

  const handleMail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const mailtoLink = `mailto:issacroy05@gmail.com`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="border-t border-[--border-color] flex py-8 bg-[#181818]">
      <div className="flex flex-col flex-1 gap-3 items-center">
        <div className="text-[3rem] font-bold">
          <span className="text-white">{"Issac "}</span>
          <span className="text-[--hero-text]">{"Roy"}</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-sm font-medium">
          <span>{"© 2024 Issac Roy, All Rights Reserved"}</span>
          <LastUpdated />
        </div>
      </div>
      <div id="quick-link" className="flex flex-1 justify-center gap-x-20 border-x border-[--border-color]">
        <div className="flex flex-col gap-y-2 justify-center">
          <h4 className="text-lg font-bold mb-2">{"Info"}</h4>
          <a href="/about-me" className="hover:underline">{"About"}</a>
          <a href="/contact-me" className="hover:underline">{"Contact"}</a>
        </div>
        <div className="flex flex-col gap-y-2 justify-center">
          <h4 className="text-lg font-bold mb-2">{"Work"}</h4>
          <a href="/projects" className="hover:underline">{"Projects"}</a>
          <a href="/blog" className="hover:underline">{"Blog"}</a>
        </div>
      </div>
      <div
        id="social-media-links"
        className="flex flex-col flex-1 items-center justify-center gap-y-8"
      >
        <h4 className="text-lg font-bold">{"Social Links"}</h4>
        <div className="flex items-center w-[20vw] justify-evenly">
          <button onClick={handleMail} className={btnClass} title={"gmail"}>
            <SiGmail />
          </button>
          <button
            onClick={() => window.open("https://github.com/TheBoyRoy05/", "_blank")}
            className={btnClass}
            title={"Github"}
          >
            <FaGithub />
          </button>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/issacroy/", "_blank")}
            className={btnClass}
            title={"LinkedIn"}
          >
            <FaLinkedinIn />
          </button>
          <button onClick={() => navigate(`/resume`)} className={btnClass} title={"Resume"}>
            <IoDocumentText />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
