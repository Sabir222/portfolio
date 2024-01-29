import Projects from "@/components/work/projects/Projects";
import Studies from "@/components/work/studies/Studies";
import { Metadata } from "next";

type pageProps = {};
export const metadata: Metadata = {
  title: "Work",
  description: "Sabir Koutabi's work",
  alternates: {
    canonical: `https://sabirkoutabi.dev/work`,
  },
};
const Page: React.FC<pageProps> = ({}) => {
  return (
    <div className="pt-48">
      <h1 className="container text-center text-xl text-pretty">
        Here, I share my personal projects and document my learning journey at
        alx software engineering program. Dive in to explore my experiences in
        the world of software engineering!
      </h1>
      <Projects />
      <Studies />
    </div>
  );
};

export default Page;
