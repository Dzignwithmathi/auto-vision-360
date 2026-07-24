import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";

const features = [
  {
    num: "01",
    title: "Panoramic Rear Visibility",
    desc: "A segmented canopy window that survives passenger seating — so what's behind the auto stays visible, no matter who's riding.",
    filename: "feature-panorama.png",
    reverse: false,
  },
  {
    num: "02",
    title: "Enhanced Side Visibility",
    desc: "Slimmer frame pillars and angled glazing extend the driver's peripheral awareness at intersections and lane changes.",
    filename: "feature-side-vis.png",
    reverse: true,
  },
  {
    num: "03",
    title: "High-Mounted Brake Light",
    desc: "Relocated above the canopy line, at the eye level of the vehicles behind — visible over traffic, not hidden beneath it.",
    filename: "feature-brake-light.png",
    reverse: false,
  },
  {
    num: "04",
    title: "Reflective Visibility Border",
    desc: "A low-cost reflective outline along the canopy edge, so the auto's silhouette reads clearly at night and in rain.",
    filename: "feature-reflective-border.png",
    reverse: true,
  },
  {
    num: "05",
    title: "Retrofit-Friendly Modular Design",
    desc: "Every component bolts onto existing canopy frames — no new chassis, no manufacturing overhaul, no cost barrier for drivers.",
    filename: "feature-retrofit-exploded.png",
    reverse: false,
  },
];

export default function Features() {
  return (
    <Section theme="dark" className="!pt-[8vh]">
      <Reveal>
        <span className="eyebrow mb-5 block">Chapter 17 — Features</span>
      </Reveal>

      <div className="flex flex-col gap-24 mt-10">
        {features.map((f) => (
          <Reveal key={f.num}>
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div className={f.reverse ? "md:order-2" : "md:order-1"}>
                <div className="num">{f.num}</div>
                <h3 className="mt-3 font-display text-[clamp(24px,3vw,36px)]">{f.title}</h3>
                <p className="mt-3.5 text-base leading-[1.7] max-w-[44ch] text-dark-soft">{f.desc}</p>
              </div>
              <div className={f.reverse ? "md:order-1" : "md:order-2"}>
                <PlaceholderImage filename={f.filename} tag={f.num} onDark />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
