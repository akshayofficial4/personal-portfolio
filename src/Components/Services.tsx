'use client'
import React from 'react'
import { motion } from "framer-motion";
import { fadeUp } from '@/animations/varients';

const Services = () => {
  const services = [
  {
    icon: "🚀",
    title: "Landing Pages",
    description:
      "Modern landing pages for startups, products, and personal brands with responsive layouts and smooth animations.",
  },
  {
    icon: "💼",
    title: "Business Websites",
    description:
      "Professional websites for businesses and agencies with clean design, responsive layouts, and SEO-friendly structure.",
  },
  {
    icon: "⚡",
    title: "Full Stack Applications",
    description:
      "Scalable MERN stack applications with authentication, dashboards, API integration, and database management.",
  },
];
  return (
    <section id='services' className='relative w-full py-24 overflow-hidden '>

        <div className='relative z-10 max-w-6xl mx-auto px-6 flex flex-col justify-center md:items-center gap-2'>

            <div className="space-y-2 md:text-center">

              <p className="text-orange-500 uppercase tracking-widest">
                What I Can Help You Build?
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-3">
                Modern Web Solutions
              </h2>

              <p className="text-zinc-400 max-w-2xl mt-4 leading-7">
                I build modern, responsive, and scalable digital experiences
                for businesses, startups, and personal brands.
              </p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>

              {
                services.map((service) => (
                  <motion.div key={service.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className='group rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300  ' >

                <div className='text-5xl mb-6 flex justify-center'>
                     <div
                        className="
                          flex
                          items-center
                          justify-center
                          text-center
                          w-20
                          h-20
                          rounded-2xl
                          bg-orange-500/10
                          border
                          border-orange-500/20
                          text-5xl
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:bg-orange-500/20
                        "
                      >
                        {service.icon}
                      </div>
                </div>

                <h3 className='text-2xl pt-3 font-semibold mb-4 text-center group-hover:text-orange-500 transition-all ease-in-out duration-100'>{service.title}</h3>

                  
                    <p className="text-zinc-400 group-hover:text-white transition-colors duration-100 ease-in-out leading-7 text-center max-w-2xl">
                      {service.description}
                    </p>
                  


              </motion.div>
                ))
              }

            </div>

        </div>

    </section>
  )
}

export default Services
