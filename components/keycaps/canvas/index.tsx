import { Canvas } from "@react-three/fiber";
import { Scene } from "../scene";

export function KeyCapsCanvas() {
  const isMobile = window.innerWidth < 768;
  return (
    <Canvas
      camera={{
        position: [0, 0, isMobile ? 2.5 : 3],
        fov: isMobile ? 60 : 40,
      }}
    >
      <Scene />
    </Canvas>
  );
}
