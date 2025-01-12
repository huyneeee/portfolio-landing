"use client";
import { m } from "@/shared/components/atoms/framer-motion";
import { useScroll, useSpring } from "motion/react";
import React from "react";

const Process = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <m.div
      className="absolute left-0 right-0 top-0 z-[9998] h-full origin-left bg-main-gray"
      style={{ scaleX }}
    ></m.div>
  );
};

export default Process;
