"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function ResearchDirectionTransition() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start 0.8", "end 0.3"] });

  const visibilityOpacity = useTransform(scrollYProgress, [0, 0.5, 0.7], [1, 1, 0]);
  const visibilityScale = useTransform(scrollYProgress, [0.5, 1], [1, 0.85]);
  const avOpacity = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);
  const avScale = useTransform(scrollYProgress, [0.55, 1], [1.08, 1]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-paper text-ink light py-[11vh]">
      <div className="max-w-wrap mx-auto px-[6vw] w-full">
        <Reveal>
          <span className="eyebrow">Research direction</span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[60ch] text-lg leading-[1.7] text-ink-soft">
            After studying government reports, road accident statistics, road observations, existing vehicle
            designs, academic literature, and user interviews, I decided not to redesign the entire
            auto-rickshaw. Instead, I asked one simple question.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="font-display mt-10 text-[clamp(26px,4.4vw,46px)] max-w-[24ch] leading-[1.15]">
            &quot;How might we improve visual communication between auto-rickshaws and surrounding road
            users — without changing the vehicle&apos;s fundamental architecture?&quot;
          </p>
        </Reveal>

        <div ref={wrapRef} className="relative mt-24 h-[160px] flex items-center justify-center">
          <motion.h3 style={{ opacity: visibilityOpacity, scale: visibilityScale }} className="giant absolute text-amber">
            VISIBILITY
          </motion.h3>
          <motion.h3
            style={{ opacity: avOpacity, scale: avScale }}
            className="absolute font-display text-[clamp(32px,6vw,72px)] text-center"
          >
            Auto Vision 360
          </motion.h3>
        </div>
      </div>
    </section>
  );
}
