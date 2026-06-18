"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/varients";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 mt-12 md:mt-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold">Akshay Sunil</h3>
          <p className="text-zinc-500 text-sm">Full Stack Developer</p>
        </div>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a
            href="https://github.com/akshayofficial4"
            target="_blank"
            className="hover:text-orange-500 transition-colors"
          >
            GitHub
          </a>

          <a
            href="YOUR_LINKEDIN"
            target="_blank"
            className="hover:text-orange-500 transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            className="hover:text-orange-500 transition-colors"
          >
            Contact
          </a>
        </div>
      </motion.div>

      <div className="text-center text-zinc-500 text-sm mt-6">
        © 2026 Akshay Sunil. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
