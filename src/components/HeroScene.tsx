"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const wrapper = canvas.parentElement;
        if (!wrapper) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, wrapper.clientWidth / wrapper.clientHeight, 0.1, 1000);
        camera.position.set(0, 0, 80);

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        function createShapeTexture(type: string, colorStr: string) {
            const size = 128;
            const cv = document.createElement('canvas');
            cv.width = size; cv.height = size;
            const ctx = cv.getContext('2d');
            if (!ctx) return new THREE.CanvasTexture(cv);

            ctx.fillStyle = colorStr;
            const center = size / 2;

            if (type === 'shard') {
                ctx.beginPath(); ctx.moveTo(size * 0.2, size * 0.2);
                ctx.lineTo(size * 0.8, size * 0.3); ctx.lineTo(size * 0.6, size * 0.9);
                ctx.lineTo(size * 0.1, size * 0.7); ctx.closePath(); ctx.fill();
            } else if (type === 'rough') {
                ctx.beginPath(); ctx.arc(center, center, size * 0.35, 0, Math.PI * 2); ctx.fill();
                ctx.globalCompositeOperation = 'destination-out';
                ctx.beginPath(); ctx.arc(center * 1.4, center * 0.5, size * 0.2, 0, Math.PI * 2); ctx.fill();
                ctx.globalCompositeOperation = 'source-over';
            } else if (type === 'star') {
                const l = 5; const r1 = size * 0.4; const r2 = size * 0.2;
                ctx.beginPath();
                for (let i = 0; i < l * 2; i++) {
                    const r = i % 2 === 0 ? r1 : r2;
                    const a = i * Math.PI / l - Math.PI / 2;
                    ctx.lineTo(center + Math.cos(a) * r, center + Math.sin(a) * r);
                }
                ctx.closePath(); ctx.fill();
            } else {
                ctx.beginPath(); ctx.arc(center, center, size * 0.35, 0, Math.PI * 2); ctx.fill();
            }
            return new THREE.CanvasTexture(cv);
        }

        const texShard = createShapeTexture('shard', '#8b7355');
        const texRough = createShapeTexture('rough', '#708090');
        const texStar = createShapeTexture('star', '#1f3d2b');
        const texCircle = createShapeTexture('circle', '#2f5a43');

        const chaosSprites: any[] = [];
        const orderSprites: any[] = [];

        function initSprites() {
            for (let i = 0; i < 45; i++) {
                const map = Math.random() > 0.5 ? texShard : texRough;
                const mat = new THREE.SpriteMaterial({ map: map, transparent: true, opacity: 0.6 });
                const sprite = new THREE.Sprite(mat);
                const x = -80 + Math.random() * 70;
                const y = (Math.random() - 0.5) * 50;
                sprite.position.set(x, y, (Math.random() - 0.5) * 20);
                sprite.scale.setScalar(2 + Math.random() * 3);
                scene.add(sprite);
                chaosSprites.push({
                    sprite, speed: 0.05 + Math.random() * 0.1,
                    rotSpeed: (Math.random() - 0.5) * 0.04,
                    jitter: Math.random() * 0.02
                });
            }
            for (let i = 0; i < 40; i++) {
                const map = Math.random() > 0.4 ? texCircle : texStar;
                const mat = new THREE.SpriteMaterial({ map: map, transparent: true, opacity: 0.8 });
                const sprite = new THREE.Sprite(mat);
                const x = 10 + Math.random() * 70;
                const y = (Math.random() - 0.5) * 50;
                sprite.position.set(x, y, (Math.random() - 0.5) * 20);
                sprite.scale.setScalar(2 + Math.random() * 1.5);
                scene.add(sprite);
                orderSprites.push({
                    sprite, speed: 0.05 + Math.random() * 0.05,
                    phase: Math.random() * Math.PI * 2,
                    yBase: y
                });
            }
        }
        initSprites();

        let animationFrameId: number;

        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            const time = Date.now() * 0.001;

            chaosSprites.forEach(item => {
                item.sprite.position.x += item.speed;
                item.sprite.material.rotation += item.rotSpeed;
                item.sprite.position.y += Math.sin(time + item.sprite.position.x) * item.jitter;
                if (item.sprite.position.x > -12) {
                    item.sprite.material.opacity = Math.max(0, -item.sprite.position.x / 12);
                } else {
                    item.sprite.material.opacity = 0.6;
                }
                if (item.sprite.position.x > 0) {
                    item.sprite.position.x = -80;
                    item.sprite.position.y = (Math.random() - 0.5) * 50;
                }
            });

            orderSprites.forEach(item => {
                item.sprite.position.x += item.speed;
                item.sprite.position.y = item.yBase + Math.sin(time * 1.5 + item.sprite.position.x * 0.1 + item.phase) * 4;
                if (item.sprite.position.x < 25) {
                    item.sprite.material.opacity = Math.min(0.8, (item.sprite.position.x - 5) / 20);
                } else {
                    item.sprite.material.opacity = 0.8;
                }
                if (item.sprite.position.x > 80) {
                    item.sprite.position.x = 5;
                    item.yBase = (Math.random() - 0.5) * 50;
                }
            });

            renderer.render(scene, camera);
        }
        animate();

        const handleResize = () => {
            camera.aspect = wrapper.clientWidth / wrapper.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            renderer.dispose();
            scene.clear();
        };

    }, []);

    return (
        <div className="glass-container aspect-[4/3] md:aspect-[21/9] w-full">
            <div className="canvas-wrapper">
                <canvas id="vortex-canvas" ref={canvasRef}></canvas>
                <div className="salvia-blob">
                    <span className="text-white font-serif text-lg md:text-2xl font-semibold tracking-wide">Salvia</span>
                </div>
                <div className="viz-label left-4 md:left-10">
                    <span className="title">Input Stream</span>
                    <span className="desc">Chaos & Fragments</span>
                </div>
                <div className="viz-label right right-4 md:right-10">
                    <span className="title">Output Stream</span>
                    <span className="desc">Structured Care</span>
                </div>
            </div>
        </div>
    );
}
