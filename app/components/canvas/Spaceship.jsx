"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Spaceship = () => {
  const spaceship = useGLTF("./spaceship/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="white" />
      <pointLight intensity={0.7} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.52}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={spaceship.scene}
        scale={10}
        position={[0, -10, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const SpaceshipCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [0, 0, 40], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={2}
        />
        <Spaceship />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default SpaceshipCanvas;
