# Beyond the Blind Spot — Auto Vision 360

A cinematic, single-page case study built with Next.js (App Router), Tailwind CSS,
Framer Motion and GSAP.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Fonts (Inter + Space Grotesk via next/font), SEO metadata
  page.tsx           Assembles all 22 chapters in order
  globals.css        Design tokens, placeholder-image styling, reduced-motion support
components/
  Reveal.tsx             Scroll-triggered fade/rise wrapper (Framer Motion)
  ProgressBar.tsx         Top scroll-progress line
  MirrorIndicator.tsx     The page's signature element — a circular "mirror" that
                          fills in as you scroll, echoing the blind-spot theme
  Section.tsx             Shared light/dark section shell
  PlaceholderImage.tsx    Labeled placeholder block — swap for next/image once
                          real renders/photography exist (see "Replacing images" below)
  BeforeAfterSlider.tsx   Draggable before/after comparison, keyboard accessible
  sections/               One component per chapter (Hero, DriveHome, VisibilityReveal, ...)
tailwind.config.ts    Color palette, font families, layout tokens
```

## Design tokens

- **Palette**: paper `#FAFAF9`, ink `#0B0B0C`, dark `#0B0B0C`, one accent — amber `#FF7A1A`
  (chosen to echo a rickshaw indicator/brake light rather than a decorative color).
- **Type**: Space Grotesk (display/headings) + Inter (body/UI).
- **Signature element**: the mirror scroll indicator in `MirrorIndicator.tsx`.

## Replacing placeholder images

Every visual is currently a labeled placeholder (`components/PlaceholderImage.tsx`) using
descriptive filenames like `hero-auto-render.png`. To swap in real assets:

1. Drop final renders/photography into `public/images/` using the same filenames
   referenced in each section component.
2. Replace `<PlaceholderImage filename="..." />` with:
   ```tsx
   import Image from "next/image";
   <Image src={`/images/${filename}`} alt="..." fill className="object-cover" />
   ```
3. Remove the now-unused `PlaceholderImage` import from that file.

## Accessibility & performance notes

- `prefers-reduced-motion` is respected globally (see `globals.css`) and Framer Motion's
  `viewport={{ once: true }}` avoids re-triggering animations on scroll-back.
- The before/after slider is keyboard-operable (arrow keys) and exposes `role="slider"`.
- Images should be added via `next/image` for automatic lazy-loading, AVIF/WebP, and
  responsive sizing once real assets are in place.
- Update `metadataBase`/OG image path in `app/layout.tsx` once the site has a real domain.

## Motion libraries

- **Framer Motion** drives all scroll reveals, the progress bar, and the mirror indicator.
- **GSAP + ScrollTrigger** drives the single dramatic moment — the "VISIBILITY" scale-in
  in `components/sections/VisibilityReveal.tsx` — kept to one orchestrated moment rather
  than scattered throughout, per the design brief's restraint principle.
