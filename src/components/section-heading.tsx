import { Reveal } from "./reveal";
import { ScrambleText } from "./scramble-text";

export function SectionHeading({
  eyebrow,
  title,
  onComplete,
}: {
  eyebrow: string;
  title: string;
  onComplete?: () => void;
}) {
  return (
    <>
      <Reveal>
        <p className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[var(--accent)] mb-5 flex items-center justify-center gap-3.5">
          <span className="inline-block w-7 h-px bg-[var(--accent)]" />
          {eyebrow}
          <span className="inline-block w-7 h-px bg-[var(--accent)]" />
        </p>
      </Reveal>
      <Reveal>
        <h2 className="font-display text-[clamp(2.6rem,5vw,3.8rem)] font-black text-[var(--text)] tracking-[-0.015em] mb-14 text-center">
          <ScrambleText text={title} onComplete={onComplete} />
        </h2>
      </Reveal>
    </>
  );
}
