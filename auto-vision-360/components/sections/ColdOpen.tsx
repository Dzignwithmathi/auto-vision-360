"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function ColdOpen() {
  const prefersReducedMotion = useReducedMotion();
  const [settled, setSettled] = useState(false);

  const shakeAnimation = prefersReducedMotion
    ? { x: 0, y: 0, rotate: 0, scale: 1 }
    : {
        x: [0, -22, 16, -12, 8, -4, 2, 0],
        y: [0, 14, -10, 7, -4, 2, 0],
        rotate: [0, -1.4, 1.1, -0.7, 0.4, -0.2, 0],
        scale: [1.06, 1.03, 1.045, 1.015, 1.02, 1.005, 1],
      };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark" aria-label="Prologue">
      <motion.div
        className="absolute inset-0"
        initial={{ x: 0, y: 0, rotate: 0, scale: 1.06 }}
        animate={shakeAnimation}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.9,
          times: [0, 0.12, 0.28, 0.45, 0.6, 0.78, 0.9, 1],
          ease: "easeOut",
        }}
        onAnimationComplete={() => setSettled(true)}
      >
        <Image
          src="/images/cold-open-drive-view.jpg"
          alt="First-person view from behind motorcycle handlebars, closing in on an auto-rickshaw in traffic"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 bg-red-600 pointer-events-none mix-blend-multiply"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0.22, 0.05, 0] }}
          transition={{ duration: 0.9, times: [0, 0.18, 0.32, 0.5, 0.7], ease: "easeOut" }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-dark/25 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-14">
        <div className="max-w-wrap mx-auto px-[6vw] w-full">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={settled || prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 0.84, 0.44, 1] }}
          >
            Prologue
          </motion.p>
          <motion.p
            className="mt-3 text-dark-soft text-[15px] sm:text-base tracking-[0.01em] max-w-[36ch]"
            initial={{ opacity: 0, y: 12 }}
            animate={settled || prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 0.84, 0.44, 1] }}
          >
            Same road. Same speed. Then, without warning —
          </motion.p>
        </div>
      </div>
    </section>
  );
}
