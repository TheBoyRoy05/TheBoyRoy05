import { Leva, useControls } from "leva";
import Boids from "./Boids";
import { useEffect, useRef, useState } from "react";
import { DoubleSide } from "three";
import { Edges, Environment, SoftShadows, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { degToRad } from "three/src/math/MathUtils.js";
import { Bloom, EffectComposer, GodRays } from "@react-three/postprocessing";

const Scene = () => {
  const sun = useRef(null!);

  const boundaries = useControls(
    "Boundary Settings",
    {
      debug: false,
      x: { value: 48, min: 0, max: 48 },
      y: { value: 27, min: 0, max: 27 },
      z: { value: 25, min: 0, max: 40 },
    },
    { collapsed: true }
  );

  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const scaleX = Math.max(0.5, size[0] / 1920);
  const scaleY = Math.max(0.5, size[1] / 1080);

  const responsiveBoundaries = {
    x: boundaries.x * scaleX,
    y: boundaries.y * scaleY,
    z: boundaries.z,
  };

  useEffect(() => {
    let timeout: number | undefined;
    function updateSize() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setSize([window.innerWidth, window.innerHeight]);
      }, 50);
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="h-screen">
      <Leva hidden />
      <Canvas camera={{ position: [0, 3, 30], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <Boids
          boundaries={{
            x: responsiveBoundaries.x,
            y: responsiveBoundaries.y,
            z: responsiveBoundaries.z,
          }}
        />
        <mesh visible={boundaries.debug}>
          <boxGeometry
            args={[responsiveBoundaries.x, responsiveBoundaries.y, responsiveBoundaries.z]}
          />
          <meshStandardMaterial transparent opacity={0} side={DoubleSide} />
          <Edges color={"blue"} />
        </mesh>

        {/* LIGHTS */}
        <SoftShadows size={15} focus={1.5} samples={12} />
        <Environment preset="sunset"></Environment>
        <directionalLight position={[15, 15, 15]} intensity={1.5} />
        <hemisphereLight intensity={1.35} color={"#000000"} groundColor={"#333333"} />

        {/* SUN */}
        <mesh
          ref={sun}
          position-y={responsiveBoundaries.y * 1.2}
          position-z={-40}
          rotation-x={degToRad(50)}
        >
          <circleGeometry args={[12, 64]} />
          <meshBasicMaterial depthWrite={false} color={"#e1ae4e"} transparent opacity={1} />
        </mesh>

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Post Processing */}
        <EffectComposer>
          {sun && <GodRays sun={sun} exposure={0.34} decay={0.89} blur />}
          <Bloom luminanceThreshold={1.5} intensity={1} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Scene;

// "SpaceShip" (https://skfb.ly/oFFXL) by JazOone is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).