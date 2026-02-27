"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

export default function DNAStrand() {
    const groupRef = useRef<THREE.Group>(null);
    const particlesRef = useRef<THREE.Points>(null);

    // Configuration for the DNA helix (longer spanning)
    const numTurns = 7; // More twists for longer length
    const height = 45;   // Extended height to cross 2 sections
    const radius = 3.5;  // Slightly wider
    const pointsPerTurn = 40; // Resolution of the curve
    const numPoints = numTurns * pointsPerTurn;

    // Generate the main backbone curves and rung positions
    const { curve1, curve2, rungMatrices, rungsCount } = useMemo(() => {
        const pts1 = [];
        const pts2 = [];
        const sMatrices: THREE.Matrix4[] = [];
        const dummyObj = new THREE.Object3D();

        for (let i = 0; i <= numPoints; i++) {
            const t = i / numPoints;
            const angle = t * Math.PI * 2 * numTurns;
            const y = (t - 0.5) * height; // Center around 0

            // Helix 1
            const x1 = Math.cos(angle) * radius;
            const z1 = Math.sin(angle) * radius;

            // Helix 2 (offset by 180 degrees)
            const x2 = Math.cos(angle + Math.PI) * radius;
            const z2 = Math.sin(angle + Math.PI) * radius;

            const p1 = new THREE.Vector3(x1, y, z1);
            const p2 = new THREE.Vector3(x2, y, z2);

            pts1.push(p1);
            pts2.push(p2);

            // Add a connecting "rung" every N points
            if (i % 6 === 0 && i !== 0 && i !== numPoints) {
                const distance = p1.distanceTo(p2);
                const position = p1.clone().lerp(p2, 0.5); // Midpoint

                dummyObj.position.copy(position);
                dummyObj.lookAt(p1);
                dummyObj.rotateX(Math.PI / 2);
                dummyObj.scale.set(1, distance, 1);
                dummyObj.updateMatrix();

                sMatrices.push(dummyObj.matrix.clone());
            }
        }

        return {
            curve1: new THREE.CatmullRomCurve3(pts1),
            curve2: new THREE.CatmullRomCurve3(pts2),
            rungMatrices: sMatrices,
            rungsCount: sMatrices.length
        };
    }, [numPoints, numTurns, height, radius]);

    // Set instance matrices on mount
    const rungsRef = useRef<THREE.InstancedMesh>(null);
    useEffect(() => {
        if (rungsRef.current && rungMatrices.length > 0) {
            rungMatrices.forEach((matrix, i) => {
                rungsRef.current!.setMatrixAt(i, matrix);
            });
            rungsRef.current.instanceMatrix.needsUpdate = true;
        }
    }, [rungMatrices]);

    // Generate many ambient floating particles for a premium scientific vibe
    const particlesCount = 800;
    const particles = useMemo(() => {
        const pts = new Float32Array(particlesCount * 3);
        const sizes = new Float32Array(particlesCount);

        for (let i = 0; i < particlesCount; i++) {
            // Spread particles across a wide volume
            pts[i * 3] = (Math.random() - 0.5) * 45;      // x spread
            pts[i * 3 + 1] = (Math.random() - 0.5) * 70;  // y spread (height)
            pts[i * 3 + 2] = (Math.random() - 0.5) * 25;  // z depth spread

            // Randomize sizes a bit
            sizes[i] = Math.random() * 0.15 + 0.05;
        }
        return { pts, sizes };
    }, []);

    // Animation loop
    useFrame((state, delta) => {
        if (groupRef.current) {
            // Smooth, slow, majestic rotation
            groupRef.current.rotation.y += delta * 0.1;
        }
        if (particlesRef.current) {
            // Slowly rotate the floating particles
            particlesRef.current.rotation.y -= delta * 0.03;
            // Particles drift upwards slowly
            particlesRef.current.position.y = (state.clock.elapsedTime * 0.5) % 30;
        }
    });

    return (
        <group>
            {/* Centered for visibility, tilted diagonally */}
            <group ref={groupRef} position={[0, 0, 0]} rotation={[0, Math.PI / 8, -Math.PI / 6]}>

                {/* Vibrant Emissive Material Setup for Backbone */}
                <mesh>
                    <tubeGeometry args={[curve1, 300, 0.4, 16, false]} />
                    <meshStandardMaterial
                        color="#10b981"
                        emissive="#0f3127ff"
                        emissiveIntensity={1.5}
                        roughness={0.2}
                        metalness={0.6}
                    />
                </mesh>

                {/* Backbone 2 */}
                <mesh>
                    <tubeGeometry args={[curve2, 300, 0.4, 16, false]} />
                    <meshStandardMaterial
                        color="#10b981"
                        emissive="#0f3127ff"
                        emissiveIntensity={1.5}
                        roughness={0.2}
                        metalness={0.6}
                    />
                </mesh>

                {/* Connecting Rungs */}
                <instancedMesh
                    ref={rungsRef}
                    args={[undefined, undefined, rungsCount]}
                >
                    <cylinderGeometry args={[0.08, 0.08, 1, 12]} />
                    <meshStandardMaterial
                        color="#36f356ff"
                        emissive="#34d399"
                        emissiveIntensity={0.8}
                        roughness={0.3}
                        opacity={0.8}
                        transparent
                    />
                </instancedMesh>
            </group>

            {/* Floating background particles */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={particlesCount} array={particles.pts} itemSize={3} args={[particles.pts, 3]} />
                    <bufferAttribute attach="attributes-size" count={particlesCount} array={particles.sizes} itemSize={1} args={[particles.sizes, 1]} />
                </bufferGeometry>
                <pointsMaterial size={0.15} color="#34d399" transparent opacity={0.7} sizeAttenuation={true} />
            </points>
        </group>
    );
}
