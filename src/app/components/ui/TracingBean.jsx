"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utilsTracingBean";

export const TracingBeam = ({
  children,
  className
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight + 100);
    }
  }, []);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [90, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [20, svgHeight - 10]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <motion.div
      ref={ref}
      className={cn("relative h-full w-full px-4 sm:px-6 lg:px-8", className)}>
      <div className="absolute top-3 -left-10 lg:left-10">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          // Bar ------------------------------------
          className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm mt-24 
          lg:mt-35 lg:-ml-12
          xl:ml-[27px]">
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#10b981",
              borderColor: scrollYProgress.get() > 0 ? "white" : "#059669",
            }}
            className="h-3 w-3 rounded-full border border-neutral-300 bg-white" />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight + 200}`}
          width="23"
          // Set the SVG height
          height={svgHeight}
          className="ml-4 lg:-ml-15 xl:ml-4 block"
          aria-hidden="true">
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l 18 24sV ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l 18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              // set y1 for gradient
              y1={y1}
              // set y2 for gradient
              y2={y2}>
              <stop stopColor="#ffffff" stopOpacity="0"></stop>
              <stop stopColor="#ffffff"></stop>
              {/* <stop offset="0.325" stopColor="#ffffff"></stop> */}
              <stop offset="1" stopColor="#006cff" stopOpacity="7"></stop>  
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef} className="w-full max-w-none">{children}</div>
    </motion.div>
  );
};
