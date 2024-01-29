
import { Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import ImagePlaceHolder from "@/public/image3.jpg";

export default function BlogCard(post: Post) {
  return (
    <Link
      href={post.url}
      className="rounded-lg h-[400px] hover:scale-90 transition-all duration-500 relative"
    >
      <Image
        src={post.image || ImagePlaceHolder}
        alt="blog image"
        quality={50}
        width={1000}
        height={400}
        priority
        className="object-cover h-full rounded-lg"
      />
      <div className="absolute bottom-4 left-4 shadow-2xl text-white">
        <time dateTime={post.date} className="mb-2 block text-md font-light ">
          {new Intl.DateTimeFormat("en-US").format(new Date(post.date))}
        </time>

        <p className="text-lg font-semibold">{post.title}</p>
      </div>
    </Link>
  );
}
