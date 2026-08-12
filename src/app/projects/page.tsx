import { Projects } from "@/components/projects";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
