"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Contact() {
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000); // Reset after 5s
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 px-[5%]">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        <SectionHeading eyebrow="Contact" title="Let's Talk" onComplete={() => setShowContent(true)} />
        
        <div className={`w-full transition-opacity duration-700 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <Reveal>
            <div className="mb-10 flex justify-center">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                Available 16/5
              </div>
            </div>
            
            <div className="bg-[var(--s2)] border border-[var(--border)] rounded-md p-8 md:p-12 hover:border-[var(--border-hi)] transition-colors w-full">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--dim)] text-center md:text-left">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="John Doe" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="bg-[var(--bg)] border border-[var(--border)] rounded-sm px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors text-center md:text-left" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--dim)] text-center md:text-left">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="john@example.com" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="bg-[var(--bg)] border border-[var(--border)] rounded-sm px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors text-center md:text-left" 
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--dim)] text-center md:text-left">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Hello Rahul..." 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="bg-[var(--bg)] border border-[var(--border)] rounded-sm px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none text-center md:text-left"
                  ></textarea>
                </div>
                
                <div className="flex flex-col items-center gap-4 mt-4">
                  <button 
                    type="submit" 
                    disabled={status === "loading" || status === "success"}
                    className="bg-[var(--accent)] text-white font-mono text-[0.8rem] tracking-[0.1em] uppercase px-8 py-4 rounded-sm hover:opacity-90 transition-opacity w-full md:w-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
                  </button>
                  
                  {status === "success" && (
                    <span className="text-[var(--green)] font-mono text-[0.75rem]">Message delivered!</span>
                  )}
                  {status === "error" && (
                    <span className="text-[var(--red)] font-mono text-[0.75rem]">Failed to send. Try again.</span>
                  )}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
