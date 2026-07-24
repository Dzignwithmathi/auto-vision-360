import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const roadmap = [
  "Working prototype fabrication",
  "Field testing with active drivers",
  "OEM collaboration & sourcing",
  "Manufacturing partnership",
  "Government & safety-body review",
  "Design patent filing",
];

export default function FutureRoadmap() {
  return (
    <Section theme="light">
      <Reveal>
        <span className="eyebrow">Chapter 21 — What&apos;s next</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[16ch]">From render to road.</h2>
      </Reveal>
      <div className="flex flex-col mt-12">
        {roadmap.map((item, i) => (
          <Reveal key={item} delay={(i % 6) * 0.06}>
            <div
              className={`flex gap-7 py-5 border-t border-line items-baseline ${
                i === roadmap.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <p className="text-base">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
