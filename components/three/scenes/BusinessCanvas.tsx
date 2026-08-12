"use client";

/**
 * İşletme sayfası canvas kökü — BusinessExperience bunu dynamic(ssr:false)
 * ile yükler.
 */

import type { MotionValue } from "framer-motion";
import { useTexture } from "@react-three/drei";
import SceneCanvas from "../core/SceneCanvas";
import CameraRail from "../core/CameraRail";
import BusinessScene from "./BusinessScene";
import { BUSINESS_RAIL } from "./businessTimeline";
import type { QualityTier } from "../core/useQuality";

// Tabela dokularını chunk yüklenir yüklenmez fetch et.
useTexture.preload("/3d/tex/dimli-wordmark.webp");
useTexture.preload("/3d/tex/is-ortagi.webp");

interface BusinessCanvasProps {
  progress: MotionValue<number>;
  quality: Exclude<QualityTier, "off">;
}

export default function BusinessCanvas({ progress, quality }: BusinessCanvasProps) {
  return (
    <SceneCanvas quality={quality}>
      <CameraRail progress={progress} keyframes={BUSINESS_RAIL} />
      <BusinessScene progress={progress} quality={quality} />
    </SceneCanvas>
  );
}
