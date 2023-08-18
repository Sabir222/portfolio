"use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <Header
        firstp="About Me"
        contact=""
        secondp="I am an enthusiastic gamer, an avid supporter of FC Barcelona, and deeply passionate about web development, constantly seeking to create innovative and engaging digital experiences."
      />
      <div className="h-[100vh] dark:bg-black bg-slate-200"></div>
      <Footer />
    </>
  );
};

export default page;
