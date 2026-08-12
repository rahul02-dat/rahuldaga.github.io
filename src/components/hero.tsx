"use client";

import { useState } from "react";
import Link from "next/link";
import { profile } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { TypingText } from "./typing-text";

export function Hero() {
  const [showContent, setShowContent] = useState(false);

  return (
    <section id="hero" className="px-[5%]">
      <div className="max-w-[1300px] mx-auto pt-[20vh] pb-16 flex flex-col items-center text-center justify-center">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.18em] text-[var(--dim)] mb-4">
            Hey, I&apos;m
          </p>
        </Reveal>
        <Reveal>
          <h1 className="font-display text-[clamp(5rem,14vw,10rem)] font-black leading-[0.88] tracking-[-0.025em] text-[var(--text)] mb-2.5">
            <TypingText text={profile.name} onComplete={() => setShowContent(true)} />
            <span className="inline-block w-1.5 h-[0.82em] bg-[var(--accent)] ml-1 align-middle cursor-blink" />
          </h1>
        </Reveal>
        <div className={`transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <Reveal>
            <p className="font-mono text-[clamp(0.8rem,1.4vw,0.95rem)] text-[var(--dim)] tracking-[0.08em] mb-4">
              A developer
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-28 mb-10">
              {[
                { href: "/about", label: "About" },
                { href: "/skills", label: "Skills" },
                { href: "/projects", label: "Projects" },
                { href: "/experience", label: "Experience" },
                { href: "/research", label: "Research" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[0.7rem] md:text-[0.75rem] tracking-[0.1em] uppercase text-[var(--dim)] px-4 py-2 md:px-5 md:py-2.5 rounded-sm border border-[var(--border)] transition-all duration-300 bg-[var(--s2)] hover-glow-breathe hover:-translate-y-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
