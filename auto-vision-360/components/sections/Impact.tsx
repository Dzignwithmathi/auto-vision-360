import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const impacts = [
  { symbol: "+", text: "Better awareness between drivers" },
  { symbol: "+", text: "Clearer communication of intent" },
  { symbol: "−", text: "Reduced uncertainty on the road" },
  { symbol: "+", text: "Improved driver confidence" },
];

export default function Impact() {
  return (
    <Section theme="light">
      <Reveal>
        <span className="eyebrow">Chapter 19 — Impact</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[18ch]">
          What changes when everyone can see.
        </h2>
      </Reveal>
      <div className="mt-14 grid sm:grid-cols-2 gap-10">
        {impacts.map((it, i) => (
          <Reveal key={it.text} delay={i * 0.08}>
            <div className="font-display text-[clamp(40px,6vw,72px)] font-semibold">{it.symbol}</div>
            <p className="mt-2 text-base">{it.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
