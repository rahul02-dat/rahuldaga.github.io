"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-[5%] transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Link href="/" className="font-mono text-sm tracking-[0.14em] text-[var(--accent)]">
        RD<span className="text-[var(--dim)]">.dev</span>
      </Link>
      <div className="flex gap-1 items-center">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hidden md:inline-block font-mono text-[0.68rem] tracking-[0.1em] uppercase text-[var(--dim)] px-3.5 py-2 rounded-sm hover:text-[var(--accent)] hover:bg-[var(--accent)]/[0.07] transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/blog"
          className="hidden md:inline-block font-mono text-[0.68rem] tracking-[0.1em] uppercase text-[var(--dim)] px-3.5 py-2 rounded-sm hover:text-[var(--accent)] hover:bg-[var(--accent)]/[0.07] transition-colors"
        >
          Blog
        </Link>
        <ThemeToggle />
        <a
          href="mailto:rahul.0411.da@gmail.com"
          className="font-mono text-[0.68rem] tracking-[0.1em] uppercase px-4 py-2 rounded-sm border border-[var(--border-hi)] text-[var(--accent)] ml-1.5 hover:bg-[var(--accent)]/10 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
