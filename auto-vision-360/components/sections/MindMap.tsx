import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const questions = [
  "Was this just bad luck?",
  "Does this happen only with autos?",
  "Why don't I feel this uncertainty behind cars?",
  "Why is the rear window so small?",
  "Why does it disappear once passengers sit inside?",
  "Is there something fundamentally different about how autos communicate with people around them?",
];

export default function MindMap() {
  return (
    <Section theme="light">
      <Reveal>
        <span className="eyebrow">Chapter 03</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-[clamp(28px,4.6vw,46px)] max-w-[18ch]">
          One question became many.
        </h2>
      </Reveal>
      <div className="mt-14 grid sm:grid-cols-2 gap-4">
        {questions.map((q, i) => (
          <Reveal key={q} delay={(i % 3) * 0.08}>
            <div
              className={`h-full py-6 border-t border-line ${i >= questions.length - 2 ? "border-b" : ""} ${
                i === questions.length - 1 ? "text-amber" : ""
              }`}
            >
              <p className="text-xl max-w-[26ch]">{q}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
