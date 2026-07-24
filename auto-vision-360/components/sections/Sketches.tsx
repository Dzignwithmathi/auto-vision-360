import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";

const sketches = Array.from({ length: 6 }, (_, i) => `sketch-${String(i + 1).padStart(2, "0")}.jpg`);

export default function Sketches() {
  return (
    <Section theme="light">
      <Reveal>
        <span className="eyebrow">Chapter 14 — Exploration</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[20ch]">
          Most of these ideas didn&apos;t work. That was the point.
        </h2>
      </Reveal>
      <div className="flex gap-4 overflow-x-auto pb-3 mt-12">
        {sketches.map((filename, i) => (
          <Reveal key={filename} delay={(i % 4) * 0.08} className="shrink-0">
            <PlaceholderImage
              filename={filename}
              tag="✗"
              aspect="aspect-[3/4]"
              className="w-[220px]"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
