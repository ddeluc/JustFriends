import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Plane } from '@react-three/drei';
import { MathUtils } from "three";
import { OrbitControls, Preload, useGLTF, PresentationControls, Environment } from "@react-three/drei";
import * as THREE from 'three';

import { styles } from "../../styles";

import CanvasLoader from "../Loader";
import { demomode } from "../../constants";
import { color } from "framer-motion";
import { shininess } from "three/examples/jsm/nodes/Nodes.js";

import img from "../../assets/images/planeimage.jpg";

const demobox = demomode ? styles.demo.canvas : {};

const Hannya = ({ hoveredItem }) => {
  const hannya = useGLTF("./solocup/scene.gltf");
  const meshRef = useRef();
  const topLightRef = useRef();
  const leftSidetLightRef = useRef();
  const rightSideLightRef = useRef();

  let lerpPosX, lerpPosY, lerpPosZ, lerpRotY, lerpRotX, lerpRotZ;

  const cameraVector = new THREE.Vector3();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // groupRef.current.rotation.x = -Math.cos(t * 3 / 2) / 6 + Math.PI/10;
    // groupRef.current.rotation.y = t / 2;

    // cameraVector.set(state.mouse.x * -5, state.mouse.y * -5, state.camera.position.z)
    // state.camera.position.lerp(cameraVector, 0.025)
    // state.camera.lookAt(0, 0, 0)

    if (hoveredItem == "About") {
      lerpPosX = -2.75;
      lerpPosY = 0.3;
      lerpPosZ = 0;
      lerpRotY = -2*Math.PI/5;
      lerpRotX = -Math.PI/12;
      lerpRotZ = 0;

    } else if (hoveredItem == "Volumes") {
      lerpPosX = 0;
      lerpPosY = 0.3;
      lerpPosZ = 0;
      lerpRotY = -Math.PI/2;
      lerpRotX = 0;
      lerpRotZ = -Math.PI/9;

    } else if (hoveredItem == "Radio") {
      lerpPosX = 2.75;
      lerpPosY = 0.3;
      lerpPosZ = 0;
      lerpRotY = -3*Math.PI/5;
      lerpRotX = -Math.PI/12;
      lerpRotZ = 0;

    } else {
      lerpPosX = 0;
      lerpPosY = 0;
      lerpPosZ = 0;
      lerpRotY = -Math.PI/2;
      lerpRotX = 0;
      lerpRotZ = 0;

    }

    meshRef.current.position.x = MathUtils.lerp(meshRef.current.position.x, lerpPosX, 0.05);
    meshRef.current.position.y = MathUtils.lerp(meshRef.current.position.y, lerpPosY, 0.025);
    meshRef.current.position.z = MathUtils.lerp(meshRef.current.position.z, lerpPosZ, 0.025);
    meshRef.current.rotation.y = MathUtils.lerp(meshRef.current.rotation.y, lerpRotY, 0.05);
    meshRef.current.rotation.x = MathUtils.lerp(meshRef.current.rotation.x, lerpRotX, 0.025);
    meshRef.current.rotation.z = MathUtils.lerp(meshRef.current.rotation.z, lerpRotZ, 0.05);

    // const lightx = topLightRef.current.position.x + state.mouse.x * 1.25;
    // const leftLighty = leftSidetLightRef.current.position.y + state.mouse.y * 0.5;
    // const rightLighty = rightSideLightRef.current.position.y + state.mouse.y * 0.5;

    // topLightRef.current.position.x = THREE.MathUtils.clamp(lightx, -60, 60);
    // leftSidetLightRef.current.position.y = THREE.MathUtils.clamp(leftLighty, -40, 0);
    // rightSideLightRef.current.position.y = THREE.MathUtils.clamp(rightLighty, -40, 0);
  })

  return (

      <mesh
        ref={meshRef}
        scale={20}
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}>



        {/* OBJECT */}
        <primitive
          object={hannya.scene}
        />
        {/* <axesHelper args={[5]} /> */}

        {/* LIGHT */}
        <spotLight ref={topLightRef} position={[0, 100, 25]} intensity={1} />
        <spotLight ref={leftSidetLightRef} position={[20, -20, 4]} angle={0.15} intensity={0.2} />
        <spotLight ref={rightSideLightRef} position={[-20, -20, 4]} angle={0.15} intensity={0.5} />
      </mesh>

  )
};

const PolaroidImage = () => {
  const texture = useLoader(THREE.TextureLoader, img);

  return (
    <group rotation={[0, 0, 0]}>
      {/* Border Plane */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[3.3, 3.3]} /> {/* Slightly larger for the border effect */}
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Image Plane */}
      <mesh >
        <planeGeometry args={[3, 3]} /> {/* Slightly smaller than the border plane */}
        <meshStandardMaterial map={texture} roughness={0.4} metalness={0.3}/>
      </mesh>

      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial
          color="white"
          opacity={0.1}
          transparent={true}
          roughness={0.1}
          metalness={1}
        />
      </mesh>
    </group>
  );
}

const HannyaCanvas = ({ hoveredItem }) => {
  const backgroundColor = new THREE.Color('#000000');

  return (
    <Canvas
      className={`border-6 border-red-500 absolute `}
      style={demobox}
      shadows
      camera={{ position: [0, 0, 10], fov: 30 }}
      >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <spotLight position={[3, 3, 5]} rotation={[]} intensity={1} ><axesHelper /></spotLight>
        <spotLight position={[20, -20, 4]} angle={0.15} intensity={0.2} />
        <spotLight position={[-20, -20, 4]} angle={0.15} intensity={0.5} />
        <PolaroidImage />
        {/* <Hannya hoveredItem={hoveredItem} /> */}
        {/* <Environment preset="city" /> */}
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
};

export default HannyaCanvas;
