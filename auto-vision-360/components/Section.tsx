import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  theme?: "light" | "dark";
  id?: string;
  className?: string;
  fullHeight?: boolean;
}

/** Shared full-bleed section shell; alternating light/dark themes carry the editorial rhythm. */
export default function Section({ children, theme = "light", id, className = "", fullHeight = false }: SectionProps) {
  const themeClasses =
    theme === "dark" ? "bg-dark text-paper dark" : "bg-paper text-ink light";
  return (
    <section
      id={id}
      className={`relative py-[11vh] ${fullHeight ? "min-h-screen flex flex-col justify-center" : ""} ${themeClasses} ${className}`}
    >
      <div className="max-w-wrap mx-auto px-[6vw] w-full">{children}</div>
    </section>
  );
}
