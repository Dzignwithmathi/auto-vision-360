import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const concepts = [
  {
    label: "CONCEPT 1",
    desc: "A fully enclosed cabin — improved safety, but destroyed airflow and affordability.",
  },
  {
    label: "CONCEPT 2",
    desc: "A camera-and-screen system — solved visibility, failed on cost and reliability.",
  },
  {
    label: "CONCEPT 3",
    desc: "An enlarged single rear window — better, but still blocked by passengers.",
  },
  {
    label: "CONCEPT 4",
    desc: "A segmented panoramic canopy — visibility survived passenger seating.",
  },
  {
    label: "FINAL",
    desc: "Auto Vision 360 — panoramic visibility, high-mounted signaling, fully retrofit-compatible.",
    isFinal: true,
  },
];

export default function ConceptEvolution() {
  return (
    <Section theme="dark">
      <Reveal>
        <span className="eyebrow">Chapter 15 — Evolution</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[16ch]">
          Five iterations to get here.
        </h2>
      </Reveal>
      <div className="flex flex-col mt-12">
        {concepts.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <div
              className={`flex gap-7 py-5 border-t border-line-dark items-baseline ${
                i === concepts.length - 1 ? "border-b" : ""
              }`}
            >
              <div className={`num w-[90px] shrink-0 ${c.isFinal ? "text-amber" : ""}`}>{c.label}</div>
              <p className={`text-[15px] ${c.isFinal ? "" : "text-dark-soft"}`}>{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
