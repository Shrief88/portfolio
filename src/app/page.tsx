import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Work from "@/sections/Work";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-8 mt-[var(--nav-height)]">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
