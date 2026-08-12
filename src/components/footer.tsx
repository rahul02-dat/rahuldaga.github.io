import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-[5%] flex justify-center items-center">
      <p className="font-mono text-[0.65rem] tracking-wider uppercase text-[var(--dim)] text-center">
        © {new Date().getFullYear()} Rahul Daga. All rights Reserved.
      </p>
    </footer>
  );
}
