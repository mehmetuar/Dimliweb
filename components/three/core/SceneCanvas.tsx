"use client";

/**
 * Tüm sinematik sahnelerin ortak <Canvas> sarmalayıcısı.
 * - frameloop="demand": kare yalnız invalidate() ile üretilir (CameraRail
 *   scroll'da ister); scroll durup damping oturunca GPU uyur.
 * - dpr kalite katmanına göre kısılır.
 * - Bu dosya ve altındaki her şey dynamic(ssr:false) sınırının ARKASINDA kalır.
 */

import { Suspense, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Preload } from "@react-three/drei";
import type { QualityTier } from "./useQuality";

interface SceneCanvasProps {
  quality: Exclude<QualityTier, "off">;
  children: ReactNode;
}

export default function SceneCanvas({ quality, children }: SceneCanvasProps) {
  return (
    <Canvas
      frameloop="demand"
      dpr={quality === "low" ? [1, 1.25] : [1, 1.75]}
      shadows={quality === "high"}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      camera={{ fov: 45, near: 0.1, far: 400, position: [0, 40, 0.1] }}
      style={{ width: "100%", height: "100%" }}
    >
      <AdaptiveDpr pixelated />
      {/* useTexture (marka dokuları) suspend eder — sınır burada */}
      <Suspense fallback={null}>{children}</Suspense>
      <Preload all />
    </Canvas>
  );
}
