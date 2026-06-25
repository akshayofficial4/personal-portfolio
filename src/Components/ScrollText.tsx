"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

const Character = ({ char, progress, start, end }: CharacterProps) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
};

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
};

// stagger container for mobile one-time reveal
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.015 },
  },
};

const charVariant = {
  hidden: { opacity: 0.2 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const ScrollText = ({ text, className = "" }: ScrollRevealTextProps) => {
  const characters = text.split("");
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  // --- MOBILE: per-character reveal, but runs ONCE, never replays ---
  if (isMobile) {
    return (
      <motion.div
        ref={containerRef}
        className={className}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {characters.map((char, index) => (
          <motion.span key={index} variants={charVariant} className="inline">
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // --- DESKTOP/LAPTOP: original live scroll-scrubbed effect, unchanged ---
  return (
    <div ref={containerRef} className={className}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = start + 1 / characters.length;
        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </div>
  );
};

export default ScrollText;
