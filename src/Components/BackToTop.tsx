"use client";
import React, { useEffect, useState } from 'react'
import { FiArrowUp } from "react-icons/fi";

const BackToTop = () => {
    const [ show , setShow ] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        setShow(window.scrollY > 500);
      };
      window.addEventListener("scroll",handleScroll);
    
      return () => 

        window.removeEventListener(
            "scroll",
            handleScroll
        );
              
    }, [])

     if(!show) return null;
    

  return (
    <button onClick={() => window.scrollTo({
        top: 0,
        behavior: "smooth",
    })} className='fixed bottom-8 right-8 w-12 h-12 rounded-full z-40 border border-orange-500/30 bg-orange-500/10 text-orange-500
                    transition-all duration-300 cursor-pointer animate-pulse flex items-center justify-center '> 

        <FiArrowUp size={20} />

    </button>
  )
}

export default BackToTop
