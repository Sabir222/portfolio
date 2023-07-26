import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Github from "@/components/Github";
import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";

import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Github />
      <HomeContact />
      <Skills />
      <Footer />
    </main>
  );
}
