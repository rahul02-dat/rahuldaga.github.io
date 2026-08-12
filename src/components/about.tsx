"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { chipClass } from "@/lib/chip";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  const [showContent, setShowContent] = useState(false);
  const [activeInterest, setActiveInterest] = useState<string | null>(null);

  return (
    <section id="about" className="py-28 px-[5%]">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeading eyebrow="About" title="Who I Am" onComplete={() => setShowContent(true)} />
        <div className={`flex flex-col items-center text-center gap-14 transition-opacity duration-700 ease-in-out w-full ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full flex flex-col items-center">
            {profile.bioParagraphs.map((p, i) => (
              <Reveal key={i}>
                <p className="text-base leading-[1.9] text-[var(--dim)] mb-6 text-center">
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal>
              <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">

                <ContactRow label="Location">{profile.location}</ContactRow>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="flex flex-col items-center">
              <h3 className="font-display text-2xl font-extrabold text-[var(--text)] mb-6 tracking-tight text-center">
                Interests
              </h3>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 mb-4">
                {profile.interests?.map((interest) => {
                  const isActive = activeInterest === interest.label;
                  return (
                    <div
                      key={interest.label}
                      className="flex flex-col items-center relative"
                      onMouseEnter={() => setActiveInterest(interest.label)}
                      onMouseLeave={() => setActiveInterest(null)}
                    >
                      <button
                        className={`${chipClass(isActive ? "red" : "accent")} !text-[0.9rem] !px-4 !py-2 cursor-pointer hover:opacity-80 transition-opacity`}
                      >
                        {interest.label}
                      </button>
                      <div
                        className={`absolute top-full mt-2 z-20 grid transition-all duration-300 ease-in-out min-w-max ${
                          isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="overflow-hidden rounded-md shadow-2xl bg-[var(--s2)] border border-[var(--border)]">
                          <div className="p-3">
                            <p className="text-[0.95rem] text-[var(--dim)] px-3 border-l-2 border-[var(--accent)] py-1 whitespace-nowrap text-left">
                              {interest.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5 items-center">
      <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-[var(--dim)]">
        {label}
      </span>
      <span className="text-[0.88rem] text-[var(--text)]">{children}</span>
    </div>
  );
}
