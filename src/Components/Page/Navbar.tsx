import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const btnClass =
    "btn mr-4 mt-4 overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none shadow-lg text-gray-200 text-shadow hover:bg-gray-500 hover:bg-opacity-30";

  return (
    <div className="flex fixed w-full z-10 items-center">
      <button className="text-[2rem] font-bold ml-6" onClick={() => navigate("/")}>
        <span className="text-white">{"Issac "}</span>
        <span className="text-[--hero-text]">{"Roy"}</span>
      </button>
      <div className="flex flex-1 justify-end">
        <button className={btnClass} onClick={() => navigate(`/`)}>
          <FaHome />
          {"Home"}
        </button>
        <button className={btnClass} onClick={() => navigate(`/about-me`)}>
          {"About Me"}
        </button>
        {/* <button className={btnClass} onClick={() => navigate(`/projects`)}>
          {"Projects"}
        </button>
        <button className={btnClass} onClick={() => navigate(`/blog`)}>
          {"Blog"}
        </button> */}
        <button className={btnClass} onClick={() => navigate(`/resume`)}>
          {"Resume"}
        </button>
        <button className={btnClass} onClick={() => navigate(`/contact-me`)}>
          {"Contact Me"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
