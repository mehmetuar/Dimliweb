"use client";

/**
 * 3D deneyim kalite katmanı. three IMPORT ETMEZ (ana chunk'ta kalır).
 *
 * - "off":  reduced-motion isteği veya WebGL yok → statik fallback render edilir,
 *           three chunk'ı HİÇ indirilmez.
 * - "low":  dokunmatik + zayıf cihaz (deviceMemory ≤ 4 GB veya ≤ 4 çekirdek)
 *           → DPR kıs, gölge yok, instance sayıları yarıya.
 * - "high": geri kalan herkes.
 *
 * SSR/hydration: ilk render DAİMA "high" döner (server ile birebir); gerçek
 * değer mount sonrası effect'te ölçülür. Böylece çoğunluk (yetenekli cihazlar)
 * layout flaşı görmez; "off"/"low" azınlığı mount'tan hemen sonra düşürülür.
 */

import { useEffect, useState } from "react";
import { useReducedMotionSafe } from "@/components/motion/useMotionEnv";

export type QualityTier = "high" | "low" | "off";

function detectTier(): QualityTier {
  try {
    const c = document.createElement("canvas");
    const gl =
      c.getContext("webgl2") ??
      c.getContext("webgl") ??
      c.getContext("experimental-webgl");
    if (!gl) return "off";
  } catch {
    return "off";
  }

  const coarse = window.matchMedia?.("(pointer: coarse)").matches ?? false;
  const mem = (navigator as { deviceMemory?: number }).deviceMemory;
  const cores = navigator.hardwareConcurrency ?? 8;
  if (coarse && ((mem !== undefined && mem <= 4) || cores <= 4)) return "low";
  return "high";
}

export function useQuality(): QualityTier {
  const reduce = useReducedMotionSafe();
  const [tier, setTier] = useState<QualityTier>("high");

  useEffect(() => {
    setTier(detectTier());
  }, []);

  return reduce ? "off" : tier;
}
