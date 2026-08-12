import { Experience } from "@/components/experience";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function ExperiencePage() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen">
        <Experience />
      </main>
      <Footer />
    </>
  );
}
