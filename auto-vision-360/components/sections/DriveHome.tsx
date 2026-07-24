import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function DriveHome() {
  return (
    <Section theme="light">
      <Reveal>
        <span className="eyebrow">Chapter 01</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(30px,5vw,54px)] max-w-[20ch]">
          It started with one drive home.
        </h2>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
        <div className="flex flex-col gap-6 text-lg leading-[1.7] max-w-[56ch]">
          <Reveal>
            <p>
              One day, I was driving back home from the office — and I almost rear-ended two auto-rickshaws
              within an hour.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p>Fortunately, I managed to stop just in time before hitting them.</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-ink-soft">
              I&apos;m not saying this to show off my driving skills. I&apos;m simply thankful that nothing bad
              happened that day.
            </p>
          </Reveal>
          <Reveal>
            <p>The first auto suddenly braked because a biker cut in front of him.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p>The second auto suddenly braked because a lady crossed the road right in front of him.</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="pt-4 border-t border-line">
              After reaching home, one thought kept running through my mind for the rest of the day.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="font-display text-[clamp(24px,3vw,34px)]">&quot;Was it my mistake&hellip; or the auto driver&apos;s?&quot;</p>
          </Reveal>
        </div>
        <Reveal delay={0.16}>
          <PlaceholderImage filename="story-drive-home.jpg" tag="01 / 22" aspect="aspect-[3/4]" />
        </Reveal>
      </div>
    </Section>
  );
}
