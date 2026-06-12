"use client";
import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react'
import {  fadeIn, slideLeft } from "@/animations/varients";


const Navbar = () => {
  
  const [ isOpen , setIsOpen ] = useState(false);
  useEffect(() => {
    
    if(isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isOpen])
  

  return (
     <div className=" relative w-full">

    {/* NAVBAR */}
    <motion.div variants={fadeIn} initial="hidden" animate="visible" className='flex flex-row justify-between px-6 py-4 mt-3 bg-slate-900 backdrop-blur-xl border-b border-white/10 rounded-2xl'>

      <div className='flex items-center'>
        Akshay sunil
      </div>

      <div className='hidden sm:flex'>
        <ul className='flex flex-row gap-6'>
          <a href='#home'><li className='hover:bg-orange-500  p-2 rounded-2xl transition duration-200'>Home</li></a>
          <a href='#about'><li className='hover:bg-orange-500  p-2 rounded-2xl transition duration-200'>About Me</li></a>
          <a href='#projects'><li className='hover:bg-orange-500  p-2 rounded-2xl transition duration-200'>Projects</li></a>
          <a href='#services'><li className='hover:bg-orange-500  p-2 rounded-2xl transition duration-200'>Services</li></a>
          <a href='#contact'><li className='hover:bg-orange-500  p-2 rounded-2xl transition duration-200'>Contact</li></a>
        </ul>
      </div>

      <div
        className='sm:hidden cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        {
          isOpen ? "X" : "☰"
        }
      </div>

    </motion.div>

    {/* MOBILE MENU */}
    {
      isOpen && (
        <motion.div variants={slideLeft} initial="hidden" animate="visible" className="absolute top-full left-0 right-0 mt-1  bg-slate-900 backdrop-blur-xl p-4 h-screen text-3xl text-right sm:hidden ">

          <ul className="flex flex-col gap-10">

            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Contact</li>

          </ul>

        </motion.div>
      )
    }

  </div>
  )
}

export default Navbar