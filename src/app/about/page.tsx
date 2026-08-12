import { About } from "@/components/about";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen">
        <About />
      </main>
      <Footer />
    </>
  );
}
