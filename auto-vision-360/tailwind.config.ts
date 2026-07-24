import type { Config } from "tailwindcss";

// Design tokens for "Beyond the Blind Spot".
// Palette deliberately avoids a warm-cream/terracotta default: near-white and
// near-black sections carry the editorial contrast, and amber (a rickshaw
// indicator / brake-light color) is the single accent — used sparingly.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF9",
        ink: "#0B0B0C",
        "ink-soft": "#4A4A4C",
        dark: "#0B0B0C",
        "dark-soft": "rgba(250,250,249,0.62)",
        amber: "#FF7A1A",
        "amber-dim": "rgba(255,122,26,0.14)",
        line: "rgba(11,11,12,0.10)",
        "line-dark": "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
