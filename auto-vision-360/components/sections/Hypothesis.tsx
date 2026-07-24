import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function Hypothesis() {
  return (
    <Section theme="light">
      <Reveal>
        <span className="eyebrow">Chapter 06 — First hypothesis</span>
      </Reveal>
      <div className="mt-12 flex items-center gap-6 flex-wrap">
        <Reveal>
          <div className="font-display text-[clamp(22px,3.2vw,34px)]">Better Visibility</div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="text-ink-soft">&rarr;</div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="font-display text-[clamp(22px,3.2vw,34px)]">Better Awareness</div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="text-ink-soft">&rarr;</div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="font-display text-[clamp(22px,3.2vw,34px)] text-amber">Better Decisions</div>
        </Reveal>
      </div>
      <Reveal delay={0.24}>
        <p className="mt-9 max-w-[56ch] text-[17px] leading-[1.7] text-ink-soft">
          If visibility was the missing variable, then improving it — for drivers and for the people around
          them — should directly improve how quickly and confidently everyone on the road reacts. This became
          the hypothesis the entire project would test.
        </p>
      </Reveal>
    </Section>
  );
}
