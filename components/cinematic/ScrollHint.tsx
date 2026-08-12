"use client";

/**
 * Hero altındaki kaydırma ipucu: harf aralıklı etiket + ince dikey ışık
 * çizgisi + aşağı akan ardışık chevronlar (kademeli `hint-flow` animasyonu).
 * Oyuncu sayfasında turf ("SAHAYA İN"), işletmede ember ("TESİSE GİR").
 */

interface ScrollHintProps {
  label: string;
  tone?: "turf" | "ember";
}

const TONE = {
  turf: { text: "text-turf-400", chevron: "text-turf-400", line: "from-turf-500/0 via-turf-500/60 to-turf-500/0" },
  ember: { text: "text-ember-400", chevron: "text-ember-400", line: "from-ember-500/0 via-ember-500/60 to-ember-500/0" },
};

export default function ScrollHint({ label, tone = "turf" }: ScrollHintProps) {
  const t = TONE[tone];
  return (
    <div className="flex flex-col items-center gap-3 select-none">
      <span className={`text-[11px] font-bold tracking-[0.3em] uppercase ${t.text} opacity-90`}>
        {label}
      </span>
      <div className="relative flex flex-col items-center h-14">
        {/* İnce ışık çizgisi */}
        <span className={`absolute inset-y-0 w-px bg-gradient-to-b ${t.line}`} />
        {/* Akan chevronlar */}
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            className={`w-4 h-4 -mb-1.5 ${t.chevron} animate-hint-flow`}
            style={{ animationDelay: `${i * 0.22}s` }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.4}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        ))}
      </div>
    </div>
  );
}
