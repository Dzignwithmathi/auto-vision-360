import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const categories = [
  { letter: "A", title: "Through Visibility", desc: "Seeing what's ahead of the auto" },
  { letter: "B", title: "Rear Visibility", desc: "Being seen from behind" },
  { letter: "C", title: "Side Visibility", desc: "Awareness at the flanks" },
  { letter: "D", title: "Signal Visibility", desc: "Braking & intent communication" },
];

const cornerBase =
  "pointer-events-none absolute h-4 w-4 border-amber opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0";

export default function Synthesis() {
  return (
    <Section theme="light">
      <Reveal>
        <span className="eyebrow">Chapter 10 — Synthesis</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[18ch]">
          Visibility wasn&apos;t one problem. It was four.
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-line mt-12">
        {categories.map((c, i) => (
          <Reveal key={c.letter} delay={i * 0.08} className="h-full">
            <div className="group relative h-full bg-paper p-7 overflow-hidden">
              <span className={`${cornerBase} left-2 top-2 border-l-2 border-t-2 -translate-x-1 -translate-y-1`} />
              <span
                className={`${cornerBase} right-2 top-2 border-r-2 border-t-2 translate-x-1 -translate-y-1 delay-75`}
              />
              <span
                className={`${cornerBase} left-2 bottom-2 border-l-2 border-b-2 -translate-x-1 translate-y-1 delay-75`}
              />
              <span className={`${cornerBase} right-2 bottom-2 border-r-2 border-b-2 translate-x-1 translate-y-1`} />

              <div className="relative">
                <div className="num">{c.letter}</div>
                <p className="mt-2.5 text-base">{c.title}</p>
                <p className="mt-2 text-[13px] text-ink-soft">{c.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
