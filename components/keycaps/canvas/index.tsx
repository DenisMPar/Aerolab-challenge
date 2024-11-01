"use client";
import { Canvas } from "@react-three/fiber";
import { Scene } from "../scene";

export function KeyCapsCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 3],
        fov: 50,
      }}
    >
      <Scene />
    </Canvas>
  );
}
