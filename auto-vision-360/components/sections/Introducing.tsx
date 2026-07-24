import Reveal from "@/components/Reveal";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function Introducing() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center py-[11vh] bg-paper text-ink light">
      <div className="max-w-wrap mx-auto px-[6vw] w-full">
        <Reveal>
          <span className="eyebrow">Chapter 16 — The solution</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-5 text-[clamp(40px,7vw,88px)]">
            Introducing
            <br />
            Auto Vision 360.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-[52ch] text-lg leading-[1.7] text-ink-soft">
            A human-centered redesign of the traditional auto-rickshaw canopy. Instead of treating the canopy
            as a protective cover, it becomes a communication system.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-12">
            <PlaceholderImage filename="hero-auto-render.png" tag="Auto Vision 360" aspect="aspect-[16/9]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
