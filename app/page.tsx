import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Github from "@/components/Github";
import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Github />
      <HomeContact />
      <Footer />
    </main>
  );
}
