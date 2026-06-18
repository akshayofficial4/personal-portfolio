"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/varients";
import { FiFileText, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.ok) {
        setSuccess(true);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative w-full py-24 overflow-hidden">
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          bg-orange-500/5
          blur-[120px]
          rounded-full
        "
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col justify-center md:text-center">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:text-center "
        >
          <p className="text-orange-500 uppercase tracking-widest">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let&apos;s Build Something Amazing
          </h2>

          <p className="text-zinc-400 mt-6 leading-7 max-w-2xl mx-auto">
            Have an idea, project, freelance opportunity, or job opening?
            I&apos;d love to hear from you and discuss how we can work together.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mt-12
            rounded-3xl
            border
            border-white/10
            bg-zinc-900/40
            backdrop-blur-md
            p-6 md:p-8
          "
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full
                p-4
                rounded-2xl
                bg-black/20
                border
                border-white/10
                outline-none
                transition-all
                focus:border-orange-500/50
                focus:bg-black/30
              "
            />

            {/* Email */}
            <input
              value={email}
              type="email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                p-4
                rounded-2xl
                bg-black/20
                border
                border-white/10
                outline-none
                transition-all
                focus:border-orange-500/50
                focus:bg-black/30
              "
            />

            {/* Message */}
            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                w-full
                p-4
                rounded-2xl
                bg-black/20
                border
                border-white/10
                outline-none
                resize-none
                transition-all
                focus:border-orange-500/50
                focus:bg-black/30
              "
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                group
                w-full
                py-4
                rounded-2xl
                border
                border-orange-500/30
                bg-white/5
                backdrop-blur-md
                text-white
                font-medium
                hover:bg-orange-500/10
                hover:border-orange-500/60
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {loading
                ? "Sending..."
                : success
                  ? "✓ Message Sent"
                  : "Send Message ✈"}
            </button>
          </form>
        </motion.div>

        {/* Social Links */}

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-zinc-400">
          <a
            href="https://github.com/akshayofficial4"
            target="_blank"
            rel="noopener noreferrer"
            className="
      group
      w-14
      h-14
      hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]
      rounded-2xl
      border
      border-white/10
      bg-zinc-900/40
      backdrop-blur-md
      flex
      items-center
      justify-center
      hover:border-orange-500/40
      hover:-translate-y-1
      transition-all
      duration-300
    "
          >
            <FiGithub
              size={22}
              className="group-hover:text-orange-500 transition-colors"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/akshay-sunil7034/"
            target="_blank"
            rel="noopener noreferrer"
            className="
      group
      w-14
      h-14
      hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]
      rounded-2xl
      border
      border-white/10
      bg-zinc-900/40
      backdrop-blur-md
      flex
      items-center
      justify-center
      hover:border-orange-500/40
      hover:-translate-y-1
      transition-all
      duration-300
    "
          >
            <FiLinkedin
              size={22}
              className="group-hover:text-orange-500 transition-colors"
            />
          </a>

          <a
            href="mailto:akshayofficial43@gmail.com"
            className="
      group
      w-14
      h-14
      hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]
      rounded-2xl
      border
      border-white/10
      bg-zinc-900/40
      backdrop-blur-md
      flex
      items-center
      justify-center
      hover:border-orange-500/40
      hover:-translate-y-1
      transition-all
      duration-300
    "
          >
            <FiMail
              size={22}
              className="group-hover:text-orange-500 transition-colors"
            />
          </a>

          <a
            href="/Akshay-Sunil_Fullstack_developer_resume.pdf"
            download
            className="
      group
      w-14
      h-14
      hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]
      rounded-2xl
      border
      border-white/10
      bg-zinc-900/40
      backdrop-blur-md
      flex
      items-center
      justify-center
      hover:border-orange-500/40
      hover:-translate-y-1
      transition-all
      duration-300
    "
          >
            <FiFileText
              size={22}
              className="group-hover:text-orange-500 transition-colors"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
