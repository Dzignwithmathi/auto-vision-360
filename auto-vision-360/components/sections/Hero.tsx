import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col justify-center bg-dark text-paper dark">
      <div className="max-w-wrap mx-auto px-[6vw] w-full">
        <Reveal delay={0}>
          <span className="eyebrow">Auto Vision 360 — Case Study</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display mt-7 text-[clamp(40px,8vw,108px)] leading-[1.02] max-w-[16ch]">
            Beyond the
            <br />
            Blind Spot.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-[46ch] text-[clamp(16px,2vw,20px)] leading-[1.55] text-dark-soft">
            How one drive home made me question the way we see India&apos;s most common public transport.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-14 flex gap-9 flex-wrap">
            <div>
              <div className="num">ROLE</div>
              <div className="mt-1 text-sm">Product &amp; UX Design</div>
            </div>
            <div>
              <div className="num">TIMELINE</div>
              <div className="mt-1 text-sm">8 months</div>
            </div>
            <div>
              <div className="num">OUTCOME</div>
              <div className="mt-1 text-sm">Retrofit-ready canopy system</div>
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.32}>
        <div className="max-w-wrap mx-auto px-[6vw] w-full pb-12 flex items-center gap-2.5">
          <div className="w-px h-[34px] bg-line-dark" />
          <span className="text-[12px] tracking-[0.08em] text-dark-soft">SCROLL TO BEGIN</span>
        </div>
      </Reveal>
    </header>
  );
}
