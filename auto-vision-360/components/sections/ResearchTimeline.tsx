import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const items = [
  "Government road-safety reports",
  "Direct road observations",
  "News archives & incident reports",
  "Existing patents in the space",
  "Existing auto-rickshaw designs",
  "Academic research papers",
];

export default function ResearchTimeline() {
  return (
    <Section theme="dark">
      <Reveal>
        <span className="eyebrow">Chapter 07 — Research</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[18ch]">
          Turning a hunch into evidence.
        </h2>
      </Reveal>
      <div className="flex gap-5 overflow-x-auto pb-3 mt-12">
        {items.map((item, i) => (
          <Reveal key={item} delay={(i % 4) * 0.08} className="shrink-0">
            <div className="w-[260px] border-l border-line-dark pl-4">
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <p className="mt-2.5 text-[15px]">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-14 max-w-[60ch] pt-7 border-t border-line-dark">
          <p className="text-[17px] leading-[1.7] text-dark-soft">
            Visibility may not be the officially recorded cause of accidents — but the evidence suggested it
            consistently contributes to delayed reaction time.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
