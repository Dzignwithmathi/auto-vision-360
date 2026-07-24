import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const scenarios = ["Heavy Traffic", "Rain", "Night", "Full Passengers", "Urban Streets"];

export default function Scenarios() {
  return (
    <Section theme="dark">
      <Reveal>
        <span className="eyebrow">Chapter 18 — Scenarios</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[16ch]">
          Tested against real conditions.
        </h2>
      </Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-line-dark mt-12">
        {scenarios.map((s, i) => (
          <Reveal key={s} delay={(i % 5) * 0.08}>
            <div className="bg-dark py-5 px-4">
              <p className="text-sm">{s}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
