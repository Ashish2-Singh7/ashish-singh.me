"use client";
import React, { useEffect, useRef, useState } from 'react';

interface Bubble {
    x: number;
    y: number;
    z: number;
    radius: number;
    vx: number;
    vy: number;
    vz: number;
    opacity: number;
    hue: number;
    life: number;
    maxLife: number;
}

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const bubblesRef = useRef<Bubble[]>([]);
    const animationIdRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();

        // Initialize bubbles with better distribution
        if (bubblesRef.current.length === 0) {
            for (let i = 0; i < 35; i++) {
                bubblesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * 200 + 50,
                    radius: Math.random() * 50 + 15,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                    vz: (Math.random() - 0.5) * 0.3,
                    opacity: Math.random() * 0.3 + 0.1,
                    hue: Math.random() * 40 + 210, // Blue range (210-250)
                    life: Math.random() * 1000,
                    maxLife: 1000 + Math.random() * 2000,
                });
            }
        }

        const animate = (currentTime: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            bubblesRef.current.forEach((bubble, index) => {
                // Enhanced mouse interaction with smooth repulsion
                const dx = bubble.x - mousePos.x;
                const dy = bubble.y - mousePos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const force = Math.pow((200 - distance) / 200, 2) * 0.8;
                    const angle = Math.atan2(dy, dx);
                    bubble.vx += Math.cos(angle) * force;
                    bubble.vy += Math.sin(angle) * force;
                }

                // Apply physics with smooth damping
                bubble.x += bubble.vx;
                bubble.y += bubble.vy;
                bubble.z += bubble.vz;

                // Smooth velocity damping
                bubble.vx *= 0.99;
                bubble.vy *= 0.99;
                bubble.vz *= 0.98;

                // Add subtle drift movement
                bubble.vx += Math.sin(currentTime * 0.001 + bubble.x * 0.01) * 0.02;
                bubble.vy += Math.cos(currentTime * 0.001 + bubble.y * 0.01) * 0.02;

                // Enhanced boundary handling with elastic bounce
                if (bubble.x < -100) {
                    bubble.x = canvas.width + 100;
                    bubble.vx = Math.abs(bubble.vx) * -0.5;
                } else if (bubble.x > canvas.width + 100) {
                    bubble.x = -100;
                    bubble.vx = Math.abs(bubble.vx) * 0.5;
                }

                if (bubble.y < -100) {
                    bubble.y = canvas.height + 100;
                    bubble.vy = Math.abs(bubble.vy) * -0.5;
                } else if (bubble.y > canvas.height + 100) {
                    bubble.y = -100;
                    bubble.vy = Math.abs(bubble.vy) * 0.5;
                }

                // Enhanced Z-depth oscillation
                bubble.z += Math.sin(currentTime * 0.002 + bubble.x * 0.005) * 0.8;
                bubble.z = Math.max(30, Math.min(250, bubble.z));

                // Life cycle management
                bubble.life += 1;
                if (bubble.life > bubble.maxLife) {
                    bubble.life = 0;
                    bubble.x = Math.random() * canvas.width;
                    bubble.y = Math.random() * canvas.height;
                    bubble.z = Math.random() * 200 + 50;
                    bubble.vx = (Math.random() - 0.5) * 0.5;
                    bubble.vy = (Math.random() - 0.5) * 0.5;
                }

                // Enhanced 3D calculations
                const scale = bubble.z / 150;
                const size = bubble.radius * scale;
                const lifeFactor = Math.sin((bubble.life / bubble.maxLife) * Math.PI);
                const alpha = bubble.opacity * scale * lifeFactor * 0.8;

                // Create sophisticated gradient with depth
                const gradient = ctx.createRadialGradient(
                    bubble.x - size * 0.4, bubble.y - size * 0.4, 0,
                    bubble.x, bubble.y, size * 1.2
                );

                // Enhanced color scheme for navy/blue theme
                const lightness = 40 + (bubble.z - 50) * 0.3;
                const saturation = 85 + scale * 15;

                gradient.addColorStop(0, `hsla(${bubble.hue}, ${saturation}%, ${lightness + 30}%, ${alpha * 0.9})`);
                gradient.addColorStop(0.2, `hsla(${bubble.hue}, ${saturation}%, ${lightness + 15}%, ${alpha * 0.7})`);
                gradient.addColorStop(0.6, `hsla(${bubble.hue - 10}, ${saturation - 10}%, ${lightness}%, ${alpha * 0.5})`);
                gradient.addColorStop(0.9, `hsla(${bubble.hue - 20}, ${saturation - 30}%, ${lightness - 15}%, ${alpha * 0.2})`);
                gradient.addColorStop(1, `hsla(${bubble.hue - 30}, ${saturation - 40}%, ${lightness - 25}%, 0)`);

                // Draw main bubble with enhanced 3D effect
                ctx.save();
                ctx.globalCompositeOperation = 'screen';
                ctx.beginPath();
                ctx.arc(bubble.x, bubble.y, size, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Enhanced highlight for 3D depth
                const highlightGradient = ctx.createRadialGradient(
                    bubble.x - size * 0.5, bubble.y - size * 0.5, 0,
                    bubble.x - size * 0.3, bubble.y - size * 0.3, size * 0.7
                );
                highlightGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.6})`);
                highlightGradient.addColorStop(0.5, `rgba(200, 220, 255, ${alpha * 0.3})`);
                highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.beginPath();
                ctx.arc(bubble.x - size * 0.3, bubble.y - size * 0.3, size * 0.4, 0, Math.PI * 2);
                ctx.fillStyle = highlightGradient;
                ctx.fill();

                // Add subtle rim light
                ctx.strokeStyle = `hsla(${bubble.hue + 20}, 60%, 70%, ${alpha * 0.3})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(bubble.x, bubble.y, size * 0.9, 0, Math.PI * 2);
                ctx.stroke();

                ctx.restore();
            });

            animationIdRef.current = requestAnimationFrame(animate);
        };

        animationIdRef.current = requestAnimationFrame(animate);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleResize = () => {
            resizeCanvas();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, [mousePos.x, mousePos.y]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{
                background: 'radial-gradient(ellipse at center, #0f172a 0%, #020617 100%)'
            }}
        />
    );
};

export default AnimatedBackground;