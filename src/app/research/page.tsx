import { Research } from "@/components/research";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function ResearchPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen">
        <Research />
      </main>
      <Footer />
    </>
  );
}
