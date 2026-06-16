"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { fadeUp } from '@/animations/varients'

const Contact = () => {
  return (
    <section className='relative w-full py-24 overflow-hidden'>
      <div className='relative z-10 max-w-4xl mx-auto px-6 flex flex-col justify-center md:items-center'>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className='space-y-4'>

                    <p className='text-orange-500 uppercase tracking-widest'>Get in touch</p>

                    <h2 className='text-4xl md:text-5xl font-bold'>Lets Build Something Amazing</h2>

                    <p className="text-zinc-400 max-w-2xl mx-auto leading-7">
                        Have an idea, a project, or an opportunity? I'm always excited
                        to collaborate and create meaningful digital experiences.
                    </p>

            </motion.div>
      </div>

    </section>
  )
}

export default Contact
