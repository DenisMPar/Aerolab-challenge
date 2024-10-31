"use client";
import { Canvas } from "@react-three/fiber";
import { CuboidCollider, Physics } from "@react-three/rapier";
import classes from "./index.module.css";
import { KeyModel } from "./model/key";
export function Keycaps() {
  return (
    <div className={classes.keycaps__container}>
      <Canvas
        camera={{
          position: [0, 0, 2.5],
          fov: 60,
        }}
      >
        <ambientLight intensity={3} />
        <directionalLight position={[0, 3, 0]} color="#ff00ae" intensity={4} />
        <directionalLight position={[-3, 3, 0]} color="#ff00ae" intensity={4} />
        <directionalLight position={[3, 3, 0]} color="#ff00ae" intensity={4} />
        <directionalLight position={[0, 0, 3]} color="#f8e2f7" intensity={1} />
        <Physics>
          <CuboidCollider args={[3.9, 3, 0.3]} position={[0, 2, 0]} />
          <CuboidCollider args={[3.9, 3, 0.3]} position={[0, 2, 0.9]} />
          <CuboidCollider args={[3.9, 0.5, 0.3]} position={[0, 5.5, 0.4]} />
          <CuboidCollider args={[3.9, 0.5, 0.3]} position={[0, -1.5, 0.4]} />
          <CuboidCollider args={[0.5, 3, 0.3]} position={[-3.5, 2, 0.4]} />
          <CuboidCollider args={[0.5, 3, 0.3]} position={[3, 2, 0.4]} />
          <KeyModel variant="a" position={[-1, 2, 0]} />
          <KeyModel variant="s" position={[0, 1.8, 0]} />
          <KeyModel variant="w" position={[0, 3, 0]} />
          <KeyModel variant="d" position={[1, 3, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}
