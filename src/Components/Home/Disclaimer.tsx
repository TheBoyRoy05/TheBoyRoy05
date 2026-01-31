import { FaInfoCircle } from "react-icons/fa";
import { useFadeOut } from "../../Hooks/useFadeOut";

const Disclaimer = () => {
  const { opacity } = useFadeOut();

  return (
    <div className="dropdown dropdown-hover dropdown-top absolute left-[2vw] bottom-[2vw]">
      <FaInfoCircle role="button" tabIndex={0} className="mt-2" style={{ opacity }} />
      <div
        tabIndex={0}
        className="dropdown-content card card-sm z-1 w-64 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-xl"
      >
        <span className="card-body p-6">
          This is NOT a template or AI-generated.{" "}
          <a
            href="https://medium.com/@issacroy05/boids-simulating-flocks-e11c121a35cc"
            target="_blank"
            className="text-blue-500 underline"
          >
            Read More
          </a>
        </span>
      </div>
    </div>
  );
};

export default Disclaimer;
