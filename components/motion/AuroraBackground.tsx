/**
 * Hero için statik gradient mesh ("aurora").
 * variant: turf (tüketici/yeşil) | ember (işletme/turuncu).
 * Parent'ı `relative overflow-hidden` olmalı; içerik üstte kalsın diye içerik bloğu `relative`.
 * Performans için STATİK (sürekli animasyon yok); hero'daki Parallax glow zaten hareket katıyor.
 */
interface AuroraBackgroundProps {
  variant?: "turf" | "ember";
  className?: string;
}

const PALETTES = {
  turf: {
    a: "rgba(34,197,94,0.20)",
    b: "rgba(16,163,74,0.12)",
    c: "rgba(34,197,94,0.06)",
  },
  ember: {
    a: "rgba(249,115,22,0.18)",
    b: "rgba(234,88,12,0.11)",
    c: "rgba(249,115,22,0.05)",
  },
};

export default function AuroraBackground({ variant = "turf", className = "" }: AuroraBackgroundProps) {
  const p = PALETTES[variant];

  const backgroundImage = [
    `radial-gradient(40% 50% at 22% 28%, ${p.a} 0%, transparent 70%)`,
    `radial-gradient(45% 55% at 78% 22%, ${p.b} 0%, transparent 70%)`,
    `radial-gradient(55% 60% at 50% 85%, ${p.c} 0%, transparent 70%)`,
  ].join(", ");

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 blur-2xl ${className}`}
      style={{ backgroundImage }}
    />
  );
}
