import Link from "next/link";
import { MoveRight } from "lucide-react";
type LinksProps = {};

const Links: React.FC<LinksProps> = ({}) => {
  return (
    <section className="container mb-20 cursor-default">
      <div>
        <h1 className="text-4xl mb-10">Links</h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <Link
              download="resume.pdf"
              href="resume.pdf"
              target="_blank"
              className="group"
            >
              <div className="flex gap-2 items-center">
                <p className=" text-xl md:text-2xl">Resume</p>
                <div className="transition-transform duration-300 transform group group-hover:translate-x-4">
                  <MoveRight />
                </div>
              </div>
            </Link>
            <h4 className="opacity-45 md:text-xl text-lg">
              Download my resume pdf
            </h4>
          </div>

          <div className="w-full md:w-1/2 p-4">
            <Link
              href="https://www.linkedin.com/in/skoutabi/"
              className="group"
              target="_blank"
            >
              <div className="flex gap-2 items-center">
                <p className=" text-xl md:text-2xl">LinkedIn</p>
                <div className="transition-transform duration-300 transform group group-hover:translate-x-4">
                  <MoveRight />
                </div>
              </div>
            </Link>
            <h4 className="opacity-45 md:text-xl text-lg">
              Connect with me on LinkedIn
            </h4>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <Link
              href="https://twitter.com/sabirkoutabi"
              className="group"
              target="_blank"
            >
              <div className="flex gap-2 items-center">
                <p className=" text-xl md:text-2xl">Twitter</p>
                <div className="transition-transform duration-300 transform group group-hover:translate-x-4">
                  <MoveRight />
                </div>
              </div>
            </Link>
            <h4 className="opacity-45 md:text-xl text-lg">
              Connect with me on Twitter
            </h4>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <Link
              href="https://github.com/Sabir222"
              className="group"
              target="_blank"
            >
              <div className="flex gap-2 items-center">
                <p className=" text-xl md:text-2xl">Github</p>
                <div className="transition-transform duration-300 transform group group-hover:translate-x-4">
                  <MoveRight />
                </div>
              </div>
            </Link>
            <h4 className="opacity-45 md:text-xl text-lg">
              Visit my Github profile
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
