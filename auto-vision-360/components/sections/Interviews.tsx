"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const groups = [
  {
    label: "GROUP 01",
    title: "Auto Drivers",
    quote:
      "\"I only know a passenger has boarded when I feel the auto sink. I can't see who, or what they're blocking.\"",
  },
  {
    label: "GROUP 02",
    title: "Car Drivers",
    quote:
      "\"I keep more distance from autos than any other vehicle. I genuinely can't predict what they'll do next.\"",
  },
  {
    label: "GROUP 03",
    title: "Bike Riders",
    quote: "\"Autos brake without warning. There's no signal I can react to until it's already happening.\"",
  },
];

const springConfig = { stiffness: 220, damping: 22, mass: 0.4 };

function InterviewCard({ group }: { group: (typeof groups)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    setInteractive(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rawSpotX = useMotionValue(50);
  const rawSpotY = useMotionValue(50);

  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);
  const spotX = useSpring(rawSpotX, springConfig);
  const spotY = useSpring(rawSpotY, springConfig);

  const background = useMotionTemplate`radial-gradient(circle at ${spotX}% ${spotY}%, rgba(255,122,26,0.14), transparent 60%)`;

  const handleMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rawRotateX.set((0.5 - py) * 9);
    rawRotateY.set((px - 0.5) * 9);
    rawSpotX.set(px * 100);
    rawSpotY.set(py * 100);
  };

  const handleLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
    rawSpotX.set(50);
    rawSpotY.set(50);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={interactive ? handleMove : undefined}
      onMouseLeave={interactive ? handleLeave : undefined}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="relative bg-paper p-8 overflow-hidden will-change-transform"
    >
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background }} />
      <div className="relative">
        <div className="num">{group.label}</div>
        <h3 className="mt-3 text-2xl font-display">{group.title}</h3>
        <p className="mt-3.5 text-[15px] leading-[1.65] text-ink-soft">{group.quote}</p>
      </div>
    </motion.div>
  );
}

export default function Interviews() {
  return (
    <Section theme="light">
      <Reveal>
        <span className="eyebrow">Chapter 08 — Interviews</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[16ch]">
          Listening to everyone on the road.
        </h2>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-3 gap-px bg-line">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <InterviewCard group={g} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
