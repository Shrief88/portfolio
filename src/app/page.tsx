import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
// import Work from "@/sections/Work";
  import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import SideLinks from "@/components/SideLinks";

export default function Home() {
  return (
    <>
      <Navbar />
      <SideLinks />
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
