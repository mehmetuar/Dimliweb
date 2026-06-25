"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { m, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { SPRING_SNAPPY_OPTS } from "./transitions";
import ChalkUnderline from "./ChalkUnderline";

/**
 * Masaüstü nav link grubu — "skorboard" hissi.
 * - Hover edilen linke TEK kayan LED pill süzülür: linkin offsetLeft/offsetWidth ölçülüp
 *   motion value + useSpring ile x/width'e bağlanır (layoutId YOK — domAnimation strict ile uyumlu).
 * - Her link altında hover'da tebeşir underline çizilir.
 * - Tema turf(tüketici)/ember(işletme) renkleriyle ayrışır.
 */
export interface NavItem {
  label: string;
  href: string;
  muted?: boolean;
}

interface ScoreboardLinksProps {
  theme: "turf" | "ember";
  items: NavItem[];
  className?: string;
}

const ACCENT = {
  turf: { led: "bg-turf-500/15 ring-turf-500/40", shadow: "shadow-neon-sm" },
  ember: { led: "bg-ember-500/15 ring-ember-500/40", shadow: "shadow-neon-ember-sm" },
} as const;

export default function ScoreboardLinks({ theme, items, className }: ScoreboardLinksProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const a = ACCENT[theme];

  const x = useMotionValue(0);
  const width = useMotionValue(0);
  const opacity = useMotionValue(0);
  const sx = useSpring(x, SPRING_SNAPPY_OPTS);
  const sw = useSpring(width, SPRING_SNAPPY_OPTS);
  const firstShow = useRef(true);

  const moveTo = (el: HTMLElement, i: number) => {
    const left = el.offsetLeft;
    const w = el.offsetWidth;
    // İlk gösterimde pill'i hedefe ANINDA taşı (soldan süzülerek uçmasın).
    if (firstShow.current) {
      sx.jump(left);
      sw.jump(w);
      firstShow.current = false;
    }
    x.set(left);
    width.set(w);
    opacity.set(1);
    setHovered(i);
  };

  const clear = () => {
    opacity.set(0);
    setHovered(null);
  };

  return (
    <div
      className={`relative hidden md:flex items-center gap-1 ${className ?? ""}`}
      onMouseLeave={clear}
    >
      {/* Kayan LED pill */}
      <m.div
        aria-hidden
        className={`absolute top-1 bottom-1 left-0 -z-10 rounded-lg ring-1 ${a.led} ${a.shadow}`}
        style={reduce ? { opacity, left: 0 } : { x: sx, width: sw, opacity }}
      />

      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          onMouseEnter={(e) => moveTo(e.currentTarget, i)}
          onFocus={(e) => moveTo(e.currentTarget, i)}
          className={`group relative px-4 py-2 text-base font-semibold transition-colors ${
            item.muted ? "text-slate-400 hover:text-white" : "text-slate-300 hover:text-white"
          }`}
        >
          <span className="relative">{item.label}</span>
          <ChalkUnderline theme={theme} active={hovered === i} />
        </Link>
      ))}
    </div>
  );
}
