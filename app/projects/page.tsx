import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";
import ProjectCard from "@/components/project/ProjectCard";
import projects from "@/projectsData";
export const metadata: Metadata = {
  title: "Projects",
  description: "Sabir Koutabi's projects",
  alternates: {
    canonical: `https://sabirkoutabi.dev/projects`,
  },
  // icons: {
  //   icon: "/favlogo.png",
  // },
};

const page = () => {
  return (
    <div>
      <Navbar />
      <Header
        firstp="My Projects"
        secondp="Discover my projects  examples of what I'm learning as a software engineering student."
        contact=""
      />
      <div className="duration-300 bg-white dark:bg-black">
        <div className="flex flex-col pt-[80px] pb-[80px] max-w-[1400px] mx-auto">
          <div className=" px-[32px] mb-6">
            <h1 className="inline-block text-3xl font-semibold text-gray-800 dark:text-white underline-title">
              Projects
            </h1>
          </div>
          <div className="flex flex-col gap-10 md:flex-row">
            <div className=" md:grid md:grid-cols-3 px-[32px]  gap-3 md:w-[100%]  ">
              {projects.map((project, key) => {
                return (
                  <ProjectCard
                    key={key}
                    projectGithub={project.github}
                    projectName={project.name}
                    projectSrc={project.src}
                    projectUrl={project.url}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
