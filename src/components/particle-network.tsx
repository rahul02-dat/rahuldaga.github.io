"use client";

import { useEffect, useRef } from "react";

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    const connectionDistance = 150;
    const mouseConnectionDistance = 250;
    
    let animationFrameId: number;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", resize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = Math.random() * 2 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas!.height) this.vy = -this.vy;

        // Interactive repelling from mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseConnectionDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          // The closer, the stronger the push
          const force = (mouseConnectionDistance - distance) / mouseConnectionDistance;
          
          // Subtract to push away
          this.x -= forceDirectionX * force * 4.5;
          this.y -= forceDirectionY * force * 4.5;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.6)"; // Blue accent
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 8000); // More dots!
      const finalCount = Math.min(Math.max(count, 50), 200); 
      
      for (let i = 0; i < finalCount; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        // Handle logic inside Particle.update instead of doing it all here
        // But wait, the repel logic is currently inside Particle.update!
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60"
    />
  );
}
