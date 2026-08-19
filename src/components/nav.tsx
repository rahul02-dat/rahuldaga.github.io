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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-[5%] transition-all duration-300 ${
          scrolled || isMobileMenuOpen
            ? "bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-sm tracking-[0.14em] text-[var(--accent)]">
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
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block font-mono text-[0.68rem] tracking-[0.1em] uppercase text-[var(--accent)] border border-[var(--accent)] px-3.5 py-1.5 rounded-sm hover:bg-[var(--accent)]/[0.07] transition-colors ml-2 mr-2"
          >
            Resume
          </a>
          <ThemeToggle />
          <button 
            className="md:hidden ml-2 p-1 text-[var(--dim)] hover:text-[var(--accent)] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-xl flex flex-col items-center justify-center pt-16">
          <div className="flex flex-col gap-6 items-center w-full">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono text-xl tracking-[0.1em] uppercase text-[var(--dim)] hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono text-xl tracking-[0.1em] uppercase text-[var(--dim)] hover:text-[var(--accent)] transition-colors"
            >
              Blog
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 font-mono text-xl tracking-[0.1em] uppercase text-[var(--accent)] border border-[var(--accent)] px-6 py-3 rounded-sm hover:bg-[var(--accent)]/[0.07] transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
