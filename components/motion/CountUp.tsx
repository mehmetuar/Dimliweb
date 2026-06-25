"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "./transitions";

/**
 * Görününe girince 0'dan hedef sayıya animasyonla sayar.
 * Reduced-motion'da anında final değeri gösterir.
 */
interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.4,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const reduce = useReducedMotion();

  const format = (v: number) => `${prefix}${v.toFixed(decimals)}${suffix}`;

  useEffect(() => {
    if (!ref.current) return;
    if (reduce) {
      ref.current.textContent = format(to);
      return;
    }
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: EASE_OUT,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = format(v);
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, to]);

  // İlk (SSR) render: 0'dan başlasın, JS gelince animasyon devralır.
  return (
    <span ref={ref} className={className}>
      {format(reduce ? to : 0)}
    </span>
  );
}
