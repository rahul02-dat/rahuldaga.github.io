import { profile } from "@/data/portfolio";

export function EmailSide() {
  return (
    <div className="hidden md:flex fixed bottom-0 right-10 z-50 flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-[var(--border-hi)]">
      <a
        href={`mailto:${profile.email}`}
        className="font-mono text-[0.75rem] tracking-[0.2em] text-[var(--dim)] hover:text-[var(--accent)] hover:-translate-y-2 transition-all duration-300 py-4"
        style={{ writingMode: 'vertical-rl' }}
      >
        {profile.email}
      </a>
    </div>
  );
}
