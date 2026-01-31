import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { useFadeOut } from "../../Hooks/useFadeOut";

const Arrow = ({ handleClick }: { handleClick: () => void }) => {
  const { opacity } = useFadeOut();

  return (
    <motion.button
      onClick={handleClick}
      className="absolute bottom-[5vh] left-1/2 -translate-x-1/2"
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
