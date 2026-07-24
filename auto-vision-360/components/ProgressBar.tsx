"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin amber line pinned to the top of the viewport, tracking scroll progress. */
export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-amber origin-left z-[70]"
      aria-hidden="true"
    />
  );
}
