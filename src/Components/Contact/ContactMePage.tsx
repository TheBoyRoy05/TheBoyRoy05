import { SiGmail } from "react-icons/si";
import Page from "../Page/Page";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

const ContactMePage = () => {
  const navigate = useNavigate();
  const btnClass =
    "btn rounded-xl text-white ~text-base/lg border-none bg-[#202020] hover:bg-[#282828] px-20 flex flex-nowrap";

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
      <div className="flex flex-col md:flex-row justify-center ~px-10/96 md:px-10 gap-8 w-full">
        <ContactForm />
        <div className="border-r border-[--border-color] md:-mb-8 ~mx-4/16" />
        <div className="flex-col items-center gap-10">
          <h3 className="text-white text-shadow ~text-2xl/4xl font-bold">Socials</h3>
          <div className="flex-col gap-6">
            <button onClick={handleMail} className={btnClass}>
              <SiGmail />
              Email
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
