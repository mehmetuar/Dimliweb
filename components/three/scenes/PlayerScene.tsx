"use client";

/**
 * Oyuncu dünyası: gece halısahası — çim, kaleler, kafes, projektörler,
 * kulübe, oyuncular, joker, skorboard, yol ayrımı kapıları ve finalde
 * beliren neon Dimli yazısı.
 */

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import Atmosphere from "../fx/Atmosphere";
import BrandPlane from "../models/shared/BrandPlane";
import { getGlowTexture } from "../fx/glow";
import PitchField from "../models/pitch/PitchField";
import Goal from "../models/pitch/Goal";
import Floodlight from "../models/pitch/Floodlight";
import Fence from "../models/pitch/Fence";
import Dugout from "../models/pitch/Dugout";
import Players from "../models/pitch/Players";
import JokerFigure from "../models/pitch/JokerFigure";
import Scoreboard from "../models/pitch/Scoreboard";
import Ball from "../models/pitch/Ball";
import ForkGates from "../models/pitch/ForkGates";
import { fadeWindow } from "../core/timeline";
import { JOKER_WINDOW, STARS_WINDOW, NEON_WINDOW } from "./playerTimeline";
import type { QualityTier } from "../core/useQuality";

/** Finalde sahanın üzerinde beliren el yazısı DİMLİ kilidi (splash lockup'ı). */
function NeonDimli({ progress }: { progress: MotionValue<number> }) {
  const ref = useRef<THREE.Group>(null);
  const glowTex = useMemo(() => getGlowTexture(), []);
  useFrame(() => {
    const v = fadeWindow(progress.get(), NEON_WINDOW[0], NEON_WINDOW[1]);
    if (ref.current) {
      ref.current.visible = v > 0.02;
      ref.current.scale.setScalar(0.6 + 0.4 * v);
    }
  });
  return (
    <group ref={ref} position={[0, 13, 0]} visible={false}>
      {/* DOM CTA metniyle çakışmasın diye yalnız marka kilidi */}
      <Billboard>
        <sprite position={[0, 0, -0.4]} scale={[16, 18, 1]}>
          <spriteMaterial
            map={glowTex}
            color="#22c55e"
            transparent
            opacity={0.28}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </sprite>
        <BrandPlane url="/3d/tex/dimli-lockup.webp" width={7.5} />
      </Billboard>
    </group>
  );
}

interface PlayerSceneProps {
  progress: MotionValue<number>;
  quality: Exclude<QualityTier, "off">;
}

export default function PlayerScene({ progress, quality }: PlayerSceneProps) {
  const high = quality === "high";

  return (
    <>
      <Atmosphere quality={quality} />

      <PitchField />
      <Goal position={[0, 0, -21]} />
      <Goal position={[0, 0, 21]} flip />
      <Fence />
      <Dugout />
      <Players />
      <Ball />

      {/* 4 köşe projektörü — gölge yalnız high'da ve tek kulede */}
      <Floodlight position={[-15.5, 0, -24.5]} castShadow={high} />
      <Floodlight position={[15.5, 0, -24.5]} />
      <Floodlight position={[-15.5, 0, 24.5]} />
      <Floodlight position={[15.5, 0, 24.5]} />

      <JokerFigure progress={progress} window={JOKER_WINDOW} />
      <Scoreboard progress={progress} starsWindow={STARS_WINDOW} />
      <ForkGates />
      <NeonDimli progress={progress} />
    </>
  );
}
