import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function Reflection() {
  return (
    <Section theme="dark">
      <div className="max-w-[820px]">
        <Reveal>
          <span className="eyebrow">Chapter 20 — Reflection</span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 text-[clamp(22px,3.4vw,34px)] leading-[1.4]">
            This project began with a simple question.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 font-display text-[clamp(26px,4vw,42px)] text-amber">&quot;Was it my mistake?&quot;</p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-7 max-w-[56ch] text-[17px] leading-[1.7] text-dark-soft">
            I never expected that question to lead to transportation design. Good design starts with
            curiosity. Not assumptions.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
