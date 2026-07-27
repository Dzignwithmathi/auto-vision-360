"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const nodes = [
  "Drivers",
  "Auto Drivers",
  "Motorcyclists",
  "Pedestrians",
  "Traffic",
  "Road Infrastructure",
  "Weather",
  "Vehicle Design",
  "Signals",
];

const CX = 300;
const CY = 280;
const R = 210;

function NetworkDiagram() {
  return (
    <svg viewBox="0 0 600 560" className="w-full h-auto max-w-[560px] mx-auto" aria-hidden="true">
      {nodes.map((label, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = CX + R * Math.cos(angle);
        const y = CY + R * Math.sin(angle);
        const alignEnd = Math.cos(angle) < 0;
        return (
          <g key={label}>
            <motion.line
              x1={CX}
              y1={CY}
              x2={x}
              y2={y}
              className="stroke-amber/35"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 0.84, 0.44, 1] }}
            />
            <motion.circle
              cx={x}
              cy={y}
              r={4}
              className="fill-paper"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 + 0.5 }}
            />
            <text
              x={x + (alignEnd ? -10 : 10)}
              y={y}
              className="fill-paper font-display"
              fontSize="12"
              textAnchor={alignEnd ? "end" : "start"}
              dominantBaseline="middle"
            >
              {label}
            </text>
          </g>
        );
      })}
      <circle cx={CX} cy={CY} r={44} className="fill-dark stroke-amber" strokeWidth={1.5} />
      <text
        x={CX}
        y={CY}
        className="fill-amber font-display"
        fontSize="13"
        fontWeight={600}
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="0.04em"
      >
        VISIBILITY
      </text>
    </svg>
  );
}

const chain = [
  { title: "Better Visibility", note: "May improve awareness" },
  { title: "Better Awareness", note: "Can reduce uncertainty" },
  { title: "Better Decisions", note: "Supports better decisions, faster" },
  { title: "Safer Interactions", note: "Helps drivers understand surrounding conditions", isFinal: true },
];

export default function InformationNetwork() {
  return (
    <Section theme="dark" className="text-center">
      <Reveal>
        <span className="eyebrow justify-center">Road safety is an information problem</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.6vw,44px)] max-w-[22ch] mx-auto">
          Not one event. A network of signals.
        </h2>
      </Reveal>

      <div className="mt-14">
        <NetworkDiagram />
      </div>

      <Reveal>
        <p className="mt-6 max-w-[54ch] mx-auto text-dark-soft leading-[1.7]">
          Every one of these participants is reading — or failing to read — signals from the others. Road
          safety isn&apos;t a single, isolated event. It&apos;s a communication network.
        </p>
      </Reveal>

      <div className="mt-20 flex flex-col items-center gap-2 max-w-[440px] mx-auto">
        {chain.map((c, i) => (
          <div key={c.title} className="contents">
            <Reveal delay={i * 0.12}>
              <div className={`font-display text-[clamp(20px,2.6vw,28px)] ${c.isFinal ? "text-amber" : ""}`}>
                {c.title}
              </div>
            </Reveal>
            <Reveal delay={i * 0.12 + 0.06}>
              <p className="text-sm text-dark-soft">{c.note}</p>
            </Reveal>
            {i < chain.length - 1 && (
              <Reveal delay={i * 0.12 + 0.1}>
                <div className="text-dark-soft py-1">↓</div>
              </Reveal>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
