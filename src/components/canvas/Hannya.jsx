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

import testImage from "../../assets/images/planeimage.jpg";
import cowboy1 from "../../assets/videos/Cowboy1.mp4";
import photo1 from "../../assets/photos/photo4.png";
import photo2 from "../../assets/photos/photo2.png";
import photo3 from "../../assets/photos/photo8.png";
import photo4 from "../../assets/photos/photo11.png";
import photo5 from "../../assets/photos/photo9.png";
import photo6 from "../../assets/photos/photo12.png";


const demobox = demomode ? styles.demo.canvas : {};

const Hannya = ({ hoveredItem, selectedItem }) => {

  const hannya = useGLTF("./solocup/scene.gltf");
  const meshRef = useRef();
  const topLightRef = useRef();
  const leftSidetLightRef = useRef();
  const rightSideLightRef = useRef();

  let lerpPosX, lerpPosY, lerpPosZ, lerpRotY, lerpRotX, lerpRotZ;

  const cameraVector = new THREE.Vector3();

  useFrame((state) => {
    // const t = state.clock.getElapsedTime();
    // meshRef.current.rotation.x = -Math.cos(t) / 16;
    // meshRef.current.rotation.y = -Math.sin(t) / 16 - Math.PI/2;

    // cameraVector.set(state.mouse.x * -5, state.mouse.y * -5, state.camera.position.z)
    // state.camera.position.lerp(cameraVector, 0.025)
    // state.camera.lookAt(0, 0, 0)

    if (hoveredItem == "About") {
      lerpPosX = -2.75;
      lerpPosY = 0;
      lerpPosZ = 0;
      lerpRotY = -2*Math.PI/5;
      lerpRotX = -Math.PI/8;
      lerpRotZ = 0;

    } else if (hoveredItem == "Volumes") {
      lerpPosX = 0;
      lerpPosY = 0;
      lerpPosZ = 0;
      lerpRotY = -Math.PI/2;
      lerpRotX = -Math.PI/10;
      lerpRotZ = Math.PI/12;

    } else if (hoveredItem == "Join") {
      lerpPosX = 2.75;
      lerpPosY = 0;
      lerpPosZ = 0;
      lerpRotY = -3*Math.PI/5;
      lerpRotX = -Math.PI/8;
      lerpRotZ = 0;

    } else {
      lerpPosX = 0;
      lerpPosY = 0;
      lerpPosZ = 0;
      lerpRotY = -Math.PI/2;
      lerpRotX = 0;
      lerpRotZ = 0;
    }

    if (selectedItem == "About") {
      lerpPosZ = 0.8;
      lerpPosX = -3;
    } else if (selectedItem == "Join") {
      lerpPosX = 2.5;
      lerpPosY = 0;
      lerpPosZ = 0.8;
      lerpRotY = -3*Math.PI/5;
      lerpRotX = -Math.PI/8;
      lerpRotZ = 0;

    } else if (selectedItem == "Volumes") {
      lerpPosZ = -6.5;
      lerpPosX = 2.15;
      lerpPosY = -2.75;
      // lerpRotX = Math.PI/9;
      lerpRotY = -3*Math.PI/5;
      lerpRotZ = Math.PI/12;
      lerpRotX = -Math.PI/16;
    }

    meshRef.current.position.x = MathUtils.lerp(meshRef.current.position.x, lerpPosX, 0.05);
    meshRef.current.position.y = MathUtils.lerp(meshRef.current.position.y, lerpPosY, 0.025);
    meshRef.current.position.z = MathUtils.lerp(meshRef.current.position.z, lerpPosZ, 0.025);
    meshRef.current.rotation.y = MathUtils.lerp(meshRef.current.rotation.y, lerpRotY, 0.05);
    meshRef.current.rotation.x = MathUtils.lerp(meshRef.current.rotation.x, lerpRotX, 0.05);
    meshRef.current.rotation.z = MathUtils.lerp(meshRef.current.rotation.z, lerpRotZ, 0.05);
  })

  return (
    <mesh
      ref={meshRef}
      scale={20}
      rotation={[0, 0, 0]}
      position={[0, 0, 0]}
      >
      {/* OBJECT */}
      <primitive
        object={hannya.scene}
      />
      {/* <axesHelper args={[5]} /> */}

      {/* LIGHT */}
      {/* <spotLight ref={topLightRef} position={[0, 100, 25]} intensity={1} />
      <spotLight ref={leftSidetLightRef} position={[20, -20, 4]} angle={0.15} intensity={0.2} />
      <spotLight ref={rightSideLightRef} position={[-20, -20, 4]} angle={0.15} intensity={0.5} /> */}
    </mesh>
  )
};

const Video = () => {

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = cowboy1;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    
    <mesh >
      <planeGeometry  /> {/* Slightly smaller than the border plane */}
      <meshStandardMaterial >
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
    </mesh>
  );
}

const EventPoster = () => {
  
}

const PolaroidImage = ({ image, rotation, position, scale, lerpSpeed, initialPosition }) => {
  const texture = useLoader(THREE.TextureLoader, image);
  const polRef = useRef();

  let lerpPosX, lerpPosY, lerpPosZ, lerpRotY, lerpRotX, lerpRotZ;

  useFrame((state) => {

    lerpPosX = position[0];
    lerpPosY = position[1];
    lerpPosZ = position[2];

    polRef.current.position.x = MathUtils.lerp(polRef.current.position.x, lerpPosX, lerpSpeed);
    polRef.current.position.y = MathUtils.lerp(polRef.current.position.y, lerpPosY, lerpSpeed);
    polRef.current.position.z = MathUtils.lerp(polRef.current.position.z, lerpPosZ, lerpSpeed);
  })

  return (
    <group ref={polRef} rotation={rotation} position={initialPosition} scale={scale}>
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

const PolaroidClusterAbout = ({ page }) => {

  if (page == "About") { 
    return (
      <group>
        <PolaroidImage image={photo1} rotation={[0, 0, Math.PI/6]} position={[-5.2, 1.5, -3]} scale={0.7} lerpSpeed={0.05} initialPosition={[-6, 5, -3]} />
        <PolaroidImage image={photo2} rotation={[0, 0, -Math.PI/6]} position={[-5, -1, -2.8]} scale={0.7} lerpSpeed={0.06} initialPosition={[-5, -5, -2.8]} />
        <PolaroidImage image={photo3} rotation={[0, 0, -Math.PI/6]} position={[-3, 1.4, -2.6]} scale={0.7} lerpSpeed={0.07} initialPosition={[-7, 5, -2.6]} />
        <PolaroidImage image={photo4} rotation={[0, 0, Math.PI/16]} position={[-3, -1, -2.4]} scale={0.7} lerpSpeed={0.08} initialPosition={[-6, -3, -2.4]} />
      </group>
    )
  } else if (page == "Join") {
    return (
      <group>
        <PolaroidImage image={photo1} rotation={[0, 0, Math.PI/9]} position={[-5.4, 2, -3]} scale={0.7} lerpSpeed={0.05} initialPosition={[-6, 5, -3]} />
        <PolaroidImage image={photo2} rotation={[0, 0, -Math.PI/12]} position={[-5.4, -2, -2.8]} scale={0.7} lerpSpeed={0.06} initialPosition={[-5, -5, -2.8]} />
      </group>
    )
  }
}

const HannyaCanvas = ({ hoveredItem, selectedItem }) => {
  const backgroundColor = new THREE.Color('#ffffff');

  return (
    <Canvas
      className={`border-6 border-red-500 absolute`}
      style={demobox}
      shadows
      camera={{ position: [0, 0, 10], fov: 30 }}
      >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.08} />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <spotLight position={[0, 2, 2.5]} rotation={[0, 0, 0]} intensity={0.3}  ></spotLight>
        {/* <spotLight position={[20, -20, 4]} angle={0.15} intensity={0.2} />
        <spotLight position={[-20, -20, 4]} angle={0.15} intensity={0.5} /> */}
        {/* <PolaroidImage /> */}
        {/* <Video /> */}
        <Hannya hoveredItem={hoveredItem} selectedItem={selectedItem} />
        {selectedItem == "About" ? <PolaroidClusterAbout page="About" /> : <></> }
        {selectedItem == "Join" ? <PolaroidClusterAbout page="Join" /> : <></> }
        <Environment preset="city" rotation={[0, Math.PI / 2, 0]} position={[0, -3, 0]}/>
        {/* <OrbitControls /> */}
      </Suspense>
    </Canvas>
  )
};

export default HannyaCanvas;
