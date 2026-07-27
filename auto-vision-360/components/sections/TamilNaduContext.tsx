import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const stats = [
  { value: "67,213", label: "Total Reported Road Accidents (2023)" },
  { value: "18,347", label: "Total Fatalities (2023)" },
  { value: "#1", label: "Nationally, by accident count" },
  { value: "#2", label: "Nationally, by fatalities (after Uttar Pradesh)" },
];

function LocatorGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-[320px] mx-auto flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-line-dark" />
      <div className="absolute inset-[15%] rounded-full border border-line-dark" />
      <div className="absolute inset-[32%] rounded-full border border-line-dark" />
      <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.08em] text-dark-soft">
        INDIA
      </span>
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-amber/40 animate-ping" />
        <span className="relative block w-3 h-3 rounded-full bg-amber" />
      </div>
      <span className="absolute bottom-[16%] left-[58%] text-xs font-display text-amber whitespace-nowrap">
        Tamil Nadu
      </span>
    </div>
  );
}

export default function TamilNaduContext() {
  return (
    <Section theme="dark">
      <Reveal>
        <span className="eyebrow">Where This Sits Nationally</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.6vw,46px)] max-w-[20ch]">
          Tamil Nadu — a state that needs attention.
        </h2>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-14 items-center">
        <Reveal delay={0.08}>
          <LocatorGraphic />
        </Reveal>
        <div className="grid grid-cols-2 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.16 + i * 0.06}>
              <div>
                <div className="font-display text-[clamp(28px,3.4vw,40px)] text-amber">{s.value}</div>
                <p className="mt-1.5 text-sm text-dark-soft">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="mt-16 max-w-[62ch] border-t border-line-dark pt-8">
          <p className="text-dark-soft leading-[1.7]">
            Tamil Nadu consistently records one of the highest reported road accident counts in India. Road
            crashes happen because of many overlapping factors — driver behaviour, road conditions,
            infrastructure, weather, vehicle condition, traffic, and visibility among them. This project
            focuses on only one of these: improving visual communication. It does not suggest that
            auto-rickshaws are responsible for these statistics.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-8 text-xs tracking-[0.04em] text-dark-soft">
          Source: Ministry of Road Transport &amp; Highways (MoRTH), &quot;Road Accidents in India 2023.&quot;
        </p>
      </Reveal>
    </Section>
  );
}
