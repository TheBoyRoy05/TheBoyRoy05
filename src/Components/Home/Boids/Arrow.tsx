import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Quaternion, Vector3 } from "three";

interface ArrowProps {
  origin: Vector3;
  direction: Vector3;
  length?: number;
  scale?: number;
  color?: string;
  thickness?: number;
}

const Arrow = ({ origin, direction, scale = 20, length = direction.length() * scale, color = "white", thickness = 0.1 }: ArrowProps) => {
  const group = useRef<Group>(null);

  useFrame(() => {
    if (group.current) {
      const unitDirection = direction.clone().normalize();
      const quaternion = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), unitDirection);
      group.current.setRotationFromQuaternion(quaternion);
    }
  });

  return (
    <group ref={group} position={origin.clone().multiplyScalar(scale)}>
      <mesh position={[0, length * 0.4, 0]}>
        <cylinderGeometry
          args={[thickness, thickness, length * 0.8, 8]}
        />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0, length * 0.9, 0]}>
        <coneGeometry args={[thickness * 2, length * 0.2, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

export default Arrow;
