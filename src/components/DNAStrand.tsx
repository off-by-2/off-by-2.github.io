"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function DNAStrand() {
    const groupRef = useRef<THREE.Group>(null);
    const particlesRef = useRef<THREE.Points>(null);

    // Configuration for the DNA helix
    const numTurns = 4; // How many 360 twists
    const height = 24;   // Total height
    const radius = 2.5;  // Width of the helix
    const pointsPerTurn = 30; // Resolution of the curve
    const numPoints = numTurns * pointsPerTurn;

    // Generate the main backbone curves and rung positions
    const { curve1, curve2, rungs } = useMemo(() => {
        const pts1 = [];
        const pts2 = [];
        const rungLines = [];

        for (let i = 0; i <= numPoints; i++) {
            // t goes from 0 to 1 along the length of the strand
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
                rungLines.push({ p1, p2 });
            }
        }

        return {
            curve1: new THREE.CatmullRomCurve3(pts1),
            curve2: new THREE.CatmullRomCurve3(pts2),
            rungs: rungLines
        };
    }, []);

    // Generate some ambient floating particles for the "biotech" vibe
    const particlesCount = 200;
    const particles = useMemo(() => {
        const pts = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            // Spread particles around the DNA bounds
            pts[i * 3] = (Math.random() - 0.5) * 15;      // x
            pts[i * 3 + 1] = (Math.random() - 0.5) * 30;  // y
            pts[i * 3 + 2] = (Math.random() - 0.5) * 15;  // z
        }
        return pts;
    }, []);

    // Animation loop
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2; // Rotate the whole DNA
        }
        if (particlesRef.current) {
            // Slowly rotate the floating particles in the opposite direction
            particlesRef.current.rotation.y -= delta * 0.05;
            particlesRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 1;
        }
    });

    return (
        <group>
            <group ref={groupRef} rotation={[0, 0, Math.PI / 10]}> {/* Slight diagonal angle */}

                {/* Backbone 1 */}
                <mesh>
                    <tubeGeometry args={[curve1, 200, 0.4, 12, false]} />
                    {/* Neon green emissive material */}
                    <meshStandardMaterial color="#34d399" emissive="#059669" emissiveIntensity={1.2} roughness={0.2} metalness={0.6} />
                </mesh>

                {/* Backbone 2 */}
                <mesh>
                    <tubeGeometry args={[curve2, 200, 0.4, 12, false]} />
                    <meshStandardMaterial color="#34d399" emissive="#059669" emissiveIntensity={1.2} roughness={0.2} metalness={0.6} />
                </mesh>

                {/* Connecting Rungs */}
                {rungs.map((rung, i) => {
                    const distance = rung.p1.distanceTo(rung.p2);
                    const position = rung.p1.clone().lerp(rung.p2, 0.5); // Midpoint

                    // Calculate rotation to point from p1 to p2
                    const dummy = new THREE.Object3D();
                    dummy.position.copy(position);
                    dummy.lookAt(rung.p1);
                    dummy.rotateX(Math.PI / 2); // Cylinder goes along Y, align to Z (lookAt)

                    return (
                        <mesh key={i} position={dummy.position} rotation={dummy.rotation}>
                            <cylinderGeometry args={[0.08, 0.08, distance, 8]} />
                            <meshStandardMaterial color="#6ee7b7" emissive="#10b981" emissiveIntensity={0.8} opacity={0.8} transparent />
                        </mesh>
                    )
                })}
            </group>

            {/* Floating background particles */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={particlesCount} array={particles} itemSize={3} args={[particles, 3]} />
                </bufferGeometry>
                <pointsMaterial size={0.15} color="#6ee7b7" transparent opacity={0.6} sizeAttenuation={true} />
            </points>
        </group>
    );
}
