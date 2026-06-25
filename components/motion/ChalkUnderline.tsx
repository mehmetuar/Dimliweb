"use client";

import { m, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "./transitions";

/** Link altında hover'da soldan sağa "tebeşirle çizilen" saha çizgisi (pathLength). */
const STROKE = { turf: "#4ade80", ember: "#fb923c" } as const;

interface ChalkUnderlineProps {
  theme?: "turf" | "ember";
  active?: boolean;
}

export default function ChalkUnderline({ theme = "turf", active = false }: ChalkUnderlineProps) {
  const reduce = useReducedMotion();
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-2 right-2 -bottom-0.5 h-2"
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
      fill="none"
    >
      <m.path
        d="M1 5 Q 25 2, 50 4 T 99 4"
        stroke={STROKE[theme]}
        strokeWidth={2}
        strokeLinecap="round"
        initial={false}
        animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.4, ease: EASE_OUT }}
      />
    </svg>
  );
}
