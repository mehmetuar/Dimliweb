"use client";

import { useRef } from "react";
import { m, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { SPRING_SNAPPY_OPTS } from "./transitions";
import { useCoarsePointer } from "./useMotionEnv";

/**
 * İmleci yumuşakça takip eden "manyetik" sarmalayıcı (mağaza rozetleri / birincil CTA için).
 * Dokunmatik (coarse pointer) ve reduced-motion'da etki devre dışı.
 */
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // 0..1 — imleci ne kadar takip etsin
}

export default function MagneticButton({ children, className, strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const coarse = useCoarsePointer();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, SPRING_SNAPPY_OPTS);
  const sy = useSpring(y, SPRING_SNAPPY_OPTS);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || coarse || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.div
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </m.div>
  );
}
