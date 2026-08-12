"use client";

import { useState, useEffect, useRef } from "react";
import { projects, profile, type ProjectType } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const typeStyles: Record<ProjectType, { bar: string; text: string; badgeBorder: string; badgeBg: string }> = {
  ml: {
    bar: "bg-[var(--accent)]",
    text: "text-[var(--accent)]",
    badgeBorder: "border-[var(--accent)]/30",
    badgeBg: "bg-[var(--accent)]/[0.07]",
  },
  sec: {
    bar: "bg-[var(--red)]",
    text: "text-[var(--red)]",
    badgeBorder: "border-[var(--red)]/30",
    badgeBg: "bg-[var(--red)]/[0.07]",
  },
  cv: {
    bar: "bg-[var(--green)]",
    text: "text-[var(--green)]",
    badgeBorder: "border-[var(--green)]/30",
    badgeBg: "bg-[var(--green)]/[0.07]",
  },
  misc: {
    bar: "bg-[var(--amber)]",
    text: "text-[var(--amber)]",
    badgeBorder: "border-[var(--amber)]/30",
    badgeBg: "bg-[var(--amber)]/[0.07]",
  },
};

const tickerItems = [
  "ARTIFICIAL INTELLIGENCE",
  "LARGE LANGUAGE MODELS",
  "MACHINE LEARNING INFRASTRUCTURE",
  "GENERATIVE AI",
  "RETRIEVAL AUGMENTED GENERATION",
  "CRYPTANALYSIS",
  "COMPUTER VISION",
  "AI HARNESS",
  "NEURAL NETWORKS",
  "DISTRIBUTED TRAINING",
  "MLOPS & PIPELINES",
  "DEEP LEARNING",
];

export function Projects() {
  const [showContent, setShowContent] = useState(false);

  return (
    <section id="projects" className="py-28">
      <div className="px-[5%] max-w-[1300px] mx-auto mb-12">
        <SectionHeading eyebrow="Projects" title="Things I've Built" onComplete={() => setShowContent(true)} />
      </div>
      <div className={`transition-opacity duration-700 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="overflow-hidden border-y border-[var(--border)] py-3.5 mb-24">
          <div className="flex whitespace-nowrap ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-[var(--dim)] px-10 flex-shrink-0"
              >
                {item} <span className="text-[var(--accent)]">·</span>
              </span>
            ))}
          </div>
        </div>
        
        <div className="max-w-[1300px] mx-auto px-[5%]">
          <div className="flex flex-col gap-10 w-full pb-[30vh]">
            {projects.map((project, idx) => {
              const style = typeStyles[project.type];
              return (
                <div 
                  key={project.num}
                  className="sticky z-10 w-full"
                  style={{ top: `calc(12vh + ${idx * 40}px)` }}
                >
                  <Reveal>
                    <div className="relative overflow-hidden border border-[var(--border)] rounded-xl p-9 lg:px-11 lg:py-10 bg-[var(--s1)] hover:border-[var(--border-hi)] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col items-center text-center backdrop-blur-md">
                      <span className={`absolute top-0 left-0 w-full h-[3px] ${style.bar}`} />
                      
                      <p className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-[var(--dim)] mb-3">
                        Project / {project.num}
                      </p>
                      
                      <div className="flex items-center justify-center gap-4 mb-2">
                        <h3 className="font-display text-[1.7rem] font-extrabold text-[var(--text)] tracking-[-0.01em] leading-tight hover:text-[var(--accent)] transition-colors">
                          {project.github ? (
                            <a href={project.github} target="_blank" rel="noreferrer">
                              {project.name}
                            </a>
                          ) : (
                            project.name
                          )}
                        </h3>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--dim)] hover:text-[var(--text)] transition-colors mt-1" aria-label="View on GitHub">
                            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
                          </a>
                        )}
                      </div>
                      
                      <div className="flex flex-col items-center gap-3 mb-6">
                        <p className={`font-mono text-[0.64rem] ${style.text}`}>{project.metric}</p>
                        <span
                          className={`font-mono text-[0.58rem] tracking-[0.18em] uppercase px-3 py-1 rounded-[2px] border whitespace-nowrap flex-shrink-0 ${style.text} ${style.badgeBorder} ${style.badgeBg}`}
                        >
                          {project.badge}
                        </span>
                      </div>

                      <div className="mb-7">
                        <p className="text-base leading-[1.8] text-[var(--dim)]">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="w-full py-16 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 relative z-20">
          <Reveal>
            <div className="flex flex-col items-center gap-5">
              <span className="font-mono text-[0.65rem] tracking-widest uppercase text-[var(--dim)] text-center">For more projects</span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-[var(--text)] hover:text-[var(--accent)] hover:-translate-y-2 transition-all duration-300 p-5 rounded-full bg-[var(--s1)] border border-[var(--border)] hover:border-[var(--accent)] shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col items-center gap-5">
              <span className="font-mono text-[0.65rem] tracking-widest uppercase text-[var(--dim)] text-center">For project collaborations</span>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="text-[var(--text)] hover:text-[var(--accent)] hover:-translate-y-2 transition-all duration-300 p-5 rounded-full bg-[var(--s1)] border border-[var(--border)] hover:border-[var(--accent)] shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
