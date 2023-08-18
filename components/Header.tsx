
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
interface headerProps {
  firstp: string;
  secondp?: string;
  contact: string;
}
const Header = ({ firstp, secondp, contact }: headerProps) => {
  const { theme } = useTheme();
  const animationClass = theme === "dark" ? "animation-div" : "animation-div3";
  return (
    <div
      className={`h-[100vh] sm:h-[50vh] p-6 relative  animation-div flex justify-start md:justify-center items-center ${animationClass}`}
    >
      <div className="p-5 bg-slate-100/10  backdrop-blur-sm max-w-[1400px] md:rounded-xl">
        <Image src={"/logo.png"} alt="logo" width={30} height={30} />
        <p className="mb-4 text-2xl font-bold text-white">{firstp}</p>
        <p className="mb-3 text-gray-200">{secondp}</p>
        <Link href="/contact">
          <button
            className={`flex text-white animation-div2 self-end  items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px]  cursor-pointer ${contact} `}
          >
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
