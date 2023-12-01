import Link from "next/link";
import ProjectCard from "./ProjectCard";
import projects from "@/projectsData";

const homeProjects = projects.slice(0, 3);
const Projects = () => {
  return (
    <div className="dark:bg-[#EADBC8] bg-[#EEEEEE]">
      <div className="flex flex-col  max-w-[1400px] mx-auto  py-[80px]">
        <div className=" px-[32px] mb-6">
          <h1 className="text-3xl font-semibold text-gray-800 ">Projects</h1>
        </div>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className=" md:grid md:grid-cols-3 px-[32px]  gap-3 md:w-[80%]  ">
            {homeProjects.map((project, key) => {
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
          <div className="md:w-[20%] flex p-10 justify-center items-center">
            <div className="text-white gradient-background rounded-2xl">
              <Link href="/projects">
                <button className="flex items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px] ">
                  More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
