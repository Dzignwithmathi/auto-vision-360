import Reveal from "@/components/Reveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { label: "Total Road Accidents", value: 480583, note: "in 2023" },
  { label: "Total Fatalities", value: 172890, note: "highest ever recorded" },
  { label: "Deaths Per Day", value: 474, note: "on average" },
  { label: "Deaths Per Hour", value: 20, note: "on average" },
];

export default function StatsOverview() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-dark text-paper dark flex flex-col justify-center py-[11vh]">
      <div className="absolute inset-0 -z-10">
        <PlaceholderImage
          filename="context-traffic-loop.mp4 (looping footage, slow-motion, subtle blur)"
          aspect="aspect-auto"
          onDark
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-dark/80" />
      </div>

      <div className="relative max-w-wrap mx-auto px-[6vw] w-full">
        <Reveal>
          <span className="eyebrow">Why This Problem Matters</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-5 text-[clamp(30px,5vw,54px)] max-w-[18ch]">
            Road safety isn&apos;t just a statistic.
          </h2>
        </Reveal>

        <div className="mt-8 max-w-[60ch] flex flex-col gap-3 text-dark-soft text-lg leading-[1.7]">
          <Reveal delay={0.16}>
            <p>The incident that happened to me wasn&apos;t unique.</p>
          </Reveal>
          <Reveal delay={0.22}>
            <p>Every day, thousands of similar situations unfold across India&apos;s roads.</p>
          </Reveal>
          <Reveal delay={0.28}>
            <p>Most end safely. Some don&apos;t.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-t border-line-dark pt-5">
                <div className="font-display text-[clamp(32px,4.2vw,50px)] text-amber">
                  <AnimatedCounter value={s.value} />
                </div>
                <p className="mt-2 text-sm">{s.label}</p>
                <p className="mt-1 text-xs text-dark-soft">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-sm text-dark-soft max-w-[54ch]">
            On average, India records a road fatality roughly every 3 minutes.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-16 text-xs tracking-[0.04em] text-dark-soft">
            Source: Ministry of Road Transport &amp; Highways (MoRTH), &quot;Road Accidents in India 2023.&quot;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
