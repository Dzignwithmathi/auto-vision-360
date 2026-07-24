"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * A circular "side mirror" fixed to the right edge of the viewport, whose ring
 * fills in as the reader scrolls. It's the page's one signature element: a
 * literal mirror that gradually reveals the whole story, echoing the
 * blind-spot theme instead of a generic progress dot.
 */
export default function MirrorIndicator() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });
  const dashoffset = useTransform(progress, (p) => CIRCUMFERENCE * (1 - p));

  return (
    <div
      className="hidden md:flex fixed top-1/2 right-7 -translate-y-1/2 z-[60] w-[52px] h-[52px] rounded-full items-center justify-center border border-line-dark bg-dark/55 backdrop-blur-md"
      aria-hidden="true"
    >
      <svg width={52} height={52} viewBox="0 0 52 52" className="absolute inset-0 -rotate-90">
        <circle cx={26} cy={26} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth={1.5} />
        <motion.circle
          cx={26}
          cy={26}
          r={RADIUS}
          fill="none"
          stroke="#FF7A1A"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          style={{ strokeDashoffset: dashoffset }}
        />
      </svg>
      <div className="w-1.5 h-1.5 rounded-full bg-amber" />
    </div>
  );
}
