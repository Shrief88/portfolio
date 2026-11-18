import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import SideLinks from "@/components/SideLinks";
import Projects from "@/components/sections/Projects";
import Reviews from "@/components/sections/Reviews";
import { getHomePage } from "@/lib/sanity/fetch";

export default async function Home() {
  const { settings, experiences, projects, reviews } = await getHomePage();

  return (
    <>
      <Navbar />
      <SideLinks links={settings.links} />
      <main>
        <Hero hero={settings.hero} />
        <About skills={settings.skills} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Reviews reviews={reviews} />
        <Contact email={settings.links.email} />
      </main>
      <Footer links={settings.links} />
    </>
  );
}
