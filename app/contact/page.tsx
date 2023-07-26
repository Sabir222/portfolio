import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
const page = () => {
  return (
    <>
      <Navbar />
      <div>
        <Header firstp="Reach Out and Let's Chat!" />
        <Contact />
      </div>
    </>
  );
};

export default page;
