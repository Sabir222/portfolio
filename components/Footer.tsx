import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className=" bg-zinc-800">
      <div className="  md:h-[200px] gap-10 py-[40px] md:py-0 md:gap-0 flex md:flex-row flex-col justify-between px-[32px] items-start md:items-center max-w-[1400px] mx-auto">
        <div className="flex items-center order-2 gap-4 text-white ">
          <Link href="/contact">Contact</Link>
          <a href="https://github.com/Sabir222" target="_blank">
            <AiOutlineGithub size={30} />
          </a>

          <a href="https://twitter.com/sabirkoutabi" target="_blank">
            <AiOutlineTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/in/skoutabi/" target="_blank">
            <AiOutlineLinkedin size={30} />
          </a>
        </div>
        <div className="flex flex-col items-start text-white o md:items-center md:order-1">
          <Image src="/tree.png" alt="" height={40} width={40} />
          <p className="mt-6"> Lets Work Together.</p>
        </div>

        <div>
          <ul className="flex items-center order-1 gap-4 text-white">
            <Link href="/about">
              <li>About</li>
            </Link>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
