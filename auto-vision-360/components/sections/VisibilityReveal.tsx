"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";

export default function VisibilityReveal() {
  const wordRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = wordRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 0.82, opacity: 0.4, letterSpacing: "0em" },
        {
          scale: 1,
          opacity: 1,
          letterSpacing: "-0.02em",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 35%",
            scrub: 0.6,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center text-center bg-dark text-paper dark">
      <div className="max-w-wrap mx-auto px-[6vw] w-full">
        <Reveal>
          <span className="eyebrow justify-center">Chapter 05 — The missing piece</span>
        </Reveal>
        <h2 ref={wordRef} className="giant mt-7 text-amber">
          VISIBILITY
        </h2>
        <div className="max-w-[52ch] mx-auto mt-9 flex flex-col gap-3.5">
          <Reveal delay={0.16}>
            <p className="text-lg leading-[1.7] text-dark-soft">
              Unlike a car, an auto hides almost everything happening ahead of it.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="text-lg leading-[1.7]">
              The issue wasn&apos;t only that I couldn&apos;t see ahead. The auto driver couldn&apos;t clearly
              see behind either.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="text-lg leading-[1.7] text-dark-soft">
              The same design element was limiting visibility for everyone in the interaction.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
