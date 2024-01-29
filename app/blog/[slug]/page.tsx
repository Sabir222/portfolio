import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";

export const dynamic = "force-dynamic";
// import Link from "next/link";
// import FakeComponent from "@/app/components/FakeComponent";
// ^ This component is just a placeholder, it will give you an error, remove it.

const mdxComponents: MDXComponents = {
  // FakeComponent,
  // a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main>
      <article
        className=" text-color1 dark:text-white/60 py-28 max-w-[900px] mx-auto px-[32px]  prose dark:prose-invert prose-img:rounded-xl prose-h1:underline      
      "
      >
        <MDXContent components={mdxComponents} />
      </article>
    </main>
  );
};

export default PostLayout;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title };
};
