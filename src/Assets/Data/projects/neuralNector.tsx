import { SiPostgresql, SiPython, SiPytorch, SiTypescript } from "react-icons/si";
import { IoSparkles } from "react-icons/io5";
import { GiFlowerEmblem } from "react-icons/gi";

import neuralNector from "/src/Assets/Images/Projects/NeuralNector/neural-nector.png";
import { FaNodeJs, FaReact } from "react-icons/fa6";

export default {
  time: "December '25",
  color: "#6A3D8F",
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
  epochs: [
    {
      title: "16th Epoch -",
      text: "The discriminator picked up on the noise and so the generator instead learns to color the center bright and the edges dark to gain the edge.",
      symbol: <IoSparkles />,
    },
    {
      title: "200th Epoch -",
      text: "The generator has learned some more patterns and the flowers start to take shape. However, there are still some artifacts in the images.",
      symbol: <IoSparkles />,
    },
    {
      title: "1200th Epoch -",
      text: "The discriminator has picked up on the repeating artifacts and so the generator learns to avoid them, generating more realistic flowers.",
      symbol: <GiFlowerEmblem />,
    },
    {
      title: "3000th Epoch -",
      text: "The generator is able to create realistic flowers. It starts to understand leaves in the background and even certain lighting effects.",
      symbol: <GiFlowerEmblem />,
    },
  ],
};