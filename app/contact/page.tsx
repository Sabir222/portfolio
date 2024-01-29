import Contact from "@/components/contact/Contact";
import { Metadata } from "next";

type pageProps = {};
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sabir Koutabi",
  alternates: {
    canonical: `https://sabirkoutabi.dev/contact`,
  },
};

const Page: React.FC<pageProps> = ({}) => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default Page;
