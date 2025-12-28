import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

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
    <motion.button
      onClick={handleClick}
      className="absolute top-[90vh] left-1/2 -translate-x-1/2"
      style={{ opacity }}
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeIn",
      }}
    >
      <IoIosArrowDown size={40} className="text-white" />
    </motion.button>
  );
};

export default Arrow;
