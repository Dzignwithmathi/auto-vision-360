import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function Findings() {
  return (
    <Section theme="dark" className="text-center">
      <Reveal>
        <span className="eyebrow justify-center">Chapter 09 — Findings</span>
      </Reveal>
      <div className="max-w-[56ch] mx-auto mt-9 flex flex-col gap-5">
        <Reveal>
          <p className="font-display text-[clamp(20px,2.8vw,30px)]">Nobody complained about design.</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-display text-[clamp(20px,2.8vw,30px)] text-amber">
            Everyone complained about visibility.
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.16}>
        <h2 className="giant mt-14">VISIBILITY</h2>
      </Reveal>
    </Section>
  );
}
