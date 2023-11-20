import Footer from "@/components/Footer";
import Github from "@/components/Github";
import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Socials />
      <Projects />
      <Github />
      <Timeline />
      <HomeContact />
      <Skills />
      <Footer />
    </main>
  );
}
