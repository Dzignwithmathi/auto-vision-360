import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const categories = [
  { letter: "A", title: "Through Visibility", desc: "Seeing what's ahead of the auto" },
  { letter: "B", title: "Rear Visibility", desc: "Being seen from behind" },
  { letter: "C", title: "Side Visibility", desc: "Awareness at the flanks" },
  { letter: "D", title: "Signal Visibility", desc: "Braking & intent communication" },
];

export default function Synthesis() {
  return (
    <Section theme="light">
      <Reveal>
        <span className="eyebrow">Chapter 10 — Synthesis</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[18ch]">
          Visibility wasn&apos;t one problem. It was four.
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-line mt-12">
        {categories.map((c, i) => (
          <Reveal key={c.letter} delay={i * 0.08}>
            <div className="bg-paper p-7">
              <div className="num">{c.letter}</div>
              <p className="mt-2.5 text-base">{c.title}</p>
              <p className="mt-2 text-[13px] text-ink-soft">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
