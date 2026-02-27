"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";
import DNAStrand from "./DNAStrand";
import { Suspense } from "react";

export default function Hero3DSceneImpl() {
    return (
        <Canvas
            camera={{ position: [0, 0, 35], fov: 40 }}
            gl={{ antialias: true, alpha: true }} // alpha: true ensures background is transparent
        >
            {/* Lighting setup for the "cinematic, modern biotech" look */}
            <ambientLight intensity={0.2} />

            {/* Main key light */}
            <directionalLight
                position={[10, -10, 10]}
                intensity={1.5}
                color="#ffffff"
            />

            {/* Side rim light to accent the shape */}
            <pointLight
                position={[-10, 0, -10]}
                intensity={2}
                color="#10b981"
                distance={50}
            />

            <Suspense fallback={null}>
                {/* Environment maps give metallic/glassy materials rich reflections */}
                <Environment preset="city" />

                <Float
                    speed={1.5} // Animation speed
                    rotationIntensity={0.2} // XYZ rotation intensity
                    floatIntensity={0.5} // Up/down float intensity
                >
                    <DNAStrand />
                </Float>
            </Suspense>

            <OrbitControls
                enableZoom={false} // Prevent zooming so it doesn't mess with page scroll
                enablePan={false}
                autoRotate={false} // We have rotation on the strand itself
                maxPolarAngle={Math.PI / 1.5} // Restrict how far user can rotate it
                minPolarAngle={Math.PI / 3}
            />
        </Canvas>
    );
}
