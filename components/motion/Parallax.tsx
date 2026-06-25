"use client";

import { useRef } from "react";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * İçeriğini scroll ilerlemesine göre hafifçe dikey kaydırır (parallax).
 * Hero arka plan glow'ları için. Reduced-motion'da kayma kapanır.
 */
interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // px; pozitif = scroll'da aşağı kayar
}

export default function Parallax({ children, className, speed = 80 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : speed]);

  return (
    <m.div ref={ref} style={{ y }} className={className}>
      {children}
    </m.div>
  );
}
