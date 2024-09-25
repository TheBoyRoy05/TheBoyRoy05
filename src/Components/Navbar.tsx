const Navbar = () => {
  const btnClass = "btn mr-4 mt-4 overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none shadow-lg";

  return (
    <div className="flex justify-end">
      <button className={btnClass}>About</button>
      <button className={btnClass}>Projects</button>
      <button className={btnClass}>Blog</button>
      <button className={btnClass}>Contact Me</button>
    </div>
  );
};

export default Navbar;
