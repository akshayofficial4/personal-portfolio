"use client";
import { fadeUp } from "@/animations/varients";
import { motion } from "framer-motion";
import React from "react";

const TechStack = () => {
  const skills = [
    "Next js",
    "React js",
    "Node js",
    "Express JS",
    "Mongo DB",
    "Typescript",
    "Tailwind CSS",
    "Javascript",
    " HTML 5 ",
    " CSS 3",
    "Redux",
    " JQuery",
    " GIT",
    "Threejs",
    "Framer Motion",
    " Vite",
    "Firebase",
    " C, c++",
    "Docker",
  ];

  return (
    <section className="relative w-full py-10 overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center md:items-center gap-2"
      >
        <div className="space-y-2">
          <p className="text-orange-500 uppercase tracking-widest md:text-center">
            Tech Stack
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto pt-10">
          {skills.map((skill) => (
            <div
              key={skill}
              className=" rounded-2xl p-2 text-sm cursor-pointer  text-white hover:bg-orange-500 transition duration-200 "
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
