import Image from "next/image";
import Link from "next/link";
interface headerProps {
  firstp: string;
  secondp?: string;
}
const Header = ({ firstp, secondp }: headerProps) => {
  return (
    <div className="h-[50vh] p-6 relative  animation-div flex justify-start md:justify-center items-center ">
      <Link href="/">
        <div className="absolute cursor-pointer top-4 left-4">
          <Image src={"/tree.png"} alt="logo" width={40} height={40} />
        </div>
      </Link>

      <button className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 bg-opacity-10 top-4 right-4">
        <Image src={"/sunny.png"} alt="logo" width={20} height={20} />
      </button>
      <div className="p-5 bg-slate-100 bg-opacity-10 md:rounded-xl">
        <Image src={"/logo.png"} alt="logo" width={30} height={30} />
        <p className="mb-4 text-2xl font-bold text-white">{firstp}</p>
        <p className="mb-3 text-gray-200">{secondp}</p>
      </div>
    </div>
  );
};

export default Header;
