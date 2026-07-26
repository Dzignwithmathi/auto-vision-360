"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const questions = [
  "Was this just bad luck?",
  "Does this happen only with autos?",
  "Why don't I feel this uncertainty behind cars?",
  "Why is the rear window so small?",
  "Why does it disappear once passengers sit inside?",
  "Is there something fundamentally different about how autos communicate with people around them?",
];

const barVariants = {
  rest: { scaleY: 0, opacity: 0 },
  active: { scaleY: 1, opacity: 1 },
};

const textVariants = {
  rest: { x: 0 },
  active: { x: 14 },
};

const bgVariants = {
  rest: { backgroundColor: "rgba(255,122,26,0)" },
  active: { backgroundColor: "rgba(255,122,26,0.05)" },
};

const springy = { duration: 0.35, ease: [0.16, 0.84, 0.44, 1] as const };

export default function MindMap() {
  return (
    <Section theme="light">
      <Reveal>
        <span className="eyebrow">Chapter 03</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.6vw,46px)] max-w-[18ch]">
          One question became many.
        </h2>
      </Reveal>
      <div className="mt-14 grid sm:grid-cols-2 gap-4">
        {questions.map((q, i) => (
          <Reveal key={q} delay={(i % 3) * 0.08}>
            <motion.div
              className={`relative h-full py-6 border-t border-line ${
                i >= questions.length - 2 ? "border-b" : ""
              }`}
              initial="rest"
              whileHover="active"
              whileTap="active"
              variants={bgVariants}
              transition={springy}
            >
              <motion.span
                className="absolute -left-4 top-6 bottom-6 w-[2px] bg-amber origin-top"
                variants={barVariants}
                transition={springy}
              />
              <motion.p
                className={`text-xl max-w-[26ch] ${i === questions.length - 1 ? "text-amber" : ""}`}
                variants={textVariants}
                transition={springy}
              >
                {q}
              </motion.p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
