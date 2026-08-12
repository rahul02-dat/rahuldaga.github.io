import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ParticleNetwork } from "@/components/particle-network";
import { UfoCursor } from "@/components/ufo-cursor";
import { Socials } from "@/components/socials";
export const metadata: Metadata = {
  title: "Rahul Daga — ML Engineer",
  description:
    "ML Engineer and AI researcher working on agentic systems, LLM security, and atmospheric ML at ISRO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <UfoCursor />
          <ParticleNetwork />
          <Socials />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
