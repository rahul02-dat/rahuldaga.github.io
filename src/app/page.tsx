import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Contact />
      <Footer />
    </>
  );
}
