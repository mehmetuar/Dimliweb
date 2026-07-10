"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "./useMotionEnv";

/**
 * Navbar'ın hafif dekoratif katmanı (pointer-events-none, aria-hidden).
 * Performans: eski sürümdeki SONSUZ floodlight sweep + her-mousemove cursor-spotlight
 * KALDIRILDI (sabit navbar'da kasmaya yol açıyordu). Kalanlar ucuz:
 *  1. Üst hairline — statik ince ışık çizgisi.
 *  2. Statik yumuşak parıltı — animasyonsuz.
 *  3. Scroll ilerleme çubuğu — tek GPU transform (scaleX).
 *
 * `<nav className="relative ...">` içine, içerik bloğundan ÖNCE konur; içerik `relative z-10` olmalı.
 */
const THEME = {
  turf: {
    glow: "rgba(34,197,94,0.10)",
    hairline: "rgba(74,222,128,0.45)",
    bar: "from-turf-600 via-turf-400 to-turf-500",
    barShadow: "shadow-neon-sm",
  },
  ember: {
    glow: "rgba(249,115,22,0.10)",
    hairline: "rgba(251,146,60,0.45)",
    bar: "from-ember-600 via-ember-400 to-ember-500",
    barShadow: "shadow-neon-ember-sm",
  },
} as const;

interface NavAtmosphereProps {
  theme?: "turf" | "ember";
}

export default function NavAtmosphere({ theme = "turf" }: NavAtmosphereProps) {
  const reduce = useReducedMotionSafe();
  const t = THEME[theme];

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 1. Üst hairline (statik) */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${t.hairline}, transparent)` }}
      />

      {/* 2. Statik yumuşak parıltı (animasyonsuz) */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `radial-gradient(60% 120% at 25% 0%, ${t.glow} 0%, transparent 70%)` }}
      />

      {/* 3. Scroll ilerleme çubuğu (tek transform) */}
      <m.div
        className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r ${t.bar} ${t.barShadow}`}
        style={{ scaleX: reduce ? 1 : scaleX }}
      />
    </div>
  );
}
