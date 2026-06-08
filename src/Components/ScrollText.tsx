"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

 interface ScrollRevealTextProps {
  text: string;
  className?: string;
}
const ScrollText = ({
    text,
    className = "",
}: ScrollRevealTextProps) => {
    const words = text.split("");
    const containerRef = useRef(null);

    const { scrollYProgress } = 

        useScroll({
            target: containerRef,
            offset : [ "start 80%" , "end 90%" ],
        });

        return (
            <div ref={containerRef}  className={className} >
                 { words.map((word, index) => {

                        const start =
                        index / words.length;

                        const end =
                        start + 1 / words.length;

                        const opacity =
                        useTransform(
                            scrollYProgress,
                            [start, end],
                            [0.2, 1]
                        );
                         return (
                                <motion.span
                                    key={index}
                                    style={{ opacity }}
                                    className="inline"
                                >
                                    {word}
                                </motion.span>
                                );
                            })}

            </div>
        )



}
export default ScrollText;