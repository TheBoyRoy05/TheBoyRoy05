import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const btnClass =
    "btn mt-2 md:mt-0 md:ml-4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none shadow-lg text-gray-200 text-shadow hover:bg-gray-500 hover:bg-opacity-30";

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-transparent flex items-center justify-between p-4">
      <button className="text-[2rem] font-bold ml-2" onClick={() => navigate("/")}>
        <span className="text-gray-200">{"Issac "}</span>
        <span className="text-[--hero-text]">{"Roy"}</span>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <button className={btnClass} onClick={() => navigate(`/`)}>
          <FaHome className="inline mr-1" />
          {"Home"}
        </button>
        <button className={btnClass} onClick={() => navigate(`/about-me`)}>
          {"About Me"}
        </button>
        <button className={btnClass} onClick={() => navigate(`/resume`)}>
          {"Resume"}
        </button>
        <button className={btnClass} onClick={() => navigate(`/contact-me`)}>
          {"Contact Me"}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden mr-2 z-30">
        <button onClick={() => setIsOpen(true)}>
          <FaBars size={24} className="text-white" />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-20"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-full h-full bg-black bg-opacity-40" />
        </div>
      )}

      {/* Animated Drawer */}
      <div
        className={clsx(
          "fixed top-0 right-0 w-1/2 h-full bg-gray-900 bg-opacity-95 backdrop-blur-md z-30 p-4 flex flex-col items-start transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button className="self-end mb-4" onClick={() => setIsOpen(false)}>
          <FaTimes size={24} className="text-white" />
        </button>
        <button className={btnClass + " w-full"} onClick={() => { navigate(`/`); setIsOpen(false); }}>
          <FaHome className="inline mr-1" />
          {"Home"}
        </button>
        <button className={btnClass + " w-full"} onClick={() => { navigate(`/about-me`); setIsOpen(false); }}>
          {"About Me"}
        </button>
        <button className={btnClass + " w-full"} onClick={() => { navigate(`/resume`); setIsOpen(false); }}>
          {"Resume"}
        </button>
        <button className={btnClass + " w-full"} onClick={() => { navigate(`/contact-me`); setIsOpen(false); }}>
          {"Contact Me"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
