"use client";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export function ScrambleText({ text, className = "", onComplete }: { text: string; className?: string; onComplete?: () => void }) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const [hasScrambled, setHasScrambled] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasScrambled) {
          setIsScrambling(true);
          setHasScrambled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasScrambled]);

  useEffect(() => {
    if (!isScrambling) return;

    let frame = 0;
    // Longer text needs more frames to look good, but capped to avoid taking forever
    const totalFrames = Math.min(Math.max(text.length / 2, 40), 100); 
    let animationFrameId: number;

    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      const revealCount = Math.floor(text.length * progress);
      
      let scrambled = "";
      for (let i = 0; i < text.length; i++) {
        if (i < revealCount) {
          scrambled += text[i];
        } else if (text[i] === " ") {
          scrambled += " ";
        } else {
          scrambled += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      
      setDisplayText(scrambled);
      
      if (frame < totalFrames) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
        setIsScrambling(false);
        onComplete?.();
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isScrambling, text]);

  // Start with opacity-0, fade to opacity-100 when scrambling starts
  return (
    <span 
      ref={ref} 
      className={`${className} transition-opacity duration-[400ms] ${hasScrambled ? 'opacity-100' : 'opacity-0'}`}
    >
      {displayText}
    </span>
  );
}
