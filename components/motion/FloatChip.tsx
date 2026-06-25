"use client";

import type { CSSProperties, ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";
import { floatChipVariants } from "./transitions";

/**
 * Telefon mockup'ı etrafında yüzen futbol temalı dekoratif rozet ("GOL!", "REZERVE ✓"…).
 * - Giriş: floatChipVariants (spring pop, kademeli gecikme).
 * - Sürekli yumuşak yüzme (her çip farklı faz). reduced-motion → statik.
 * - aria-hidden (dekoratif). Parent `relative` olmalı; konum `style` ile verilir.
 */
const ACCENT = {
  turf: "from-turf-400 to-turf-600 shadow-neon-sm",
  ember: "from-ember-400 to-ember-600 shadow-neon-ember-sm",
} as const;

interface FloatChipProps {
  label: string;
  accent?: "turf" | "ember";
  icon?: ReactNode;
  style?: CSSProperties;
  index?: number;
}

export default function FloatChip({ label, accent = "turf", icon, style, index = 0 }: FloatChipProps) {
  const reduce = useReducedMotion();
  return (
    <m.div
      aria-hidden
      className="pointer-events-none absolute z-20 select-none"
      style={style}
      variants={floatChipVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <m.div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black text-white bg-gradient-to-br ${ACCENT[accent]} border border-white/15 backdrop-blur-sm`}
        animate={reduce ? undefined : { y: [0, -8, 0], rotate: [-2, 2, -2] }}
        transition={reduce ? undefined : { duration: 4 + index * 0.5, ease: "easeInOut", repeat: Infinity }}
      >
        {icon}
        {label}
      </m.div>
    </m.div>
  );
}
