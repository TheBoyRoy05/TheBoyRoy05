import { SiGmail } from "react-icons/si";
import Page from "../Page/Page";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

const ContactMePage = () => {
  const navigate = useNavigate();
  const btnClass =
    "btn rounded-xl text-white w-[20vw] text-lg border-none bg-[#202020] hover:bg-[#282828]";

  const handleMail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const mailtoLink = `mailto:issacroy05@gmail.com`;
    window.location.href = mailtoLink;
  };

  return (
    <Page>
      <h2 className="mb-20">
        Let's
        <span className="text-gradient font-medium">{" make "}</span>
        something amazing
      </h2>
      <div className="flex px-[20vw]">
        <ContactForm />
        <div className="border-r border-[--border-color] mb-[-2rem] mx-16" />
        <div className="flex flex-col items-center flex-grow gap-10">
          <h3 className="text-white text-shadow text-[2rem] font-bold">Socials</h3>
          <div className="flex flex-col gap-6">
            <button onClick={handleMail} className={btnClass}>
              <SiGmail />
              issacroy05@gmail.com
            </button>
            <button
              onClick={() => window.open("https://github.com/TheBoyRoy05/", "_blank")}
              className={btnClass}
            >
              <FaGithub />
              Github
            </button>
            <button
              onClick={() => window.open("https://www.linkedin.com/in/issacroy/", "_blank")}
              className={btnClass}
            >
              <FaLinkedin />
              LinkedIn
            </button>
            <button onClick={() => navigate("/resume")} className={btnClass}>
              <IoDocumentText />
              Resume
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ContactMePage;
