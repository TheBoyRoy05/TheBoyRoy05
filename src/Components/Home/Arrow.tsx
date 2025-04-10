import { useEffect, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const Arrow = ({ handleClick }: { handleClick: () => void }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const scrollContainer = document.querySelector(".simplebar-content-wrapper");

    const handleScroll = () => {
      setOpacity(Math.max(0, 1 - (scrollContainer?.scrollTop || 0) / 500));
    };

    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={handleClick}
      className="absolute top-[90vh] left-1/2 -translate-x-1/2"
      style={{ opacity }}
    >
      <FaArrowDownLong className="text-3xl text-white" />
    </button>
  );
};

export default Arrow;
