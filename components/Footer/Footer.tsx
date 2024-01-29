import { Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";
type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  const date = new Date().getFullYear();

  return (
    <section className="container flex items-center justify-between py-4 flex-col gap-3 md:flex-row md:gap-0">
      <div className="order-1 ">&#169; {date} - Sabir Koutabi.</div>
      <div className="flex items-center gap-4 md:order-2">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/skoutabi/"
          className="rounded-full "
        >
          <Linkedin size="20px" />
        </Link>
        <Link
          href="https://twitter.com/sabirkoutabi"
          className="rounded-full "
          target="_blank"
        >
          <Twitter size="20px" />
        </Link>
        <Link
          href="https://github.com/Sabir222"
          className="rounded-full "
          target="_blank"
        >
          <Github size="20px" />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
