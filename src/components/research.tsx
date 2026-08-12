"use client";

import { useState } from "react";
import { certifications, publications } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Research() {
  const [showContent, setShowContent] = useState(false);

  return (
    <section id="research" className="py-28 px-[5%]">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        <SectionHeading eyebrow="Research" title="Publications & Certifications" onComplete={() => setShowContent(true)} />
        <div className={`w-full flex flex-col items-center transition-opacity duration-700 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {publications.map((pub) => (
          <Reveal key={pub.title}>
            <div className="border border-[var(--border)] border-t-[3px] border-t-[var(--red)] rounded-md px-10 py-9 bg-[var(--s2)] hover:border-[var(--border-hi)] transition-colors mb-10 w-full flex flex-col items-center text-center">
              <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-[var(--red)] mb-2.5">
                {pub.venue}
              </div>
              <div className="font-display text-[1.45rem] font-extrabold text-[var(--text)] mb-3.5 leading-tight">
                {pub.title}
              </div>
              <p className="text-base leading-[1.8] text-[var(--dim)] mb-5">
                {pub.body}
              </p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {pub.tags.map((tag) => (
                  <span key={tag} className="chip chip-green">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal>
          <div className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-[var(--dim)] flex items-center justify-center gap-4 my-12 w-full">
            <span className="w-10 h-px bg-[var(--border)]" />
            Certifications
            <span className="w-10 h-px bg-[var(--border)]" />
          </div>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] justify-center gap-4 w-full">
          {certifications.map((cert) => {
            const hasLink = 'link' in cert && cert.link;
            const CardContent = (
              <div className={`bg-[var(--s2)] border border-[var(--border)] rounded-[5px] p-6 hover:border-[var(--border-hi)] hover:-translate-y-1 transition-all flex flex-col items-center text-center h-full ${hasLink ? 'cursor-pointer' : ''}`}>
                <div className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[var(--accent)] mb-1.5">
                  {cert.issuer}
                </div>
                <div className="text-[0.9rem] font-medium text-[var(--text)] leading-snug">{cert.name}</div>
              </div>
            );

            return (
              <Reveal key={cert.name}>
                {hasLink ? (
                  <a href={(cert as any).link} target="_blank" rel="noreferrer" className="block h-full">
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </Reveal>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
