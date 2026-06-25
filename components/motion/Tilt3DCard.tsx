"use client";

import { useRef } from "react";
import {
  m,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { SPRING_SNAPPY, SPRING_SNAPPY_OPTS } from "./transitions";
import { useReducedMotionSafe, useCoarsePointer } from "./useMotionEnv";

/**
 * İmlece tepki veren 3D perspektif eğim kartı ("sahadan kalkan kart").
 * - Kart imlece doğru eğilir (rotateX/rotateY), yüzeyde imleç-takipli glare gezer,
 *   içerik translateZ ile öne çıkar, altında tema neon gölgesi büyür.
 * - reduced-motion VEYA dokunmatik (coarse pointer) → düz statik kart (sadece CSS hover).
 * - Sarmalanan kartın Tailwind hover:-translate-y-* sınıfı KALDIRILMALI (transform çakışır).
 */
type TiltTag = "div" | "article";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: "turf" | "ember";
  intensity?: number; // maksimum eğim derecesi
  glare?: boolean;
  liftZ?: number; // içerik translateZ (px)
  as?: TiltTag;
}

const GLOW = {
  turf: {
    glare: "rgba(74,222,128,0.35)",
    shadow: "0 24px 60px -12px rgba(34,197,94,0.45), 0 0 30px rgba(34,197,94,0.25)",
  },
  ember: {
    glare: "rgba(251,146,60,0.35)",
    shadow: "0 24px 60px -12px rgba(249,115,22,0.45), 0 0 30px rgba(249,115,22,0.25)",
  },
} as const;

export default function Tilt3DCard({
  children,
  className,
  glow = "turf",
  intensity = 8,
  glare = true,
  liftZ = 40,
  as = "div",
}: Tilt3DCardProps) {
  const reduce = useReducedMotionSafe();
  const coarse = useCoarsePointer();
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, SPRING_SNAPPY_OPTS);
  const sry = useSpring(ry, SPRING_SNAPPY_OPTS);

  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glareOpacity = useMotionValue(0);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, ${GLOW[glow].glare} 0%, transparent 55%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || coarse) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 2 * intensity);
    rx.set(-(py - 0.5) * 2 * intensity);
    gx.set(px * 100);
    gy.set(py * 100);
    glareOpacity.set(0.55);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(50);
    glareOpacity.set(0);
  };

  // reduced-motion: statik kart, 3D/glare yok — sadece sarmalanan kartın CSS hover'ı.
  // `relative` korunur ki kartın absolute alt çizgisi (örn. son adım kartı) karta yapışsın.
  if (reduce) {
    const Tag = as;
    return <Tag className={`relative ${className ?? ""}`}>{children}</Tag>;
  }

  const Card = as === "article" ? m.article : m.div;

  return (
    <div
      ref={ref}
      className="h-full"
      style={{ perspective: 900 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <Card
        className={`relative ${className ?? ""}`}
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02, boxShadow: GLOW[glow].shadow }}
        transition={SPRING_SNAPPY}
      >
        <m.div style={{ transform: `translateZ(${liftZ}px)` }}>{children}</m.div>
        {glare && (
          <m.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              background: glareBg,
              opacity: glareOpacity,
              mixBlendMode: "soft-light",
              transform: `translateZ(${liftZ + 30}px)`,
            }}
          />
        )}
      </Card>
    </div>
  );
}
