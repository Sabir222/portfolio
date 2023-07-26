import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Head from "next/head";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Sabir</title>
        <meta name="Contact-page" content="page" key="contact" />
      </Head>
      <Navbar/>
      <div>
        <Header firstp="Reach Out and Let's Chat!" />
      </div>
    </>
  );
};

export default Contact;
