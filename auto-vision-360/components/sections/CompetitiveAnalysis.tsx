import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const rows = [
  ["Bajaj RE", "Low", "Medium", "Low-mounted", "High", "Partial"],
  ["TVS King", "Low", "Medium", "Low-mounted", "High", "Partial"],
  ["Piaggio Ape", "Medium", "Medium", "Low-mounted", "Medium", "Partial"],
  ["Mahindra Treo", "Medium", "Medium", "Low-mounted", "Medium", "Full"],
  ["Atul Gem", "Low", "Low", "Low-mounted", "High", "Partial"],
];

export default function CompetitiveAnalysis() {
  return (
    <Section theme="dark">
      <Reveal>
        <span className="eyebrow">Chapter 11 — Competitive analysis</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.4vw,44px)] max-w-[16ch]">
          How today&apos;s autos compare.
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <div className="mt-11 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {["Model", "Rear Vis.", "Side Vis.", "Brake Light", "Passenger Block", "Weather Cover"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left py-4 px-3.5 border-b border-line-dark font-display font-medium text-[12px] tracking-[0.05em] uppercase text-dark-soft"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-4 px-3.5 border-b border-line-dark">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
      <Reveal>
        <p className="mt-5 text-sm text-dark-soft">
          Across every major model, the same four gaps recur — regardless of manufacturer or price point.
        </p>
      </Reveal>
    </Section>
  );
}
