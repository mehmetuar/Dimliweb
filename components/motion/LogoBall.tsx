"use client";

import Image from "next/image";
import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { SPRING_SNAPPY } from "./transitions";
import { useReducedMotionSafe } from "./useMotionEnv";

/**
 * Logo (D harfi içinde futbol topu) — futbol dokunuşu:
 * - Mount'ta scale+opacity "başlama vuruşu" pop'u.
 * - Scroll'da top yuvarlanır (scrollY → rotate, useSpring ile yumuşatılmış).
 * - Hover'da hafif büyüme + tema glow halesi. Tap'te küçülme.
 * - Scroll'da mevcut boyut küçülmesi korunur (scrolled prop).
 * - reduced-motion → statik logo (rotate/scale animasyonu yok).
 */
const GLOW = { turf: "hover:shadow-neon-sm", ember: "hover:shadow-neon-ember-sm" } as const;

interface LogoBallProps {
  theme?: "turf" | "ember";
  scrolled?: boolean;
}

export default function LogoBall({ theme = "turf", scrolled = false }: LogoBallProps) {
  const reduce = useReducedMotionSafe();
  const { scrollY } = useScroll();
  const rotate = useSpring(useTransform(scrollY, [0, 800], [0, 360]), {
    stiffness: 80,
    damping: 20,
  });

  return (
    <m.div
      className={`rounded-xl md:rounded-2xl transition-all duration-300 ${GLOW[theme]} ${
        scrolled ? "w-9 h-9 md:w-16 md:h-16" : "w-10 h-10 md:w-[108px] md:h-[108px]"
      }`}
      whileHover={reduce ? undefined : { scale: 1.08 }}
      whileTap={reduce ? undefined : { scale: 0.94 }}
      transition={SPRING_SNAPPY}
    >
      <m.div
        className="w-full h-full"
        initial={reduce ? false : { scale: 0.6, opacity: 0 }}
        animate={reduce ? false : { scale: 1, opacity: 1 }}
        transition={{ ...SPRING_SNAPPY, delay: 0.05 }}
        style={reduce ? undefined : { rotate }}
      >
        <Image
          src="/icon.png"
          alt="Dimli"
          width={108}
          height={108}
          className="w-full h-full rounded-xl md:rounded-2xl object-contain"
          priority
        />
      </m.div>
    </m.div>
  );
}
