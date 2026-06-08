"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/varients";
const Hero = () => {

  return (
    <section className="relative w-full h-screen overflow-hidden">


     

      {/* HERO CONTENT */}
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center md:items-center gap-2">

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-2 sm:text-md text-zinc-400 pb-2 ">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Available for freelance work
        </motion.div>

        <motion.h1 variants={fadeUp} initial="hidden" animate="visible"  className="text-white text-6xl md:text-7xl font-bold leading-tight">
          Hi, I’m Akshay
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-zinc-400 text-xl mt-4 max-w-2xl md:text-center">
          I build modern, scalable web applications with
          clean UI and smooth user experiences.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mt-8 flex gap-4">

          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl text-white font-medium">
            View Projects
          </button>

          <button className="border border-white/20 hover:border-orange-500 transition px-6 py-3 rounded-xl text-white">
            Contact Me
          </button>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default Hero;
