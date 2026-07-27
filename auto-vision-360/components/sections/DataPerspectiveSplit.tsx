import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const officialFactors = [
  "Overspeeding",
  "Wrong-side driving",
  "Alcohol",
  "Driver error",
  "Mechanical failure",
  "Road defects",
];

const designFactors = [
  "Hidden pedestrians",
  "Blocked sightlines",
  "Passenger obstruction",
  "Limited visibility",
  "Delayed brake recognition",
  "Visual uncertainty",
];

export default function DataPerspectiveSplit() {
  return (
    <Section theme="light" className="!py-[8vh]">
      <div className="mb-10">
        <Reveal>
          <span className="eyebrow">What the data doesn&apos;t tell us</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-5 text-[clamp(28px,4.6vw,46px)] max-w-[22ch]">
            Official reports classify causes. They rarely capture design.
          </h2>
        </Reveal>
      </div>
      <Reveal delay={0.16}>
        <div className="grid md:grid-cols-2 gap-px bg-line">
          <div className="bg-paper p-8 md:p-14">
            <div className="num">OFFICIAL ACCIDENT REPORTS</div>
            <ul className="mt-6 flex flex-col gap-4">
              {officialFactors.map((f) => (
                <li key={f} className="text-lg border-t border-line pt-4">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-paper p-8 md:p-14">
            <div className="num text-amber">DESIGN PERSPECTIVE</div>
            <ul className="mt-6 flex flex-col gap-4">
              {designFactors.map((f) => (
                <li key={f} className="text-lg border-t border-line pt-4 text-amber">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <p className="mt-10 max-w-[60ch] text-ink-soft leading-[1.7]">
          Product designers investigate these hidden usability problems — the gaps official classifications
          aren&apos;t built to capture. This became the motivation behind Auto Vision 360.
        </p>
      </Reveal>
    </Section>
  );
}
