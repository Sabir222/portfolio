import Image from "next/image";
import Link from "next/link";
interface headerProps {
  firstp: string;
  secondp?: string;
}
const Header = ({ firstp, secondp }: headerProps) => {
  return (
    <div className="h-[50vh] p-6 relative  animation-div flex justify-start md:justify-center items-center ">
      <div className="p-5 bg-slate-100 bg-opacity-10 max-w-[1400px] md:rounded-xl">
        <Image src={"/logo.png"} alt="logo" width={30} height={30} />
        <p className="mb-4 text-2xl font-bold text-white">{firstp}</p>
        <p className="mb-3 text-gray-200">{secondp}</p>
      </div>
    </div>
  );
};

export default Header;
