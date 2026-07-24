"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number; // seconds, use multiples of 0.08 to stagger siblings
  className?: string;
  as?: "div" | "span";
}

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Fades and rises content into place once it's ~15% into the viewport.
 * Respects prefers-reduced-motion via Framer Motion's built-in handling
 * combined with the global CSS override in globals.css.
 */
export default function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const MotionTag = as === "span" ? motion.span : motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      variants={variants}
      transition={{ duration: 0.9, delay, ease: [0.16, 0.84, 0.44, 1] }}
    >
      {children}
    </MotionTag>
  );
}
