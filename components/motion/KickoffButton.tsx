"use client";

import { m } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { useReducedMotionSafe } from "./useMotionEnv";

/**
 * Birincil CTA sarmalayıcı — "başlama vuruşu":
 * - MagneticButton ile imleç takibi (dokunmatik/reduced-motion'da pasif).
 * - Tap'te küçülme + periyodik ışık sheen süpürmesi (floodlight hissi).
 * Sarmalanan children kendi stilini (gradient/border) taşıyan bir Link/buton olmalı.
 */
interface KickoffButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function KickoffButton({ children, className, strength = 0.25 }: KickoffButtonProps) {
  const reduce = useReducedMotionSafe();
  // Performans: eski sürümdeki SONSUZ sheen süpürmesi (repeat:Infinity) KALDIRILDI.
  // Kalan: hafif manyetik takip (yalnız fine-pointer) + tap'te küçülme.
  return (
    <MagneticButton strength={strength} className={`relative inline-flex rounded-xl ${className ?? ""}`}>
      <m.div className="relative inline-flex" whileTap={reduce ? undefined : { scale: 0.95 }}>
        {children}
      </m.div>
    </MagneticButton>
  );
}
