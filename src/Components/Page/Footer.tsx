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
    <div className="border-t border-[--border-color] bg-[#181818] py-8 flex flex-col md:flex-row items-center md:items-start gap-y-8 md:gap-y-0 md:gap-x-8">
      {/* Logo and Copyright */}
      <div className="flex flex-col items-center flex-1 gap-3 text-center">
        <div className="text-[2.5rem] md:text-[3rem] font-bold">
          <span className="text-white">{"Issac "}</span>
          <span className="text-[--hero-text]">{"Roy"}</span>
        </div>
        <div className="flex flex-col gap-1 text-sm font-medium text-white">
          <span>{"© 2024 Issac Roy, All Rights Reserved"}</span>
          <LastUpdated />
        </div>
      </div>

      {/* Quick Links */}
      <div
        id="quick-link"
        className="w-full flex justify-center items-center gap-8 px-4 py-4 border-y md:border-y-0 md:border-x border-[--border-color] flex-1 text-center"
      >
        <div className="flex flex-col gap-y-2">
          <h4 className="text-lg font-bold text-white mb-2">{"Info"}</h4>
          <a href="/about-me" className="hover:underline">About</a>
          <a href="/contact-me" className="hover:underline">Contact</a>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-lg font-bold text-white mb-2">{"Work"}</h4>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/blog" className="hover:underline">Blog</a>
        </div>
      </div>

      {/* Social Links */}
      <div
        id="social-media-links"
        className="flex flex-col items-center flex-1 gap-y-4 md:mt-0"
      >
        <h4 className="text-lg font-bold text-white">{"Social Links"}</h4>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button onClick={handleMail} className={btnClass} title="gmail">
            <SiGmail />
          </button>
          <button
            onClick={() => window.open("https://github.com/TheBoyRoy05/", "_blank")}
            className={btnClass}
            title="Github"
          >
            <FaGithub />
          </button>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/issacroy/", "_blank")}
            className={btnClass}
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </button>
          <button
            onClick={() => navigate("/resume")}
            className={btnClass}
            title="Resume"
          >
            <IoDocumentText />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
