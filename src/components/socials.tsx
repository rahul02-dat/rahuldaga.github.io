"use client";

import { useState, useEffect } from "react";
import { profile } from "@/data/portfolio";

export function Socials() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 150;
      setAtBottom(isBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialsList = [
    {
      href: profile.github,
      label: "GitHub",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      )
    },
    {
      href: "https://www.linkedin.com/in/rahuldaga0211/",
      label: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      href: "https://instagram.com/_rahul.md04",
      label: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      href: `mailto:${profile.email}`,
      label: "Email",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ];

  return (
    <div className={`hidden md:flex fixed bottom-0 left-6 md:left-10 z-50 flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-20 md:after:h-24 after:bg-[var(--border-hi)] transition-opacity duration-500 ${atBottom ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {socialsList.map((social, index) => (
        <div 
          key={social.label} 
          className={atBottom ? 'animate-stack-up' : ''}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <a
            href={social.href}
            target={social.label === "Email" ? undefined : "_blank"}
            rel={social.label === "Email" ? undefined : "noreferrer"}
            aria-label={social.label}
            className="block text-[var(--dim)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all duration-300"
          >
            {social.icon}
          </a>
        </div>
      ))}
    </div>
  );
}
