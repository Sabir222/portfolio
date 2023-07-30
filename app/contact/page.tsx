import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <div>
        <Header firstp="Reach Out and Let's Chat!" />
        <Contact />
        <div className="mt-[100px]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
