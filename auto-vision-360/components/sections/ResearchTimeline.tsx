"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const items = [
  "Government road-safety reports",
  "Direct road observations",
  "News archives & incident reports",
  "Existing patents in the space",
  "Existing auto-rickshaw designs",
  "Academic research papers",
];

export default function ResearchTimeline() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  const [progress, setProgress] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let nudgeTimeout: ReturnType<typeof setTimeout> | undefined;
    if (!reduced && el.scrollWidth > el.clientWidth) {
      nudgeTimeout = setTimeout(() => {
        el.scrollTo({ left: 56, behavior: "smooth" });
        setTimeout(() => el.scrollTo({ left: 0, behavior: "smooth" }), 550);
      }, 600);
    }

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      if (nudgeTimeout) clearTimeout(nudgeTimeout);
    };
  }, [updateScrollState]);

  const scrollByAmount = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollerRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el || !isDragging.current) return;
    el.scrollLeft = dragStartScroll.current - (e.clientX - dragStartX.current);
  };
  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <Section theme="dark">
      <Reveal>
        <span className="eyebrow">Chapter 07 — Research</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[18ch]">
          Turning a hunch into evidence.
        </h2>
      </Reveal>

      <div className="relative mt-12">
        <div
          className={`pointer-events-none absolute left-0 top-0 bottom-3 w-14 bg-gradient-to-r from-dark to-transparent z-10 transition-opacity duration-300 ${
            canLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`pointer-events-none absolute right-0 top-0 bottom-3 w-14 bg-gradient-to-l from-dark to-transparent z-10 transition-opacity duration-300 ${
            canRight ? "opacity-100" : "opacity-0"
          }`}
        />

        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollByAmount(-1)}
          className={`hidden md:flex absolute -left-5 top-[42%] -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-line-dark bg-dark items-center justify-center transition-opacity duration-300 ${
            canLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollByAmount(1)}
          className={`hidden md:flex absolute -right-5 top-[42%] -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-line-dark bg-dark items-center justify-center transition-opacity duration-300 ${
            canRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          →
        </button>

        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="flex gap-5 overflow-x-auto pb-3 snap-x snap-proximity cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, i) => (
            <Reveal key={item} delay={(i % 4) * 0.08} className="shrink-0">
              <div className="w-[260px] border-l border-line-dark pl-4 snap-start">
                <div className="num">{String(i + 1).padStart(2, "0")}</div>
                <p className="mt-2.5 text-[15px]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 h-[2px] bg-line-dark rounded-full overflow-hidden md:hidden">
          <div
            className="h-full bg-amber rounded-full transition-[width] duration-150"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
      </div>

      <Reveal>
        <div className="mt-14 max-w-[60ch] pt-7 border-t border-line-dark">
          <p className="text-[17px] leading-[1.7] text-dark-soft">
            Visibility may not be the officially recorded cause of accidents — but the evidence suggested it
            consistently contributes to delayed reaction time.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
