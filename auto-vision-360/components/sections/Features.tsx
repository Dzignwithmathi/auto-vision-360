"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import ModelViewer, { type ModelViewerHandle } from "@/components/ModelViewer";

interface Feature {
  num: string;
  title: string;
  desc: string;
  cameraOrbit: string;
  cameraTarget: string;
  hotspot: { position: string; normal: string };
}

const features: Feature[] = [
  {
    num: "01",
    title: "Panoramic Rear Visibility",
    desc: "A segmented canopy window that survives passenger seating — so what's behind the auto stays visible, no matter who's riding.",
    cameraOrbit: "180deg 78deg 3.2m",
    cameraTarget: "0m 1.1m -0.3m",
    hotspot: { position: "0m 1.3m -0.9m", normal: "0m 0.3m -1m" },
  },
  {
    num: "02",
    title: "Enhanced Side Visibility",
    desc: "Slimmer frame pillars and angled glazing extend the driver's peripheral awareness at intersections and lane changes.",
    cameraOrbit: "100deg 80deg 3m",
    cameraTarget: "0m 1m 0m",
    hotspot: { position: "0.8m 1.1m 0.1m", normal: "1m 0.2m 0m" },
  },
  {
    num: "03",
    title: "High-Mounted Brake Light",
    desc: "Relocated above the canopy line, at the eye level of the vehicles behind — visible over traffic, not hidden beneath it.",
    cameraOrbit: "195deg 68deg 2.8m",
    cameraTarget: "0m 1.6m -0.6m",
    hotspot: { position: "0m 1.75m -0.85m", normal: "0m 0.6m -0.8m" },
  },
  {
    num: "04",
    title: "Reflective Visibility Border",
    desc: "A low-cost reflective outline along the canopy edge, so the auto's silhouette reads clearly at night and in rain.",
    cameraOrbit: "225deg 75deg 3m",
    cameraTarget: "0m 1.4m -0.2m",
    hotspot: { position: "-0.6m 1.5m -0.4m", normal: "-0.6m 0.4m -0.5m" },
  },
  {
    num: "05",
    title: "Retrofit-Friendly Modular Design",
    desc: "Every component bolts onto existing canopy frames — no new chassis, no manufacturing overhaul, no cost barrier for drivers.",
    cameraOrbit: "45deg 72deg 3.4m",
    cameraTarget: "0m 0.9m 0m",
    hotspot: { position: "0.4m 0.9m 0.6m", normal: "0.4m 0.3m 0.8m" },
  },
];

const SCROLL_VH_PER_FEATURE = 70;

export default function Features() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<ModelViewerHandle>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [calibrating, setCalibrating] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = wrapperRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const idx = Math.min(features.length - 1, Math.floor(self.progress * features.length));
          setActiveIndex(idx);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const f = features[activeIndex];
    viewerRef.current?.setCamera(f.cameraOrbit, f.cameraTarget);
  }, [activeIndex]);

  const goToFeature = (index: number) => {
    const el = wrapperRef.current;
    if (!el) return;
    const stageHeight = el.offsetHeight / features.length;
    const targetY = el.offsetTop + stageHeight * index + stageHeight / 2;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const active = features[activeIndex];

  return (
    <div ref={wrapperRef} className="relative bg-dark" style={{ height: `${features.length * SCROLL_VH_PER_FEATURE}vh` }}>
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden text-paper dark">
        <div className="relative h-[75%] w-full">
          <ModelViewer
            ref={viewerRef}
            src="/models/auto-vision-360-prototype.glb"
            alt="3D prototype of the Auto Vision 360 auto-rickshaw canopy redesign"
            className="absolute inset-0"
          >
            {features.map((f, i) => (
              <button
                key={f.num}
                slot={`hotspot-${f.num}`}
                data-position={f.hotspot.position}
                data-normal={f.hotspot.normal}
                className="relative flex items-center justify-center"
                style={{ opacity: i === activeIndex ? 1 : 0, transition: "opacity 0.4s ease", pointerEvents: "none" }}
                aria-hidden={i !== activeIndex}
              >
                <span className="absolute w-3 h-3 rounded-full bg-amber" />
                <span className="absolute w-3 h-3 rounded-full bg-amber animate-ping" />
              </button>
            ))}
          </ModelViewer>

          <div className="pointer-events-none absolute top-6 left-0 right-0 flex justify-center">
            <span className="eyebrow bg-dark/60 backdrop-blur px-3 py-1.5 rounded-full">
              Chapter 17 — Features
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.num}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 0.84, 0.44, 1] }}
              className="pointer-events-none absolute bottom-4 left-4 right-4 sm:left-8 sm:right-auto max-w-[360px] bg-dark/70 backdrop-blur-md border border-line-dark rounded-sm p-4"
            >
              <div className="num">{active.num}</div>
              <h3 className="mt-1 font-display text-lg">{active.title}</h3>
              <p className="mt-1.5 text-sm text-dark-soft leading-[1.5]">{active.desc}</p>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => {
              const next = !calibrating;
              setCalibrating(next);
              viewerRef.current?.setCalibrationMode(next);
            }}
            className="absolute top-6 right-6 text-[11px] tracking-[0.06em] px-3 py-1.5 rounded-full border border-line-dark bg-dark/60 backdrop-blur"
          >
            {calibrating ? "Calibrating… (click model)" : "Calibrate hotspots"}
          </button>
        </div>

        <div className="h-[25%] w-full border-t border-line-dark bg-dark flex items-center">
          <div className="w-full max-w-wrap mx-auto px-[6vw]">
            <div className="flex gap-2 overflow-x-auto md:grid md:grid-cols-5 md:gap-px md:bg-line-dark snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {features.map((f, i) => (
                <button
                  key={f.num}
                  type="button"
                  onClick={() => goToFeature(i)}
                  aria-label={`Show feature ${f.num}: ${f.title}`}
                  aria-pressed={i === activeIndex}
                  className={`shrink-0 snap-start w-[150px] md:w-auto text-left px-4 py-3 md:py-4 bg-dark transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-2 ${
                    i === activeIndex ? "border-b-2 border-amber" : "border-b-2 border-transparent"
                  }`}
                >
                  <div className={`num ${i === activeIndex ? "" : "opacity-50"}`}>{f.num}</div>
                  <div
                    className={`mt-1 text-[13px] leading-[1.3] ${
                      i === activeIndex ? "text-paper" : "text-dark-soft"
                    }`}
                  >
                    {f.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
