import { Skills } from "@/components/skills";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function SkillsPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen">
        <Skills />
      </main>
      <Footer />
    </>
  );
}
