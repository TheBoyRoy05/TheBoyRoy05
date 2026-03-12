import { FaPython, FaReact } from "react-icons/fa6";
import { TbBrandThreejs } from "react-icons/tb";
import { SiNumpy, SiTypescript } from "react-icons/si";
import boids from "/src/Assets/Images/Blog/Boids.gif";
import wave from "/src/Assets/Images/Blog/WaveSimulation.png";
import altruism from "/src/Assets/Images/Blog/Altruism.png";

export const articles = [
  {
    title: "Boids Simulation",
    time: "January 2025",
    description:
      "Boids are an elegant demonstration of how complex, lifelike group behavior can emerge from simple rules applied to individual agents. These agents can simulate realistic movements such as swarming, avoiding obstacles, and following leaders. It's mesmerizing to witness—and even more fascinating to simulate.",
    image: boids,
    link: "https://medium.com/@issacroy05/boids-simulating-flocks-e11c121a35cc",
    tech: {
      React: <FaReact />,
      TypeScript: <SiTypescript />,
      ThreeJS: <TbBrandThreejs />,
    },
  },
  {
    title: "Wave Simulation",
    time: "June 2024",
    description:
      "The wave equation is a 2nd-order PDE used to describe wave phenomena such as mechanical and electromagnetic waves. This article explores solving the wave equation using the finite difference method in 1D and 2D, covering discretization, damping, and various boundary conditions.",
    image: wave,
    link: "https://medium.com/@issacroy05/a-simple-wave-simulation-35bee02c172b",
    tech: {
      Python: <FaPython />,
      Numpy: <SiNumpy />,
    },
  },
  {
    title: "Altruism",
    time: "February 2024",
    description:
      "Humans are unique due to altruism, prioritizing others' well-being, which contradicts economic models and is absent in even our closest relatives, chimpanzees. Through various simulations, including adding mutations and intelligent decision-making, this article explores evolutionary and traditional game theory.",
    image: altruism,
    link: "https://medium.com/cognitive-neuroeconomics/decoding-altruism-ccd72547d20e",
    tech: {
      Python: <FaPython />,
      Numpy: <SiNumpy />,
    },
  },
];
