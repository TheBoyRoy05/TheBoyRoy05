import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const btnClass =
    "btn mr-4 mt-4 overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none shadow-lg";

  return (
    <div className="flex fixed w-full z-10">
      <button className={`${btnClass} ml-4 font-extrabold`}>
        <FaHome />
        Home
      </button>
      <div className="flex flex-1 justify-end">
        <button className={btnClass}>About</button>
        <button className={btnClass}>Projects</button>
        <button className={btnClass}>Blog</button>
        <button className={btnClass}>Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
