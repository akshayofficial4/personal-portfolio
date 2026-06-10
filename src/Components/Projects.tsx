"use client";

import { useState } from "react";
import { motion , AnimatePresence } from "framer-motion";

const Projects = () => {

  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [ showAllProjects , setShowAllProjects ] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Book Store App",
      category: "Full Stack",
      description:
        "A full-featured book management application with CRUD operations built using the MERN stack.",
    },

    {
      id: 2,
      title: "Stock Dashboard",
      category: "Frontend",
      description:
        "A real-time stock market dashboard with charts, search functionality and API integration.",
    },

    {
      id: 3,
      title: "Portfolio Website",
      category: "Frontend",
      description:
        "A modern portfolio website built using Next.js, Tailwind CSS and Framer Motion.",
    },
  ];

  return (
    <section id="projects" className="relative w-full py-24 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 ">

        <div className="mb-12">

          <p className="text-orange-500 uppercase tracking-widest md:text-center">
            Projects
          </p>

          <h2 className="text-5xl font-bold mt-3 md:text-center">
            Featured Work
          </h2>

        </div>

        <div className="flex gap-4 h-auto md:h-[450px] flex-col md:flex-row">

          {projects.map((project) => (

            <motion.div
              key={project.id}

              onMouseEnter={() =>
                setActiveProject(project.id)
              }

              onMouseLeave={() =>
                setActiveProject(null)
              }

              animate={{
                flex:
                  activeProject === project.id
                    ? 3
                    : 1,
              }}

              transition={{
                duration: 0.4,
              }}

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
                  activeProject &&
                  activeProject !== project.id
                    ? "opacity-40 blur-[2px]"
                    : ""
                }
              `}
            >

              <p className="text-orange-500 text-sm">
                {project.category}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {project.title}
              </h3>

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

                  <p className="text-zinc-400">
                    {project.description}
                  </p>

                </motion.div>

              )}

            </motion.div>

          ))}

        </div>

        <div className="flex justify-center mt-12">

          <button onClick={() => setShowAllProjects(true)} className=" px-6 py-3 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500
                transition-all duration-300 cursor-pointer animate-pulse ">
            Explore All Projects →
          </button>

        </div>

      </div>

          <AnimatePresence>
                {
                  showAllProjects && (
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center" >

                      <motion.div initial={{opacity: 0, y: 80, scale:0.95}} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{opacity: 0, y: 80, scale:0.95}} transition={{ duration: 0.35 }} className="w-[90%] max-w-6xl h-[85vh] bg-zinc-950 rounded-3xl border border-white/10 p-8 relative overflow-y-auto ">
                          <button onClick={() => setShowAllProjects(false)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 text-3xl hover:bg-orange-500 text-zinc-400 hover:text-black transition-all duration-300 fle items-center justify-center">x</button>

                              <div className="mb-8">

                                <p className="text-orange-500 uppercase tracking-widest" >All projects</p>

                                <h2 className="text-4xl font-bold mt-4" >Things I've Built</h2>

                                <p  className="text-zinc-400 mt-6">A collection of full-stack and frontend projects
                                   showcasing my experience with the MERN stack and
                                    modern web technologies.</p>

                                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

                                    {
                                      projects.map((project) => (
                                        <div key={project.id} className="rounded-2xl border border-white/10 bg-zinc-500/50 transition-all p-6 hover:bg-orange-500/50 duration-300">

                                          <p className="text-orange-500 text-sm">
                                            {project.category}
                                          </p>

                                          <h3 className="text-2xl font-semibold mt-2">{project.title}</h3>

                                          <p className="text-zinc-400 mt-3 text-sm leading-6">{project.description}</p>

                                        </div>
                                      ))
                                    }

                                  </div>

                              </div>


                      </motion.div>

                    </motion.div>
                  )
                }
            </AnimatePresence>

    </section>
  );
};

export default Projects;