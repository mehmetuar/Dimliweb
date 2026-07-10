"use client";

import { m } from "framer-motion";
import { EASE_OUT } from "./transitions";
import { useReducedMotionSafe } from "./useMotionEnv";

/**
 * Telefon mockup sarmalayıcı. Cihaz görünümü (children) değişmez.
 * Performans: eski sürümdeki pointer 3D tilt + SONSUZ glow nabzı + SONSUZ sheen süpürmesi
 * + imleç glare KALDIRILDI (is-ortagi hero'sunda 4 instans = 8 sonsuz döngü kasmaya yol açıyordu).
 * Kalan: tek seferlik hafif giriş (fade+y, index'e göre kademeli) + arkada STATİK yumuşak parıltı.
 * `tiltMax`/`sheen` prop'ları geriye uyum için korunur (etkisiz).
 */
const GLOW = {
  turf: "rgba(34,197,94,0.26)",
  ember: "rgba(249,115,22,0.26)",
} as const;

interface Phone3DProps {
  children: React.ReactNode;
  accent?: "turf" | "ember";
  tiltMax?: number;
  glow?: boolean;
  sheen?: boolean;
  enter?: boolean;
  index?: number;
  radiusClass?: string;
  className?: string;
}

export default function Phone3D({
  children,
  accent = "turf",
  glow = true,
  enter = true,
  index = 0,
  radiusClass = "rounded-[2.8rem]",
  className,
}: Phone3DProps) {
  const reduce = useReducedMotionSafe();

  const enterProps = enter
    ? {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: {
          duration: 0.55,
          ease: EASE_OUT,
          delay: reduce ? 0 : Math.min(index * 0.08, 0.4),
        },
      }
    : {};

  return (
    <m.div className={className} {...enterProps}>
      <div className="relative">
        {glow && (
          <div
            aria-hidden
            className={`absolute inset-3 ${radiusClass}`}
            style={{ filter: "blur(24px)", background: GLOW[accent], opacity: 0.45 }}
          />
        )}
        <div className="relative">{children}</div>
      </div>
    </m.div>
  );
}
