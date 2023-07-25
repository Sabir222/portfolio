import Image from "next/image";

interface DivProps {
  source: string;
  title: string;
  custom: string;
  rounded: string;
  flex?: string;
}

const HeroDiv = ({ source, title, custom, rounded, flex }: DivProps) => {
  return (
    <div className={`md:absolute  ${custom} third-div   cursor-pointer`}>
      {/* top-[15%] right-0 */}
      <div
        className={`flex items-center ${flex}   w-[250px] lg:w-[400px] lg:h-[100px]  h-[80px] p-8 shadow-xl  ${rounded}  third-bg-div`}
      >
        <div
          className={`h-[50px] flex justify-center  glass w-[50px] mr-8 rounded-xl`}
        >
          <Image
            src={source}
            alt="hero"
            width={30}
            height={30}
            className="text-white"
          />
        </div>
        <div className="shadow-xl rounded-2xl third-bg-div">
          <div className="flex items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px] bg-zinc-700">
            <h1 className="text-xl text-center text-white rounded-2xl">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDiv;
