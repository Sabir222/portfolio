import BlogCard from "@/components/BlogCard";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

type pageProps = {};
export const metadata: Metadata = {
  title: "blog",
  description: "Sabir Koutabi's Blog",
  alternates: {
    canonical: `https://sabirkoutabi.dev/blog`,
  },
};
const Page: React.FC<pageProps> = ({}) => {
  const posts = allPosts.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <main className="pt-[400px] container">
      <h1 className="mb-8  text-2xl font-black cursor-default md:text-5xl lg:w-1/2 ">
        <span className="hover:opacity-70 hover:dark:opacity-50 ease-in-out duration-500">
          Blog -{" "}
        </span>
        <span className="opacity-70 dark:opacity-50">Plain & Simple, A </span>
        <span className="hover:opacity-70 hover:dark:opacity-50 ease-in-out duration-500 ">
          Web Developer
        </span>
        <span className="opacity-70 dark:opacity-50">&apos;s Journal.</span>
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-14 py-28">
        {posts.map((post: any, idx: any) => (
          <BlogCard key={idx} {...post} />
        ))}
      </section>
    </main>
  );
};

export default Page;
