"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
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

const ScrollText = ({ text, className = "" }: ScrollRevealTextProps) => {
  const characters = text.split("");
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [locked, setLocked] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  // Once fully revealed on mobile, lock it in place — stop tracking scroll after that
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile && latest >= 0.99 && !locked) {
      setLocked(true);
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = start + 1 / characters.length;

        // Mobile + already fully revealed once -> static, full opacity, no more tracking
        if (isMobile && locked) {
          return (
            <span key={index} className="inline">
              {char}
            </span>
          );
        }

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
