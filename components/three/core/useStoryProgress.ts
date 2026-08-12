"use client";

/**
 * Hikâye (bölümler sarmalayıcısı) boyunca 0→1 global scroll ilerlemesi.
 * three IMPORT ETMEZ. Native document scroll'u okur (Lenis native scrollTop
 * animasyonu yaptığı için uyumludur) — kamera rayı ve sahne prop'ları bu
 * MotionValue'yu `useFrame` içinde `.get()` ile okur; React re-render tetiklenmez.
 *
 * offset ["start start","end end"]: sarmalayıcının üstü viewport üstüne
 * geldiğinde 0, altı viewport altına geldiğinde 1.
 */

import { useScroll, type MotionValue } from "framer-motion";
import type { RefObject } from "react";

export function useStoryProgress(
  target: RefObject<HTMLElement>
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });
  return scrollYProgress;
}
