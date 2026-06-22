"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollText from "./ScrollText";
import { fadeUp } from "@/animations/varients";

const About = () => {
  return (
    <section id="about" className="relative w-full py-24 overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center md:items-center gap-2"
      >
        <div className="space-y-2">
          <p className="text-orange-500 uppercase tracking-widest md:text-center">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Building Digital Experiences
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12 md:pl-12  ">
          <div className="space-y-6  ">
            <ScrollText
              className="text-zinc-400 leading-8 text-xl"
              text="
                   I'm Akshay Sunil, a Full Stack Developer who helps startups, small businesses, and personal brands turn ideas into polished,
                   production-ready web apps. I work across the full stack — React, Next.js, Node.js, MongoDB — but what sets my work apart is
                   attention to motion and feel: smooth animations, fast load times, and interfaces that don't just function, they feel premium.
                   Whether it's a landing page that needs to convert or a full-stack app that needs to scale,
                   I build it clean, fast, and right."
            />
          </div>
          <div className="flex justify-center lg:justify-center ">
            <Image
              src="/port-image2copy.jpeg"
              alt="Akshay Sunil"
              width={0}
              height={0}
              loading="eager"
              sizes="100vw"
              className="
                      relative
                        w-72
                        h-72
                        object-cover
                        rounded-3xl
                        border
                        border-white/10
                        shadow-2xl
                     "
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
