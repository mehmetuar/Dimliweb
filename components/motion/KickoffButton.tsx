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
  return (
    <MagneticButton strength={strength} className={`relative inline-flex rounded-xl ${className ?? ""}`}>
      <m.div className="relative inline-flex" whileTap={reduce ? undefined : { scale: 0.95 }}>
        {children}
      </m.div>
      {!reduce && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
          <m.span
            aria-hidden
            className="absolute top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ left: "-40%" }}
            animate={{ x: ["0%", "450%"] }}
            transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
          />
        </span>
      )}
    </MagneticButton>
  );
}
