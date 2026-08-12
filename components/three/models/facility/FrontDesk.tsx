"use client";

/**
 * B1 kasa/resepsiyon: bank + yazar kasa + arkadaki bölme duvarında
 * saat-bazlı doluluk takvimi (emissive hücre ızgarası — dolu turf yeşili,
 * boş koyu). Takvim hücreleri bölüm penceresinde sırayla yanar.
 */

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import { fadeWindow } from "../../core/timeline";

const FONT = "/3d/fonts/Inter-SemiBold.ttf";
const COLS = 7;
const ROWS = 4;
// Deterministik "dolu" düzeni (rastgele yok — SSR/hydration derdi olmasın)
const BUSY = new Set([0, 2, 3, 5, 8, 9, 12, 14, 15, 17, 19, 22, 24, 26]);

interface FrontDeskProps {
  progress: MotionValue<number>;
  /** Takvim hücrelerinin yandığı pencere (B1). */
  window: readonly [number, number];
}

export default function FrontDesk({ progress, window: win }: FrontDeskProps) {
  const cellsRef = useRef<THREE.Group>(null);

  const cellColors = useMemo(
    () =>
      Array.from({ length: COLS * ROWS }, (_, i) =>
        BUSY.has(i) ? new THREE.Color("#22c55e") : new THREE.Color("#2a3b5c")
      ),
    []
  );

  useFrame(() => {
    const v = fadeWindow(progress.get(), win[0], win[1]);
    const g = cellsRef.current;
    if (!g) return;
    g.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      const mat = mesh.material as THREE.MeshBasicMaterial;
      // Hücreler soldan sağa dalga hâlinde belirir
      const local = fadeWindow(v, (i / (COLS * ROWS)) * 0.7, (i / (COLS * ROWS)) * 0.7 + 0.3);
      mat.opacity = 0.15 + 0.85 * local;
    });
  });

  return (
    <group>
      {/* Bank (L şekli) */}
      <mesh position={[0, 0.55, 1.6]}>
        <boxGeometry args={[4.4, 1.1, 0.9]} />
        <meshStandardMaterial color="#2b3a5e" roughness={0.7} />
      </mesh>
      <mesh position={[0, 1.14, 1.6]}>
        <boxGeometry args={[4.6, 0.08, 1.05]} />
        <meshStandardMaterial color="#3b4a6b" roughness={0.55} />
      </mesh>
      {/* Bank önü marka şeridi */}
      <mesh position={[0, 0.72, 2.06]}>
        <boxGeometry args={[4.4, 0.06, 0.02]} />
        <meshBasicMaterial color="#22c55e" toneMapped={false} />
      </mesh>
      {/* Yazar kasa */}
      <mesh position={[-1.3, 1.42, 1.55]}>
        <boxGeometry args={[0.7, 0.48, 0.5]} />
        <meshStandardMaterial color="#1e293b" roughness={0.55} />
      </mesh>
      <mesh position={[-1.3, 1.55, 1.32]} rotation={[-0.5, 0, 0]}>
        <planeGeometry args={[0.55, 0.32]} />
        <meshBasicMaterial color="#4ade80" toneMapped={false} />
      </mesh>

      {/* Bölme duvarındaki takvim panosu (duvar z=-1, güney yüzü) */}
      <group position={[0, 2, -0.85]}>
        <mesh>
          <planeGeometry args={[5.6, 2.2]} />
          <meshStandardMaterial color="#0f1a2f" roughness={0.7} />
        </mesh>
        <Text font={FONT} position={[-2.6, 0.86, 0.01]} fontSize={0.22} color="#94a3b8" anchorX="left">
          Doluluk Takvimi
        </Text>
        <group ref={cellsRef} position={[0, -0.12, 0.01]}>
          {Array.from({ length: COLS * ROWS }, (_, i) => {
            const cx = (i % COLS) - (COLS - 1) / 2;
            const cy = Math.floor(i / COLS) - (ROWS - 1) / 2;
            return (
              <mesh key={i} position={[cx * 0.72, -cy * 0.4, 0]}>
                <planeGeometry args={[0.6, 0.3]} />
                <meshBasicMaterial color={cellColors[i]} transparent opacity={0.15} toneMapped={false} />
              </mesh>
            );
          })}
        </group>
      </group>
    </group>
  );
}
