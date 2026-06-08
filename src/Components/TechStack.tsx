import React from 'react'

const TechStack = () => {
  return (
    <section className='relative w-full py-12 overflow-hidden'>

      <div className='relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center md:items-center gap-2'>

        <div className="space-y-2">
          <p className="text-orange-500 uppercase tracking-widest md:text-center">Tech Stack</p>
          
        </div>

        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-center gap-9 w-full p-7 text-zinc-400  '>
            <div className='bg-slate-900 p-8 rounded-3xl min-h-[300px]'>
              <h3 className='text-center '>Frontend</h3>
              <ul>
                <li>React js</li>
                <li>Next js</li>
              </ul>
              
            </div>
            <div className='bg-slate-900 p-8 rounded-3xl min-h-[300px] '></div>
            <div className='bg-slate-900 p-8 rounded-3xl min-h-[300px] '></div>
          </div>

      </div>



    </section>
  )
}

export default TechStack;
