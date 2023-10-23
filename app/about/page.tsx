import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TheModal from "@/components/StudyModal";

const page = () => {
  return (
    <div>
      <Navbar />
      <Header
        firstp="About Me"
        contact=""
        secondp="I am an enthusiastic gamer, an avid supporter of FC Barcelona, and deeply passionate about web development, constantly seeking to create innovative and engaging digital experiences."
      />
      <div className="duration-300 dark:bg-black bg-slate-200 h-[100vh]"></div>
      <Footer />
    </div>
  );
};

export default page;
