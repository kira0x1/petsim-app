/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const gl: any = useGLTF("/little_cube_pet.gltf");
  const { nodes, materials } = gl;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pet.geometry}
        material={materials.Body_Mat}
        rotation={[0, 0.5+ -Math.PI / 2, 0]}
      >
        <group rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Foot_LB.geometry}
            material={nodes.Foot_LB.material}
            position={[-0.5, 0.37, -0.4]}
            rotation={[0, -1.57, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Foot_LF.geometry}
            material={nodes.Foot_LF.material}
            position={[-0.5, 0.37, 0.5]}
            rotation={[0, -1.57, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Foot_RB.geometry}
            material={nodes.Foot_RB.material}
            position={[0.4, 0.37, -0.4]}
            rotation={[0, -1.57, 0]}
            scale={0.14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Foot_RF.geometry}
            material={nodes.Foot_RF.material}
            position={[0.4, 0.37, 0.5]}
            rotation={[0, -1.57, 0]}
            scale={0.14}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Eye_L.geometry}
          material={nodes.Eye_L.material}
          position={[1.1, 2.1, 0.67]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Eye_R.geometry}
          material={nodes.Eye_R.material}
          position={[1.1, 2.1, -0.67]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/little_cube_pet.gltf");