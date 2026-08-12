"use client";

import { useEffect, useRef } from "react";

export function UfoCursor() {
  const ufoRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: -100, y: -100 });
  const ufo = useRef({ x: -100, y: -100 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current.x = e.touches[0].clientX;
        mouse.current.y = e.touches[0].clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });

    const animate = () => {
      const dx = mouse.current.x - ufo.current.x;
      const dy = mouse.current.y - ufo.current.y;
      
      // Speed of chasing
      ufo.current.x += dx * 0.05;
      ufo.current.y += dy * 0.05;

      // Rotation based on movement direction to make it look like it's flying
      const angle = dx * 0.1;

      if (ufoRef.current) {
        // Offset so it chases the cursor (e.g., down and to the right)
        ufoRef.current.style.transform = `translate3d(${ufo.current.x + 20}px, ${ufo.current.y + 20}px, 0) rotate(${angle}deg)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={ufoRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ willChange: "transform" }}
    >
      <div className="relative flex flex-col items-center">
        <span className="text-xl">🛸</span>
      </div>
    </div>
  );
}
