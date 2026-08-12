import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ParticleNetwork } from "@/components/particle-network";
import { UfoCursor } from "@/components/ufo-cursor";
import { Socials } from "@/components/socials";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

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
      <body className={`${inter.variable} ${barlow.variable} ${plexMono.variable} antialiased`}>
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
