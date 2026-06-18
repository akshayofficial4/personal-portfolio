"use client";
import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import { fadeIn, slideLeft } from "@/animations/varients";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className=" relative w-full">
      {/* NAVBAR */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className={`
  flex
  flex-row
  justify-between
  px-6
  py-4
  rounded-2xl
  transition-all
  duration-500

  ${
    scrolled
      ? `
        bg-black/30
        backdrop-blur-xl
        border
        border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
      `
      : `
        bg-black/10
        backdrop-blur-md
        border
        border-white/5
      `
  }
`}
      >
        <div className="flex items-center">Akshay sunil</div>

        <div className="hidden sm:flex">
          <ul className="flex flex-row gap-6">
            <a
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <li className="hover:bg-orange-500 p-2 rounded-2xl transition duration-200 cursor-pointer">
                Home
              </li>
            </a>
            <a
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <li className="hover:bg-orange-500  p-2 rounded-2xl transition duration-200 cursor-pointer">
                About Me
              </li>
            </a>
            <a
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <li className="hover:bg-orange-500  p-2 rounded-2xl transition duration-200 cursor-pointer">
                Projects
              </li>
            </a>
            <a
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <li className="hover:bg-orange-500  p-2 rounded-2xl transition duration-200 cursor-pointer">
                Services
              </li>
            </a>
            <a
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <li className="hover:bg-orange-500  p-2 rounded-2xl transition duration-200 cursor-pointer">
                Contact
              </li>
            </a>
          </ul>
        </div>

        <div
          className="sm:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "X" : "☰"}
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="visible"
          className="absolute top-full left-0 right-0 mt-1 bg-slate-900 backdrop-blur-xl p-4 h-screen text-3xl text-right sm:hidden z-50 "
        >
          <ul className="flex flex-col gap-10">
            <a href="#home" onClick={() => setIsOpen(!isOpen)}>
              <li>Home</li>
            </a>
            <a href="#about" onClick={() => setIsOpen(!isOpen)}>
              <li>About Me</li>
            </a>
            <a href="#projects" onClick={() => setIsOpen(!isOpen)}>
              <li>Projects</li>
            </a>
            <a href="#services" onClick={() => setIsOpen(!isOpen)}>
              <li>Services</li>
            </a>
            <a href="#contact" onClick={() => setIsOpen(!isOpen)}>
              <li>Contact</li>
            </a>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
