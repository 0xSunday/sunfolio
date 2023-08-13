import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ url }) => {
  const decal = useTexture(url);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial color="#fff8eb" flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 6.25]}
          scale={[1, 1, 1]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ name, url }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball url={url} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;