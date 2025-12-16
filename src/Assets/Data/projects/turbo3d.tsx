import { FaCamera, FaCode } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { MdDownload, MdSpeed } from "react-icons/md";
import { FaExclamation } from "react-icons/fa6";
import { TbBrandCpp, TbMathFunction } from "react-icons/tb";
import { GiFamilyTree, GiLightBulb } from "react-icons/gi";
import { BsLightningFill, BsSignMergeRightFill } from "react-icons/bs";
import { FiLayout } from "react-icons/fi";
import { PiTestTubeFill } from "react-icons/pi";
import { IoSparkles, IoCubeOutline } from "react-icons/io5";
import { BiSolidCube } from "react-icons/bi";

import turbo3d from "/src/Assets/Images/Projects/Turbo3D/grass.png";
import turbo3dGif from "/src/Assets/Images/Projects/Turbo3D/grass.gif";

import fail1 from "/src/Assets/Images/Projects/Turbo3D/Fails/fail1.png";
import fail2 from "/src/Assets/Images/Projects/Turbo3D/Fails/fail2.png";
import fail3 from "/src/Assets/Images/Projects/Turbo3D/Fails/fail3.png";
import fail4 from "/src/Assets/Images/Projects/Turbo3D/Fails/fail4.png";
import fail5 from "/src/Assets/Images/Projects/Turbo3D/Fails/fail5.png";
import fail6 from "/src/Assets/Images/Projects/Turbo3D/Fails/fail6.png";

export default {
  time: "Winter '25",
  color: "#197751",
  description: "A slightly awful 3D engine that runs on the CPU",
  image: turbo3d,
  gif: turbo3dGif,
  link: "/turbo-3d",
  tech: { "C++": <TbBrandCpp /> },
  fails: [fail1, fail2, fail3, fail4, fail5, fail6],
  priorities: [
    {
      title: "Learn from scratch -",
      text: "Building everything from the ground up to truly understand how 3D graphics work under the hood.",
      symbol: <FaCode />,
    },
    {
      title: "Keep it simple -",
      text: "Prioritizing clarity and educational value over performance, making the codebase understandable.",
      symbol: <FiLayout />,
    },
    {
      title: "Minimal dependencies -",
      text: "Using only SDL2 for windowing and input, implementing all graphics math and rendering ourselves.",
      symbol: <IoCubeOutline />,
    },
    {
      title: "Incremental features -",
      text: "Building core rendering first, then adding lighting, texturing, and camera controls step by step.",
      symbol: <BsSignMergeRightFill />,
    },
  ],
  architecture: [
    {
      title: "Core Renderer -",
      text: "Handles vertex processing, triangle rasterization, depth buffering, and pixel shading.",
      symbol: <BiSolidCube />,
    },
    {
      title: "Camera System -",
      text: "Supports multiple camera modes including orbit, FPS-style movement, and perspective projection.",
      symbol: <FaCamera />,
    },
    {
      title: "Math Library -",
      text: "Custom vector and matrix operations for transformations, projections, and lighting calculations.",
      symbol: <TbMathFunction />,
    },
    {
      title: "OBJ Parser -",
      text: "Loads 3D models from OBJ files, parsing vertices, faces, normals, and texture coordinates.",
      symbol: <MdDownload />,
    },
  ],
  pipeline: [
    {
      title: "Model Space -",
      text: "Vertices are defined relative to the model's origin, loaded from OBJ files.",
      symbol: <IoCubeOutline />,
    },
    {
      title: "World Space -",
      text: "Apply model transformations (translation, rotation, scale) to position objects in the scene.",
      symbol: <BsSignMergeRightFill />,
    },
    {
      title: "View Space -",
      text: "Transform vertices relative to the camera using view matrix calculations.",
      symbol: <FaCamera />,
    },
    {
      title: "Projection -",
      text: "Apply perspective projection to convert 3D coordinates to 2D screen space.",
      symbol: <TbMathFunction />,
    },
    {
      title: "Rasterization -",
      text: "Fill triangles pixel by pixel, interpolating attributes like colors, normals, and UV coordinates.",
      symbol: <BiSolidCube />,
    },
    {
      title: "Shading -",
      text: "Calculate lighting and sample textures for each pixel to produce the final color.",
      symbol: <GiLightBulb />,
    },
  ],
  math: [
    {
      title: "Vector Operations -",
      text: "Dot and cross products, normalization, and length calculations for geometry and lighting.",
      symbol: <TbMathFunction />,
    },
    {
      title: "Matrix Math -",
      text: "4x4 transformation matrices for rotations, translations, scaling, and camera projections.",
      symbol: <BsSignMergeRightFill />,
    },
    {
      title: "Camera Controls -",
      text: "FPS-style camera with mouse controls and perspective projection for smooth navigation.",
      symbol: <FaCamera />,
    },
    {
      title: "Barycentric Coordinates -",
      text: "Used for interpolating vertex attributes across triangle surfaces during rasterization.",
      symbol: <IoCubeOutline />,
    },
  ],
  lighting: [
    {
      title: "Directional Lighting -",
      text: "Simulates sunlight with a constant direction, calculating diffuse shading from surface normals.",
      symbol: <GiLightBulb />,
    },
    {
      title: "Point Lights -",
      text: "Light sources with position and falloff, creating realistic lighting effects in the scene.",
      symbol: <IoSparkles />,
    },
    {
      title: "Normal Mapping -",
      text: "Uses vertex normals to calculate proper lighting angles, creating depth and realism.",
      symbol: <BiSolidCube />,
    },
    {
      title: "Texture Mapping -",
      text: "Samples textures using UV coordinates, applying images to surfaces for detailed visuals.",
      symbol: <IoMdColorPalette />,
    },
  ],
  challenges: [
    {
      title: "Matrix Debugging -",
      text: "Tracking down bugs in matrix multiplication and transformation order was incredibly difficult without visual debugging tools.",
      symbol: <FaExclamation />,
    },
    {
      title: "Depth Buffer Precision -",
      text: "Getting the Z-buffer to work correctly required careful handling of floating-point precision and coordinate systems.",
      symbol: <PiTestTubeFill />,
    },
    {
      title: "Texture Sampling -",
      text: "Implementing proper UV coordinate interpolation and texture filtering was more complex than expected.",
      symbol: <IoMdColorPalette />,
    },
    {
      title: "Performance Tradeoffs -",
      text: "Balancing code clarity with performance, knowing that CPU rendering will never be as fast as GPU rendering.",
      symbol: <MdSpeed />,
    },
  ],
  future: [
    {
      title: "GPU Rendering -",
      text: "Moving from CPU to GPU rendering using OpenGL or Vulkan for realistic performance.",
      symbol: <BsLightningFill />,
    },
    {
      title: "Advanced Lighting -",
      text: "Adding shadows, reflections, and more sophisticated shading models like PBR.",
      symbol: <GiLightBulb />,
    },
    {
      title: "Scene Management -",
      text: "Building a scene graph system for organizing and efficiently rendering complex scenes.",
      symbol: <GiFamilyTree />,
    },
    {
      title: "Physics Integration -",
      text: "Adding collision detection and physics simulation to make the engine more interactive.",
      symbol: <BsSignMergeRightFill />,
    },
  ],
};
