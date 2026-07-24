import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function EverythingNormal() {
  return (
    <Section theme="dark">
      <div className="max-w-[900px]">
        <Reveal>
          <span className="eyebrow">Chapter 02</span>
        </Reveal>
        <div className="mt-9 flex flex-col gap-3.5">
          <Reveal>
            <p className="font-display text-[clamp(22px,3.4vw,38px)]">My speed was normal.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-display text-[clamp(22px,3.4vw,38px)] text-dark-soft">My focus was good.</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-display text-[clamp(22px,3.4vw,38px)] text-dark-soft">My concentration was fine.</p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="font-display text-[clamp(22px,3.4vw,38px)] text-dark-soft">
              Even the auto drivers weren&apos;t driving recklessly.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.32}>
          <p className="mt-11 text-[clamp(28px,4.2vw,48px)] font-display max-w-[18ch]">
            Everything felt normal. So why was I about to hit two autos within an hour?
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-7 max-w-[48ch] leading-[1.7] text-[17px] text-dark-soft">
            The question refused to leave my mind. Instead of moving on, I became curious. Maybe I had missed
            something. Maybe there was a pattern I couldn&apos;t yet see.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-16 border-l-2 border-amber pl-6">
            <p className="font-display text-[clamp(20px,2.6vw,28px)]">
              &quot;Design starts with curiosity, not assumptions.&quot;
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
