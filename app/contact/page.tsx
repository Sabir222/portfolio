import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Header firstp="Reach Out and Let's Chat!" contact="hidden" />
        <div className="bg-slate-200 duration-300 dark:bg-black py-[100px] ">
          <Contact />
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
