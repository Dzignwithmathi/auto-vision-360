"use client";

import { useCallback, useRef, useState } from "react";
import PlaceholderImage from "./PlaceholderImage";

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeFilename: string;
  afterFilename: string;
}

/** Drag (or tap-and-drag on touch) to reveal the "before" state over the "after" render. */
export default function BeforeAfterSlider({
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  beforeFilename,
  afterFilename,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(Math.max(next, 0), 100));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] cursor-ew-resize select-none"
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) setFromClientX(e.clientX);
      }}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
      role="slider"
      aria-label="Compare before and after canopy designs"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPct((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPct((p) => Math.min(100, p + 5));
      }}
    >
      <span className="absolute top-4 left-4 z-[3] text-[11px] tracking-[0.08em] font-display px-3 py-1.5 rounded-full bg-dark/70 text-white">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 z-[3] text-[11px] tracking-[0.08em] font-display px-3 py-1.5 rounded-full bg-dark/70 text-white">
        {afterLabel}
      </span>

      <div className="absolute inset-0">
        <PlaceholderImage filename={afterFilename} tag="Auto Vision 360" aspect="aspect-auto h-full" className="h-full" />
      </div>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        <PlaceholderImage filename={beforeFilename} tag="Standard Canopy" aspect="aspect-auto h-full" className="h-full" />
      </div>

      <div className="absolute top-0 bottom-0 w-0" style={{ left: `${pct}%` }}>
        <div className="absolute top-0 bottom-0 left-0 w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" />
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg">
          ↔
        </div>
      </div>
    </div>
  );
}
