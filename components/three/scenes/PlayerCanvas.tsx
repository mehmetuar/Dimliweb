"use client";

/**
 * Oyuncu sayfası canvas kökü — PlayerExperience bunu dynamic(ssr:false) ile
 * yükler; three'ye dokunan her şey bu chunk'ta kalır.
 */

import type { MotionValue } from "framer-motion";
import { useTexture } from "@react-three/drei";
import SceneCanvas from "../core/SceneCanvas";
import CameraRail from "../core/CameraRail";
import PlayerScene from "./PlayerScene";
import { PLAYER_RAIL } from "./playerTimeline";
import type { QualityTier } from "../core/useQuality";

// Marka dokularını chunk yüklenir yüklenmez fetch et — tabelalar bölüme
// gelindiğinde hazır olsun.
useTexture.preload("/3d/tex/dimli-lockup.webp");
useTexture.preload("/3d/tex/oyuncu.webp");
useTexture.preload("/3d/tex/is-ortagi.webp");

interface PlayerCanvasProps {
  progress: MotionValue<number>;
  quality: Exclude<QualityTier, "off">;
}

export default function PlayerCanvas({ progress, quality }: PlayerCanvasProps) {
  return (
    <SceneCanvas quality={quality}>
      <CameraRail progress={progress} keyframes={PLAYER_RAIL} />
      <PlayerScene progress={progress} quality={quality} />
    </SceneCanvas>
  );
}
