"use client";

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, useGLTF } from '@react-three/drei';

function RockModelScene() {
    const { nodes, materials } = useGLTF('/rock_photogrammetry_scan.glb') as any;
    return (
        <group position={[0, -1, 0]} scale={3}>
            <mesh
                geometry={nodes.Object_2.geometry}
                material={materials['Scene_-_Root']}
                rotation={[-Math.PI / 2, 0, 0.3]}
                castShadow
                receiveShadow
            />
        </group>
    );
}

export default function HeroScene() {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 2, 12], fov: 50 }}
                gl={{
                    alpha: true,
                    antialias: true,
                    powerPreference: 'high-performance',
                }}
                dpr={[1, 2]}
                shadows
            >
                <ambientLight intensity={0.4} />
                <directionalLight
                    position={[5, 8, 5]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                />
                <directionalLight position={[-5, 3, -3]} intensity={0.3} color="#6b8f7a" />
                <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffffff" />

                <Suspense fallback={null}>
                    <RockModelScene />
                    <Environment preset="forest" />
                    <ContactShadows
                        position={[0, -2.5, 0]}
                        opacity={0.4}
                        scale={5}
                        blur={1}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}

useGLTF.preload('/rock_photogrammetry_scan.glb');
