"use client";

import { useEffect, useRef } from "react";
import {
  m,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { SPRING_SOFT_OPTS } from "./transitions";
import { useReducedMotionSafe, useCoarsePointer } from "./useMotionEnv";

/**
 * Navbar'ın "Stadyum Vitrini" dekoratif katmanı (pointer-events-none, aria-hidden).
 * Doğrudan `<nav className="relative ...">` içine, içerik bloğundan ÖNCE konur; içerik bloğu
 * `relative z-10` olmalı ki bu katmanın üstünde kalsın.
 *
 * Katmanlar:
 *  1. Üst hairline — tema rengiyle ince ışık çizgisi.
 *  2. Floodlight sweep — yavaş sol→sağ süpüren projektör ışığı (AuroraBackground deseni).
 *  3. Cursor spotlight — imleci takip eden parlak halka (yalnız fine-pointer + reduce-off).
 *  4. Scroll chalk-progress — sayfa kaydıkça alt kenarda soldan dolan tebeşir çizgisi.
 */
const THEME = {
  turf: {
    sweep: "rgba(34,197,94,0.13)",
    hairline: "rgba(74,222,128,0.55)",
    spotlight: "rgba(34,197,94,0.16)",
    bar: "from-turf-600 via-turf-400 to-turf-500",
    barShadow: "shadow-neon-sm",
  },
  ember: {
    sweep: "rgba(249,115,22,0.13)",
    hairline: "rgba(251,146,60,0.55)",
    spotlight: "rgba(249,115,22,0.16)",
    bar: "from-ember-600 via-ember-400 to-ember-500",
    barShadow: "shadow-neon-ember-sm",
  },
} as const;

interface NavAtmosphereProps {
  theme?: "turf" | "ember";
}

export default function NavAtmosphere({ theme = "turf" }: NavAtmosphereProps) {
  const reduce = useReducedMotionSafe();
  const coarse = useCoarsePointer();
  const ref = useRef<HTMLDivElement>(null);
  const t = THEME[theme];

  // Cursor spotlight — ekran dışı başlar, imleç nav üstüne gelince belirir.
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const smx = useSpring(mx, SPRING_SOFT_OPTS);
  const smy = useSpring(my, SPRING_SOFT_OPTS);
  const spotlight = useMotionTemplate`radial-gradient(180px circle at ${smx}px ${smy}px, ${t.spotlight}, transparent 70%)`;

  useEffect(() => {
    if (reduce || coarse) return;
    const nav = ref.current?.parentElement;
    if (!nav) return;
    const onMove = (e: MouseEvent) => {
      const r = nav.getBoundingClientRect();
      mx.set(e.clientX - r.left);
      my.set(e.clientY - r.top);
    };
    const onLeave = () => {
      mx.set(-300);
      my.set(-300);
    };
    nav.addEventListener("mousemove", onMove);
    nav.addEventListener("mouseleave", onLeave);
    return () => {
      nav.removeEventListener("mousemove", onMove);
      nav.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce, coarse, mx, my]);

  // Scroll chalk-progress (tüm sayfa ilerlemesi).
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 1. Üst hairline */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${t.hairline}, transparent)` }}
      />

      {/* 2. Floodlight sweep */}
      <m.div
        className="absolute inset-0 mix-blend-screen blur-2xl"
        style={{
          backgroundImage: `radial-gradient(42% 130% at 30% 50%, ${t.sweep} 0%, transparent 70%)`,
          backgroundSize: "180% 180%",
        }}
        animate={reduce ? undefined : { backgroundPosition: ["-20% 50%", "120% 50%", "-20% 50%"] }}
        transition={reduce ? undefined : { duration: 14, ease: "linear", repeat: Infinity }}
      />

      {/* 3. Cursor spotlight (yalnız fine-pointer + reduce-off) */}
      {!reduce && !coarse && <m.div className="absolute inset-0" style={{ background: spotlight }} />}

      {/* 4. Scroll chalk-progress bar */}
      <m.div
        className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r ${t.bar} ${t.barShadow}`}
        style={{ scaleX: reduce ? 1 : scaleX }}
      />
    </div>
  );
}
