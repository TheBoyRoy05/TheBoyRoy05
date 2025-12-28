import { SiPostgresql, SiPython, SiPytorch, SiTypescript } from "react-icons/si";

import neuralNector from "/src/Assets/Images/Projects/NeuralNector/neural-nector.png";
import { FaNodeJs, FaReact } from "react-icons/fa6";

export default {
  time: "December '25",
  color: "#4f2f6c",
  description: "Can you tell the difference?",
  image: neuralNector,
  link: "/neural-nector",
  tech: {
    Python: <SiPython />,
    PyTorch: <SiPytorch />,
    React: <FaReact />,
    TypeScript: <SiTypescript />,
    Postgres: <SiPostgresql />,
    Node: <FaNodeJs />,
  },
};