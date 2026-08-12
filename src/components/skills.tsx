"use client";

import { useState, useEffect } from "react";
import { skillTabs } from "@/data/portfolio";
import { chipClass } from "@/lib/chip";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { useTheme } from "./theme-provider";

export function Skills() {
  const [active, setActive] = useState<(typeof skillTabs)[number]["id"]>(skillTabs[0].id);
  const [showContent, setShowContent] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTab = skillTabs.find((t) => t.id === active) ?? skillTabs[0];
  const iconColor = !mounted ? "" : theme === "light" ? "111827" : "f3f4f6";

  return (
    <section id="skills" className="py-28 px-[5%]">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeading eyebrow="Skills" title="Tech Stack" onComplete={() => setShowContent(true)} />
        <div className={`transition-opacity duration-700 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Reveal>
          <div className="flex justify-center gap-1.5 flex-wrap mb-10">
            {skillTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`font-mono text-[0.66rem] tracking-[0.1em] uppercase px-4.5 py-2 rounded-sm border transition-all ${
                  active === tab.id
                    ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/[0.08]"
                    : "border-[var(--border)] text-[var(--dim)] hover:border-[var(--border-hi)] hover:text-[var(--text)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="flex justify-center flex-wrap gap-4 mt-2">
            {activeTab.skills.map((skill, index) => (
              <div
                key={`${active}-${skill.name}`}
                title={skill.name}
                className="flex items-center justify-center w-14 h-14 rounded-lg border border-[var(--border)] bg-[var(--s2)] hover:border-[var(--border-hi)] hover:bg-[rgba(59,130,246,0.05)] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer group animate-stack-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={`https://cdn.simpleicons.org/${(skill as any).icon}${iconColor ? `/${iconColor}` : ''}`}
                  alt={skill.name}
                  className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
