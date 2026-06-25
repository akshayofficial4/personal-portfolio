"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
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
const ScrollText = ({ text, className = "" }: ScrollRevealTextProps) => {
  const words = text.split("");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  return (
    <div ref={containerRef} className={className}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Character
            key={index}
            char={word}
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
