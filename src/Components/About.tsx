import React from "react";
import Image from "next/image";
import ScrollText from "./ScrollText";

const About = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center md:items-center gap-2">
        <div className="space-y-2">
          <p className="text-orange-500 uppercase tracking-widest md:text-center">About Me</p>

          <h2 className="text-5xl font-bold mt-3">Building Digital Experiences</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12 md:pl-12  ">
          <div className="space-y-6  ">

            <ScrollText
                    className="text-zinc-400 leading-8 text-xl"
                    text="
                    I'm Akshay Sunil, a Full Stack Developer passionate about building modern,
                    responsive, and scalable web applications using React.js, Next.js,
                    Node.js, and MongoDB. I enjoy turning ideas into intuitive digital
                    experiences and have built multiple full-stack projects that focus on
                    performance, usability, and clean design. My goal is to create web
                    applications that not only look great but also solve real business
                    problems."
              />
            
          </div>
          <div className="flex justify-center lg:justify-center ">
            <Image
              src="/port-image2copy.jpeg"
              alt="Akshay Sunil"
              width={0}
              height={0}
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
      </div>
    </section>
  );
};

export default About;
