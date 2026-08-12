"use client";
import { useEffect, useRef, useState } from "react";

export function TypingText({ text, className = "", onComplete }: { text: string; className?: string; onComplete?: () => void }) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTyped) {
          setIsTyping(true);
          setHasTyped(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasTyped]);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeChar = () => {
      currentIndex++;
      setDisplayText(text.slice(0, currentIndex));
      
      if (currentIndex < text.length) {
        // Randomize typing speed slightly for realism
        timeoutId = setTimeout(typeChar, 70 + Math.random() * 60);
      } else {
        setIsTyping(false);
        onCompleteRef.current?.();
      }
    };

    timeoutId = setTimeout(typeChar, 100);

    return () => clearTimeout(timeoutId);
  }, [isTyping, text]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
