import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const principles = [
  "Improve visibility",
  "Preserve comfort",
  "Minimal manufacturing change",
  "Retrofit-friendly",
  "Affordable",
  "Human-centered",
];

export default function Principles() {
  return (
    <Section theme="dark">
      <Reveal>
        <span className="eyebrow">Chapter 13 — Principles</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[16ch]">
          What the solution had to honor.
        </h2>
      </Reveal>
      <div className="mt-11 flex flex-wrap gap-3.5">
        {principles.map((p, i) => (
          <Reveal key={p} delay={(i % 5) * 0.08}>
            <span
              className={`inline-block px-3.5 py-1.5 border rounded-full text-sm ${
                i === principles.length - 1 ? "border-amber text-amber" : "border-line-dark"
              }`}
            >
              {p}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
