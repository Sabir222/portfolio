import ProjectCard from "./ProjectCard";
import Kite from "@/public/kitesurf.png";
import Crypto from "@/public/srypto.png";
import RealEstate from "@/public/realestate.png";
import Movie from "@/public/movie.png";

type ProjectsProps = {};

const data = [
  {
    image: Kite,
    url: "https://www.gokitesurfessaouira.com/en",
    stack: "Nextjs, Typescript, Tailwindcss, Nodemailer, Stripe",
    type: "Website",
    description:
      "A website dedicated to kite surfing designed for a client, where you can conveniently book lessons and make online payments for them.",
    alt: "kite project image",
    github: "private repo",
    size: "Front-end",
    name: "GOKITESURF",
  },
  {
    image: RealEstate,
    url: "https://real-estate-phi-three.vercel.app/",
    stack: "Nextjs, Typescript, Tailwindcss, MongoDB, Next Auth, zustand",
    type: "Web app",
    description:
      "Real Estate Website project! This web application allows users to browse, reserve, and add houses to their favorites. Admin users have the additional capability to manage properties and user roles. The project is built using TypeScript, Next.js, Tailwind CSS, MongoDB, Prisma, and integrates OAuth authentication with Google and GitHub.",
    alt: "real estate website",
    github: "https://github.com/Sabir222/real-estate",
    size: "Full-stack",
    name: "Real estate",
  },
  {
    image: Crypto,
    url: "https://crypto-tracker-2-six.vercel.app/",
    stack: "React, Typescript, Tailwindcss, postgresql",
    type: "Web app",
    description:
      "A cryptocurrency website that tracks digital currencies, allowing users to sign up and create personalized favorite lists. This marked one of my early encounters with APIs.",
    alt: "Crypto website image",
    github: "https://github.com/Sabir222/crypto-tracker",
    size: "Full-stack",
    name: "Crypto website",
  },
  {
    image: Movie,
    url: "https://movie-swart-five.vercel.app/",
    stack: "React, Tailwindcss, Typescript",
    type: "Website",
    description:
      "Built with Tailwind CSS, React, TypeScript, and Vite, this movie website showcases trending films. Users can access comprehensive details and trailers for each movie by clicking on them.",
    alt: "movie website image",
    github: "https://github.com/Sabir222/Movie",
    size: "Front-end",
    name: "Movie trailer website",
  },
];

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <section className="container my-20">
      <h1 className="text-4xl font-medium my-8">Projects</h1>
      <section className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 ">
        {data.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              projectImage={project.image}
              projectName={project.name}
              projectSize={project.size}
              projectDescription={project.description}
              projectUrl={project.url}
              projectStack={project.stack}
              projectGithub={project.github}
              projectType={project.type}
              projectAlt={project.alt}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Projects;
