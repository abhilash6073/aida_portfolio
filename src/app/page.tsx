import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Adventures from "@/components/Adventures";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Work />
      <Adventures />
      <About />
      <Contact />
    </main>
  );
}

