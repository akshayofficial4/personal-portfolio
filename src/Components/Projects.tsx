"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { fadeUp } from "@/animations/varients";


const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    if (showAllProjects) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAllProjects]);

  const projects = [
    {
      id: 1,
      title: "JWT-Secured Todo App",
      category: "Full Stack",
      image: "/projects/todov2.png",
      description:
        "A secure MERN task manager with JWT authentication, role-based access, and responsive CRUD functionality for seamless task organization.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
      ],
      github: "https://github.com/akshayofficial4/todo-app-v2",
      live: "https://todo-app-v2-nu.vercel.app/",
      featured: true,
    },

    {
      id: 2,
      title: "Stock Dashboard",
      category: "Frontend",
      image: "/projects/stock.png",
      description:
        "A real-time stock market dashboard featuring live API data, interactive charts, and a clean responsive interface for market tracking.",
      tech: ["React", "Tailwind CSS", "Recharts", "REST API"],
      github: "https://github.com/akshayofficial4/stock-dashboard",
      live: "https://stock-dashboard-mauve.vercel.app/",
      featured: true,
    },

    {
      id: 3,
      title: "Notes App",
      category: "Full Stack",
      image: "/projects/notes.png",
      description:
        "A full-stack MERN notes application with secure CRUD operations, responsive design, and an intuitive interface for managing notes.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/akshayofficial4/NotesApp",
      live: "https://notes-app-ebon-three.vercel.app/",
      featured: false,
    },

    {
      id: 4,
      title: "Book Store App",
      category: "Full Stack",
      image: "/projects/bookstore.png",
      description:
        "A MERN-based book management platform with complete CRUD operations, responsive UI, and a scalable backend architecture.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/akshayofficial4/bookstoreback",
      live: "https://gleeful-swan-2b4bbb.netlify.app/",
      featured: true,
    },

    {
      id: 5,
      title: "Personal Portfolio",
      category: "Frontend",
      image: "/projects/portfolio1.png",
      description:
        "A modern animated portfolio built with Next.js and Framer Motion, showcasing projects, skills, and interactive user experiences",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
      github: "https://github.com/akshayofficial4/next-animated-portfolio",
      live: "https://akshaysunil-portfolio.vercel.app/",
      featured: false,
    },

    {
      id: 6,
      title: "T-Shirt 3D Renderer",
      category: "Frontend",
      image: "/projects/tshirt-renderer.png",
      description:
        "An interactive 3D T-shirt customization app built with Three.js, featuring real-time rendering and smooth visual animations",
      tech: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/akshayofficial4/threejs_viteapp",
      live: "https://celadon-kataifi-6922a2.netlify.app/",
      featured: false,
    },

    {
      id: 7,
      title: "Weather Caster",
      category: "Frontend",
      image: "/projects/weathercaster.png",
      description:
        "A responsive weather forecasting app that fetches and displays live weather data using the OpenWeather API.",
      tech: ["React", "Tailwind CSS", "OpenWeather API"],
      github: "https://github.com/akshayofficial4/weathercaster",
      live: "https://amazing-strudel-d77dfc.netlify.app/",
      featured: false,
    },

    {
      id: 8,
      title: "Logo maker",
      category: "Frontend",
      image: "/projects/logo.png",
      description:
        "its a small logo making application which we can create logos as per our wish. its build using react and styled using tailwind css.",
      tech: ["React", "Tailwind CSS", "React Icons"],
      github: "https://github.com/akshayofficial4/threejs_viteapp",
      live: "https://celadon-kataifi-6922a2.netlify.app/",
      featured: false,
    },

    {
      id: 9,
      title: "Advice Generator",
      category: "Frontend",
      image: "/projects/adviceapp.png",
      description:
        "A lightweight React application that fetches random advice from a public API with a clean and responsive user interface.",
      tech: ["React", "JavaScript", "CSS3", "REST API"],
      github: "https://github.com/akshayofficial4/advice-app-react",
      live: "https://silly-raindrop-a3f4c7.netlify.app/",
      featured: false,
    },
    {
      id: 10,
      title: "TIC-TAC-TOE GAME",
      category: "Frontend",
      image: "/projects/tic-tac-toe.png",
      description:
        "A classic Tic-Tac-Toe game built with JavaScript, featuring responsive design and smooth gameplay across all devices.",
      tech: ["React", "JavaScript", "CSS3"],
      github: "https://github.com/akshayofficial4/Tic_Tac_Toe_Game",
      live: "https://tic-tac-toejs.netlify.app/",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="relative w-full py-24 overflow-hidden">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-6xl mx-auto px-6 ">
        <div className="mb-12">
          <p className="text-orange-500 uppercase tracking-widest md:text-center">
            Projects
          </p>

          <h2 className="text-5xl font-bold mt-3 md:text-center">
            Featured Work
          </h2>
        </div>

        <div className="flex gap-4 h-auto md:min-h-[320px] flex-col md:flex-row">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              animate={{
                flex: activeProject === project.id ? 3 : 1,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={() =>
                setActiveProject(
                  activeProject === project.id ? null : project.id,
                )
              }
              className={`
                rounded-3xl
                border
                border-white/10
                bg-zinc-900
                p-8
                cursor-pointer
                overflow-hidden
                flex
                flex-col
                justify-end

                ${
                  activeProject && activeProject !== project.id
                    ? "opacity-40 blur-[2px]"
                    : ""
                }
              `}
            >
              <p className="text-orange-500 text-sm ">{project.category}</p>

              <h3 className="text-3xl font-bold mt-2">{project.title}</h3>

              {activeProject === project.id && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-4"
                >
                  <motion.div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>

                  <motion.p className="text-zinc-400">
                    {project.description}
                  </motion.p>

                  <motion.div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-300"
                      >
                        {item}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="flex gap-3 mt-6"
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-black font-medium flex items-center justify-center gap-2"
                    >
                      <FiExternalLink />
                      <span>Live</span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-black font-medium flex items-center justify-center gap-2"
                    >
                      <FiGithub />
                      <span>GitHub</span>
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAllProjects(true)}
            className=" px-6 py-3 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500
                transition-all duration-300 cursor-pointer animate-pulse "
          >
            Explore All Projects →
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showAllProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowAllProjects(false)}

            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 80, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              data-lenis-prevent
              onClick={(e) => e.stopPropagation()}
              className="w-[90%] max-w-6xl h-[85vh] bg-zinc-950 rounded-3xl border border-white/10 p-8 relative overflow-y-auto "
            >
              <button
                onClick={() => setShowAllProjects(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 text-3xl hover:bg-orange-500 text-zinc-400 hover:text-black transition-all duration-300 fle items-center justify-center"
              >
                x
              </button>

              <div className="mb-8">
                <p className="text-orange-500 uppercase tracking-widest">
                  All projects
                </p>

                <h2 className="text-4xl font-bold mt-4">Things I've Built</h2>

                <p className="text-zinc-400 mt-6">
                  A collection of full-stack and frontend projects showcasing my
                  experience with the MERN stack and modern web technologies.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="
                                            group
                                            flex
                                            flex-col
                                            h-full
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-zinc-900/50
                                            p-6
                                            hover:border-orange-500/50
                                            hover:-translate-y-1
                                            transition-all
                                            duration-300
                                          "
                    >
                      <p className="text-orange-500 text-sm">
                        {project.category}
                      </p>

                      <div className="relative hidden md:block w-full h-44 rounded-2xl overflow-hidden mb-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-contain"
                        />
                      </div>

                      <h3 className="text-2xl font-semibold mt-2">
                        {project.title}
                      </h3>

                      <motion.div className="flex flex-wrap gap-2 mt-5 ">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-300 "
                          >
                            {item}
                          </span>
                        ))}
                      </motion.div>

                      <p className="text-zinc-400 mt-3 text-sm leading-6 line-clamp-3">
                        {project.description}
                      </p>

                      <motion.div className="flex gap-3 mt-auto pt-5">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-black font-medium flex items-center justify-center gap-2"
                        >
                          <FiExternalLink />
                          <span>Live</span>
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-black font-medium flex items-center justify-center gap-2"
                        >
                          <FiGithub />
                          <span>GitHub</span>
                        </a>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
