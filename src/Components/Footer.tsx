import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const btnClass =
    "btn rounded-full text-white text-lg w-12 p-0 border-none bg-[#202020] hover:bg-[#282828] glow";

  return (
    <div className="border-t border-[--border-color] mt-[5vw] flex py-8 bg-[#181818]">
      <div className="flex flex-col flex-1 gap-6 py-4 items-center">
        <div className="text-[3rem] font-bold">
          <span className="text-white">{"Issac "}</span>
          <span className="text-[--hero-text]">{"Roy"}</span>
        </div>
        <span className="">{"© 2024 Issac Roy, All Rights Reserved"}</span>
      </div>
      <div
        id="quick-link"
        className="flex gap-x-20 border-x border-[--border-color] px-32"
      >
        <div className="flex flex-col gap-y-2 justify-center">
          <h4 className="text-lg font-bold mb-2">{"Info"}</h4>
          <a href="/about-me">{"About"}</a>
          <a href="/contact-me">{"Contact"}</a>
        </div>
        <div className="flex flex-col gap-y-2 justify-center">
          <h4 className="text-lg font-bold mb-2">{"Work"}</h4>
          <a href="/projects">{"Projects"}</a>
          <a href="/blog">{"Blog"}</a>
        </div>
      </div>
      <div
        id="social-media-links"
        className="flex flex-col flex-1 items-center justify-center gap-y-8"
      >
        <h4 className="text-lg font-bold">{"Social Links"}</h4>
        <div className="flex items-center justify-center gap-10">
          <button
            onClick={() => window.open("", "_blank")}
            className={btnClass}
          >
            <SiGmail />
          </button>
          <button
            onClick={() =>
              window.open("https://github.com/TheBoyRoy05/", "_blank")
            }
            className={btnClass}
          >
            <FaGithub />
          </button>
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/issacroy/", "_blank")
            }
            className={btnClass}
          >
            <FaLinkedinIn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
