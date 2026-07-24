import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function BeforeAfterSection() {
  return (
    <Section theme="light">
      <Reveal>
        <span className="eyebrow">See the difference</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-4 text-[clamp(26px,4vw,38px)]">Drag to compare.</h2>
      </Reveal>
      <Reveal delay={0.16}>
        <div className="mt-10">
          <BeforeAfterSlider beforeFilename="visibility-before.png" afterFilename="visibility-after.png" />
        </div>
      </Reveal>
    </Section>
  );
}
