import Footer from "@/components/Footer";
import Github from "@/components/studies/Github";
import Hero from "@/components/Hero";
import HomeContact from "@/components/contact/HomeContact";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/project/Projects";
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
