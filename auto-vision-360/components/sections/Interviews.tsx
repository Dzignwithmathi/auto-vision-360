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
      <div className="grid md:grid-cols-3 gap-px bg-line mt-12">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="bg-paper p-8">
              <div className="num">{g.label}</div>
              <h3 className="mt-3 text-2xl font-display">{g.title}</h3>
              <p className="mt-3.5 text-[15px] leading-[1.65] text-ink-soft">{g.quote}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
