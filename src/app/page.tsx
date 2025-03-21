import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
// import Experience from "@/sections/Experience";
// import Work from "@/sections/Work";
// import Contact from "@/sections/Contact";
// import Footer from "@/components/Footer";
import Links from "@/components/Links";

export default function Home() {
  return (
    <>
      <Navbar />
      <Links />
      <main>
        <Hero />

        <About />
      </main>
    </>
  );
}
