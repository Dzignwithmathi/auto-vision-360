import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";

const observations = [
  {
    filename: "road-obs-passengers.jpg",
    caption: "Passengers routinely block the little rear visibility that exists.",
  },
  {
    filename: "road-obs-lanechange.jpg",
    caption: "Drivers lean and change lanes constantly, just to see what's ahead.",
  },
  {
    filename: "road-obs-brakelight.jpg",
    caption: "Brake lights are mounted low, easily hidden by traffic and glare.",
  },
];

export default function RoadObservation() {
  return (
    <Section theme="light">
      <Reveal>
        <span className="eyebrow">Chapter 12 — Road observation</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[18ch]">
          Watching the problem happen, live.
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {observations.map((o, i) => (
          <Reveal key={o.filename} delay={i * 0.08}>
            <PlaceholderImage filename={o.filename} tag={String(i + 1).padStart(2, "0")} aspect="aspect-[4/5]" />
            <p className="mt-3.5 text-[15px]">{o.caption}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
