import Image from "next/image";

/**
 * Dimli logosu — STATİK ve her zaman görünür.
 * Animasyon yok (dönme/zıplama/giriş/hover-büyüme). Scroll'da yalnızca navbar ile birlikte
 * yumuşakça küçülür (scrolled prop + CSS transition). Garantili görünürlük.
 */
const GLOW = { turf: "hover:shadow-neon-sm", ember: "hover:shadow-neon-ember-sm" } as const;

interface LogoBallProps {
  theme?: "turf" | "ember";
  scrolled?: boolean;
}

export default function LogoBall({ theme = "turf", scrolled = false }: LogoBallProps) {
  return (
    <Image
      src="/icon.png"
      alt="Dimli"
      width={108}
      height={108}
      priority
      unoptimized
      className={`rounded-xl md:rounded-2xl object-contain transition-all duration-300 ${GLOW[theme]} ${
        scrolled ? "w-9 h-9 md:w-16 md:h-16" : "w-10 h-10 md:w-[108px] md:h-[108px]"
      }`}
    />
  );
}
