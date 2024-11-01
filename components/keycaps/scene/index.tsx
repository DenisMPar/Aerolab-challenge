import { CuboidCollider, Physics } from "@react-three/rapier";
import { KeyModel } from "../model/key";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Scene() {
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 15;
  return (
    <>
      <ambientLight intensity={2.8} />
      <directionalLight position={[0, 3, 0]} color="#fd69f6" intensity={3} />
      <directionalLight position={[-3, 3, 0]} color="#fd69f6" intensity={3} />
      <directionalLight position={[3, 3, 0]} color="#fd69f6" intensity={3} />
      <directionalLight position={[0, 0, 3]} color="#f8e2f7" intensity={1} />
      <Physics>
        <CuboidCollider
          args={[isMobile ? 3.9 : responsiveRatio * 6, 3, 0.3]}
          position={[0, 2, 0]}
        />
        <CuboidCollider
          args={[isMobile ? 3.9 : responsiveRatio * 6, 3, 0.3]}
          position={[0, 2, isMobile ? 0.9 : 0.9]}
        />
        <CuboidCollider
          args={[isMobile ? 3.9 : responsiveRatio * 6, 0.5, 0.3]}
          position={[0, 5.5, 0.4]}
        />
        <CuboidCollider
          args={[isMobile ? 3.9 : responsiveRatio * 6, 0.5, 0.3]}
          position={[0, isMobile ? -1.5 : -1.4, 0.4]}
        />
        <CuboidCollider
          args={[0.5, 3, 0.3]}
          position={[isMobile ? -3.5 : -(responsiveRatio * 5), 2, 0.4]}
        />
        <CuboidCollider
          args={[0.5, 3, 0.3]}
          position={[isMobile ? -3.5 : responsiveRatio * 5, 2, 0.4]}
        />
        <KeyModel variant="a" position={[-1, 2, 0]} />
        <KeyModel variant="s" position={[0, 1.8, 0]} />
        <KeyModel variant="w" position={[0, 3, 0]} />
        <KeyModel variant="d" position={[1, 3, 0]} />
      </Physics>
    </>
  );
}
