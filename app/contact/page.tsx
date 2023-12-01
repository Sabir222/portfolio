import Header from "@/components/Header";
import Navbar from "@/components/navbar/Navbar";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sabir KOUTABI",
  description: "Sabir Koutabi's contact page",
  alternates: {
    canonical: `https://sabirkoutabi.dev/contact`,
  },
  // icons: {
  //   icon: "/favlogo.png",
  // },
};
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
