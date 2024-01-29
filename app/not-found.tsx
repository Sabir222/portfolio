import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="fixed inset-0 bg-[--background] z-30 flex mt-[150px] md:mt-[50px] items-center flex-col gap-6 text-center px-4">
      <Image
        height={900}
        width={900}
        src={"/bird.png"}
        alt="not-found-image"
        className="w-[300px] md:w-[500px] xl:w-[900px]"
      />
      <h2 className="text-2xl md:text-4xl font-medium">Page not found</h2>
      <hr className="w-20" />
      <p className="md:text-xl text-lg">
        The thing you are looking for does&apos;t exist
      </p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
