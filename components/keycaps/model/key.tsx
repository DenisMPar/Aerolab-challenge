/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
type KeyVariant = "w" | "a" | "s" | "d";

interface KeyProps extends GroupProps {
  variant: KeyVariant;
}
const modelDictionary = {
  w: "/w-key.glb",
  a: "/a-key.glb",
  s: "/s-key.glb",
  d: "/d-key.glb",
};
export function KeyModel({ variant, ...props }: KeyProps) {
  const { nodes, materials }: any = useGLTF(modelDictionary[variant]);
  const keyRef = useRef<RapierRigidBody | null>(null);
  function addImpulse() {
    if (keyRef.current) {
      const randomNumber = Math.round(Math.random());

      const applyImpulseOnX = randomNumber === 1 ? 0.5 : -0.5;
      const appliTorqueOnX = randomNumber === 1 ? -0.1 : 0.1;

      keyRef.current.applyImpulse({ x: applyImpulseOnX, y: 1.5, z: 0 }, true);
      keyRef.current.applyTorqueImpulse(
        { x: 0, y: 0, z: appliTorqueOnX },
        true
      );
    }
  }
  return (
    <group
      onClick={addImpulse}
      {...props}
      dispose={null}
      rotation={[degToRad(90), degToRad(145), 0]}
      scale={0.6}
    >
      <RigidBody ref={keyRef} type="dynamic" colliders="hull" restitution={0.3}>
        <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/w-key.glb");
useGLTF.preload("/a-key.glb");
useGLTF.preload("/s-key.glb");
useGLTF.preload("/d-key.glb");
