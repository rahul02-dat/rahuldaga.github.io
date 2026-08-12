"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--dim)] border border-[var(--border)] rounded-sm px-3 py-1.5 transition-colors opacity-0"
      >
        Theme
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--dim)] border border-[var(--border)] rounded-sm px-3 py-1.5 hover:border-[var(--border-hi)] hover:text-[var(--accent)] transition-colors"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
