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

const demobox = demomode ? styles.demo.canvas : {};

const Hannya = ({ scale, px, py, pz }) => {

  const hannya = useGLTF("./solocup/scene.gltf");
  const meshRef = useRef();

  const cameraVector = new THREE.Vector3();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = -2*Math.cos(t) / 16;
    meshRef.current.rotation.y = -2*Math.sin(t) / 16 - Math.PI/2;

    cameraVector.set(state.pointer.x * -2, state.pointer.y * -2, state.camera.position.z)
    state.camera.position.lerp(cameraVector, 0.025)
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <mesh
      ref={meshRef}
      scale={scale}
      rotation={[0, 0, 0]}
      position={[px, py, pz]}
    >
      <primitive
        object={hannya.scene}
      />
    </mesh>
  )
};

const HannyaCanvas = ({ hScale, hpx, hpy, hpz}) => {

  return (
    <div style={demobox} className={`relative w-full h-full`}>
      <Canvas
        className={` border-red-500`}
        style={demobox}
        shadows
        camera={{ position: [0, 0, 8], fov: 30 }}
        >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.1} color />
          <spotLight position={[0, 2, 2.5]} rotation={[0, 0, 0]} intensity={0.3}  ></spotLight>
          <Hannya scale={hScale} px={hpx} py={hpy} pz={hpz} />
          <Environment preset="city" rotation={[0, Math.PI / 2, 0]} position={[0, -3, 0]} color={[]}/>
        </Suspense>
      </Canvas>
    </div>
    
  )
};

export default HannyaCanvas;
