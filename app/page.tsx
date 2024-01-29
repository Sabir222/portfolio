import HomeAboutSection from "@/components/AboutMe/HomeAboutSection";
import CitySection from "@/components/CitySection/CitySection";
import Experience from "@/components/Experience";
import Links from "@/components/links/Links";

export default async function Home() {
  return (
    <main className="pt-24">
      <HomeAboutSection />
      <CitySection />
      <Links />
      <Experience />
    </main>
  );
}
