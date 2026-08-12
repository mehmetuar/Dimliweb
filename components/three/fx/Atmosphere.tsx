"use client";

/**
 * Gece atmosferi: arka plan + sis + ay ışığı + yıldızlar.
 * Yıldızlar statiktir (speed=0) — frameloop="demand" ile uyumlu, sürekli
 * kare istemez.
 */

import { Stars } from "@react-three/drei";
import type { QualityTier } from "../core/useQuality";

interface AtmosphereProps {
  quality: Exclude<QualityTier, "off">;
  /** Sis başlangıç/bitiş mesafesi — sahne ölçeğine göre ayarlanır. */
  fogRange?: readonly [number, number];
}

export default function Atmosphere({ quality, fogRange = [62, 215] }: AtmosphereProps) {
  return (
    <>
      <color attach="background" args={["#0c1426"]} />
      <fog attach="fog" args={["#0c1426", fogRange[0], fogRange[1]]} />

      {/* Ay + ortam: soğuk lacivert gece tabanı — kenarlar okunacak kadar açık */}
      <ambientLight intensity={0.5} color="#6b8ac2" />
      <directionalLight position={[40, 60, 20]} intensity={0.55} color="#8fa8d8" />
      <hemisphereLight args={["#33466f", "#16213a", 0.5]} />

      <Stars
        radius={200}
        depth={50}
        count={quality === "low" ? 1200 : 3500}
        factor={3.2}
        saturation={0}
        fade
        speed={0}
      />
    </>
  );
}
