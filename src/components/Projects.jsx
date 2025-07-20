import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Social Media Web Application",
    type: "Web Application",
    description:
      "A comprehensive social media platform featuring real-time interactions, user authentication, and responsive design. Built with modern React patterns and Firebase backend integration.",
    features: [
      "Real-time messaging and notifications",
      "Advanced user interaction features",
      "Responsive design across all devices",
      "Secure authentication system",
    ],
    technologies: [
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "Real-time Database",
    ],
    links: [
      { label: "View Project", url: "https://social-app-nine-henna.vercel.app/", type: "primary" },
      { label: "Code", url: "https://github.com/mayargamall/social-app", type: "secondary" },
    ],
  },
  {
    title: "Cinematic Red Horizon",
    type: "Personal Project",
    description:
      "A dynamic and responsive movie discovery website that allows users to browse, search, and explore the latest and trending films using TMDB API. Designed with a modern interface to deliver a smooth user experience.",
    features: [
      "Browse trending, top-rated, and upcoming movies",
      "Detailed movie pages with ratings, release date, and overview",
      "Live search functionality with instant results",
      "Responsive design compatible with all devices",
    ],
    technologies: ["React.js", "TMDB API", "Tailwind CSS", "Axios"],
    links: [
      {
        label: "Live Demo",
        url: "https://watchly-movie-stream.vercel.app/",
        type: "primary",
      },
      {
        label: "Code",
        url: "https://github.com/mayargamall/Watchly-movie-stream",
        type: "secondary",
      },
    ],
  },
  {
    title: "FreshCart UI",
    type: "Practice Project",
    description:
      "A clean and fully responsive e-commerce user interface for a grocery and fashion store. Built using React, Context API, and Tailwind CSS to simulate real-world shopping experiences with filtering, navigation, and dynamic UI components.",
    features: [
      "Multi-category product listing (Grocery, Fashion, Electronics, etc.)",
      "Add-to-cart functionality with global state (Context API)",
      "Product details and clean routing",
      "Responsive design with smooth layout and animations",
    ],
    technologies: ["React.js", "Context API", "Tailwind CSS", "React Router"],
    links: [
      {
        label: "Live Demo",
        url: "https://fresh-cart-chi-navy.vercel.app/",
        type: "primary",
      },
      {
        label: "Code",
        url: "https://github.com/mayargamall/freshCart",
        type: "secondary",
      },
    ],
  },
  {
    title: "Security OSINT Dashboard",
    type: "Graduation Project",
    description:
      "A sophisticated security-focused OSINT (Open Source Intelligence) dashboard developed as my graduation project. Features complex data visualization and professional-grade security tools.",
    features: [
      "Complex data visualization components",
      "Professional security tool interface",
      "Advanced filtering and search capabilities",
      "Real-time data processing and analysis",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Data Visualization",
      "Security APIs",
    ],
    links: [
      { label: "View Project", url: "https://graduation-project-azure.vercel.app/", type: "primary" },
      { label: "Code", url: "https://github.com/mayargamall/graduation-project", type: "secondary" },
    ],
  },
];

export default function Projects() {
  return (
    <section className="bg-light-pink py-20 px-8">
      <div className="container mx-auto w-[95%]">
        <div className="max-w-6xl mx-auto">
          <h2 className="hero-font text-5xl font-bold text-black text-center mb-8">
            Featured Projects
            <span className="block w-24 h-1 bg-accent mt-2 mx-auto "></span>
          </h2>
          <p className="text-medium-gray text-lg text-center mb-14">
            I've had the privilege of working on diverse, real-world projects
            that showcase my versatility as a developer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-primary group rounded-b-lg p-8 w-full max-w-md hover:shadow-pink-200 shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className=" hero-font2 bg-light-pink text-accent px-4 py-1 rounded-full text-sm font-semibold">
                    {project.type}
                  </span>
                </div>
                <h3 className="hero-font text-2xl group-hover:text-pink-400 font-bold text-black mb-4">
                  {project.title}
                </h3>
                <p className=" hero-font2 text-body-text mb-4">
                  {project.description}
                </p>
                <div>
                  <h4 className="font-bold text-headline mb-2 hero-font2">
                    Key Features:
                  </h4>
                  <ul className="list-disc pl-5 mb-4 text-accent">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-body-text mb-2 hero-font2"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-headline mb-4 hero-font2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-light-pink text-accent font-semibold px-4 py-1 rounded-full text-sm hero-font2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-8 hero-font2">
                  <a
                    href={project.links[0].url}
                    className="bg-accent text-white hover:bg-pink-400 font-semibold px-6 py-2 rounded-lg transition text-center flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsBoxArrowUpRight className="inline text-lg mb-0.5" />
                    View Project{" "}
                  </a>
                  <a
                    href={project.links[1].url}
                    className="border-2 border-accent text-pink-400 hover:bg-pink-400 hover:text-white font-semibold px-6 py-3 rounded-lg transition text-center flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="inline text-lg mb-0.5" /> View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center mt-10 gap-4">
            <div className="flex justify-center"></div>
            <p className=" hero-font2 text-body-text text-center">
              Each project has strengthened my problem-solving skills and
              deepened my understanding of user-centered design principles.
            </p>
            <div className="flex justify-center">
              <button className=" hero-font2 text-lg hover:scale-105 transition-all duration-300 bg-accent text-white px-8 py-2 rounded-lg">
                {" "}
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
