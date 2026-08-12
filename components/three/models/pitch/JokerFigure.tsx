"use client";

/**
 * P4 "Joker Havuzu" sahne öğesi: ember turuncu oyuncu, tepeden vuran sıcak
 * spot ve zemin halkasıyla bölüm penceresinde belirir (scale + ışık şiddeti
 * scroll'a bağlı).
 */

import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import { fadeWindow } from "../../core/timeline";
import { getGlowTexture } from "../../fx/glow";
import HumanFigure from "./HumanFigure";

interface JokerFigureProps {
  progress: MotionValue<number>;
  /** Global ilerlemede belirme penceresi. */
  window: readonly [number, number];
  position?: readonly [number, number, number];
}

export default function JokerFigure({
  progress,
  window: win,
  position = [4, 0, -2],
}: JokerFigureProps) {
  const glowTex = useMemo(() => getGlowTexture(), []);
  const groupRef = useRef<THREE.Group>(null);
  const spotRef = useRef<THREE.SpotLight>(null);
  const ringRef = useRef<THREE.MeshBasicMaterial>(null);
  const targetRef = useRef<THREE.Object3D>(new THREE.Object3D());

  useEffect(() => {
    targetRef.current.position.set(position[0], 0, position[2]);
    if (spotRef.current) spotRef.current.target = targetRef.current;
  }, [position]);

  useFrame(() => {
    const v = fadeWindow(progress.get(), win[0], win[1]);
    if (groupRef.current) {
      const s = 0.4 + 0.6 * v;
      groupRef.current.scale.setScalar(s);
      groupRef.current.visible = v > 0.02;
    }
    if (spotRef.current) spotRef.current.intensity = 140 * v;
    if (ringRef.current) ringRef.current.opacity = 0.5 * v;
  });

  const [x, , z] = position;

  return (
    <group>
      <group ref={groupRef} position={[x, 0, z]} rotation={[0, 0.5, 0]}>
        {/* İnsansı figür — ember forma, spot altında ışıldar */}
        <HumanFigure jersey="#f97316" shorts="#7c2d12" emissiveIntensity={0.3} />
        {/* Baş üstü glow */}
        <sprite position={[0, 2.05, 0]} scale={[1.4, 1.4, 1]}>
          <spriteMaterial
            map={glowTex}
            color="#fb923c"
            transparent
            opacity={0.7}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </sprite>
      </group>

      {/* Zemin ışık halkası */}
      <mesh position={[x, 0.02, z]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.9, 1.35, 40]} />
        <meshBasicMaterial
          ref={ringRef}
          color="#fb923c"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={2}
        />
      </mesh>

      {/* Tepeden sıcak spot */}
      <spotLight
        ref={spotRef}
        position={[x, 9, z]}
        angle={0.3}
        penumbra={0.6}
        decay={1.3}
        distance={30}
        intensity={0}
        color="#ffb066"
      />
      <primitive object={targetRef.current} />
    </group>
  );
}
