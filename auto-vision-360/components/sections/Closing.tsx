import Reveal from "@/components/Reveal";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function Closing() {
  return (
    <footer className="relative min-h-screen flex flex-col justify-center text-center py-[11vh] bg-dark text-paper dark">
      <div className="max-w-wrap mx-auto px-[6vw] w-full">
        <Reveal>
          <p className="font-display text-[clamp(30px,6vw,64px)] max-w-[20ch] mx-auto">
            We redesigned the canopy.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-display text-[clamp(30px,6vw,64px)] max-w-[20ch] mx-auto mt-3.5 text-dark-soft">
            But what we were really redesigning&hellip;
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="font-display text-[clamp(30px,6vw,64px)] max-w-[20ch] mx-auto mt-3.5 text-amber">
            was confidence.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-16 max-w-[920px] mx-auto">
            <PlaceholderImage filename="closing-hero-render.png" tag="Auto Vision 360" aspect="aspect-[16/7]" onDark />
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-16 text-[13px] tracking-[0.06em] text-dark-soft">
            BEYOND THE BLIND SPOT — A PRODUCT DESIGN CASE STUDY
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
