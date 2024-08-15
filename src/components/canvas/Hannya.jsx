import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { OrbitControls, Preload, useGLTF, PresentationControls, Environment } from "@react-three/drei";
import * as THREE from 'three';

import { styles } from "../../styles";

import CanvasLoader from "../Loader";
import { demomode } from "../../constants";

const demobox = demomode ? styles.demo.landing : {};

const Hannya = ({ hannyaPos }) => {
  const hannya = useGLTF("./solocup/scene.gltf");
  const meshRef = useRef();
  const groupRef = useRef();
  const topLightRef = useRef();
  const leftSidetLightRef = useRef();
  const rightSideLightRef = useRef();

  const cameraVector = new THREE.Vector3();
  let lerpPosX = 0;
  let lerpPosZ = -7;
  let lerpRotY = 0;
  let lerpRotX = 0;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // groupRef.current.rotation.x = -Math.cos(t * 3 / 2) / 6 + Math.PI/10;
    groupRef.current.rotation.y = t / 2;

    cameraVector.set(state.mouse.x * -1.05, state.mouse.y * -1.05, state.camera.position.z)
    state.camera.position.lerp(cameraVector, 0.025)
    state.camera.lookAt(0, 0, 0)

    if (hannyaPos == 3) {
      lerpPosX = -2;
      lerpPosZ = 3;
      lerpRotY = Math.PI/4;
      lerpRotX = 0;
    } else if (hannyaPos == 1) {
      lerpPosX = 2;
      lerpPosZ = 3;
      lerpRotY = -Math.PI/4;
      lerpRotX = 0;
    } else if (hannyaPos == 2) {
      lerpPosX = 0;
      lerpPosZ = -3;
      lerpRotY = 0;
      lerpRotX = -Math.PI/6;
    } else {
      lerpPosX = 0;
      lerpPosZ = -3;
      lerpRotY = 0;
      lerpRotX = 0;
    }

    groupRef.current.position.x = MathUtils.lerp(groupRef.current.position.x, lerpPosX, 0.025);
    groupRef.current.position.z = MathUtils.lerp(groupRef.current.position.z, lerpPosZ, 0.025);
    groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, lerpRotY, 0.025);
    groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, lerpRotX, 0.025);

    // const lightx = topLightRef.current.position.x + state.mouse.x * 1.25;
    // const leftLighty = leftSidetLightRef.current.position.y + state.mouse.y * 0.5;
    // const rightLighty = rightSideLightRef.current.position.y + state.mouse.y * 0.5;

    // topLightRef.current.position.x = THREE.MathUtils.clamp(lightx, -60, 60);
    // leftSidetLightRef.current.position.y = THREE.MathUtils.clamp(leftLighty, -40, 0);
    // rightSideLightRef.current.position.y = THREE.MathUtils.clamp(rightLighty, -40, 0);
  })

  return (
    <group ref={groupRef}>
      {/* <axesHelper args={[5]} /> */}
      <mesh
        ref={meshRef}
        scale={20}
        rotation={[Math.PI/12, 0, 0]}
        position={[0, 0, 0]}>

        {/* OBJECT */}
        <primitive
          object={hannya.scene}
        />
        {/* <axesHelper args={[5]} /> */}

        {/* LIGHT */}
        <spotLight ref={topLightRef} position={[0, 100, 25]} intensity={2} />
        <spotLight ref={leftSidetLightRef} position={[20, -20, 4]} angle={0.15} intensity={0.5} />
        {/* <spotLight ref={rightSideLightRef} position={[-20, -20, 4]} angle={0.15} intensity={0.5} /> */}
      </mesh>
    </group>
  )
};

const HannyaCanvas = ({ hannyaPos }) => {
  const backgroundColor = new THREE.Color('#000000');

  return (
    <Canvas
      className={`border-6 border-red-500 absolute`}
      shadows
      camera={{ position: [0, 0, 10], fov: 30 }}
      >
      <Suspense fallback={<CanvasLoader />}>
        <Hannya hannyaPos={hannyaPos}/>
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
};

export default HannyaCanvas;
