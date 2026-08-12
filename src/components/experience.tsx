"use client";

import { useState } from "react";
import { experiences, type Experience as ExperienceItem } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";


const accentBar: Record<ExperienceItem["accent"], string> = {
  isro: "bg-[var(--amber)]",
  archsoft: "bg-[var(--accent)]",
  edu: "bg-[var(--green)]",
};

const accentText: Record<ExperienceItem["accent"], string> = {
  isro: "text-[var(--amber)]",
  archsoft: "text-[var(--accent)]",
  edu: "text-[var(--green)]",
};

export function Experience() {
  const [showContent, setShowContent] = useState(false);

  return (
    <section id="experience" className="py-28 px-[5%]">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        <SectionHeading eyebrow="Experience" title="Where I've Worked" onComplete={() => setShowContent(true)} />
        <div className={`flex flex-col items-center gap-6 w-full transition-opacity duration-700 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          {experiences.map((exp) => (
            <Reveal key={exp.role}>
              <div className="relative overflow-hidden bg-[var(--s1)] border border-[var(--border)] rounded-md px-10 py-8 hover:border-[var(--border-hi)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center w-full">
                <span className={`absolute top-0 left-0 w-full h-[3px] ${accentBar[exp.accent]}`} />
                
                <div className="flex flex-col items-center gap-3 mb-2">
                  <div className="font-display text-[1.4rem] font-extrabold text-[var(--text)]">
                    {exp.role}
                  </div>
                  <span
                    className={`font-mono text-[0.58rem] tracking-[0.14em] uppercase px-2.5 py-1 rounded-[2px] whitespace-nowrap flex-shrink-0 ${
                      exp.badgeType === "now"
                        ? "bg-[var(--green)]/10 text-[var(--green)] border border-[var(--green)]/28"
                        : "bg-[var(--accent)]/[0.08] text-[var(--accent)] border border-[var(--accent)]/22"
                    }`}
                  >
                    {exp.badge}
                  </span>
                </div>
                
                <div className={`font-mono text-[0.74rem] mb-6 ${accentText[exp.accent]}`}>{exp.org}</div>
                
                {exp.points.length > 0 && (
                  <div className="flex flex-col items-center gap-3.5 mb-6">
                    {exp.points.map((point, i) => (
                      <p key={i} className="text-base leading-[1.78] text-[var(--dim)]">
                        {point}
                      </p>
                    ))}
                  </div>
                )}
                
                {exp.chips.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {exp.chips.map((chip) => (
                      <span key={chip} className="chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
