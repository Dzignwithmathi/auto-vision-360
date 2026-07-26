"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function CarsVsAutos() {
  const autoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: autoRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const obscure = useTransform(scrollYProgress, [0, 1], [0, 0.85]);
  const blurPx = useTransform(scrollYProgress, [0, 1], [0, 4]);
  const blurFilter = useMotionTemplate`blur(${blurPx}px)`;
  const captionOpacity = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);

  return (
    <Section theme="light" className="!py-[8vh]">
      <div className="mb-10">
        <Reveal>
          <span className="eyebrow">Chapter 04</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-5 text-[clamp(28px,4.6vw,46px)] max-w-[20ch]">
            Cars didn&apos;t make me feel this way.
          </h2>
        </Reveal>
      </div>
      <Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-line">
          <div className="bg-paper p-8 md:p-14">
            <div className="num">CAR</div>
            <div className="mt-4">
              <PlaceholderImage filename="car-rear-windshield.png" tag="A" />
            </div>
            <p className="mt-6 text-ink-soft leading-[1.7]">
              A car&apos;s rear windshield is large and unobstructed. It broadcasts brake lights, indicators,
              driver posture and passenger movement — a continuous stream of context to everyone behind it.
            </p>
          </div>

          <div ref={autoRef} className="bg-paper p-8 md:p-14">
            <div className="num text-amber">AUTO</div>
            <div className="mt-4 relative overflow-hidden rounded-[2px]">
              <PlaceholderImage filename="auto-rear-canopy.png" tag="B" />
              <motion.div
                className="absolute inset-0 bg-dark pointer-events-none"
                style={{ opacity: obscure, backdropFilter: blurFilter, WebkitBackdropFilter: blurFilter }}
              />
              <motion.p
                className="absolute bottom-4 left-4 right-4 text-[13px] tracking-[0.04em] text-paper font-display pointer-events-none"
                style={{ opacity: captionOpacity }}
              >
                Same information. Withheld.
              </motion.p>
            </div>
            <p className="mt-6 text-ink-soft leading-[1.7]">
              An auto-rickshaw&apos;s canopy hides almost everything behind fabric, frame and passengers. The
              same information a car gives away freely, an auto withholds by default.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
