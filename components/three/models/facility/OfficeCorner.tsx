"use client";

/**
 * B2 arka ofis köşesi: masa + monitör + B2 penceresinde yükselen ciro
 * bar grafiği (kutu ölçekleri scroll'a bağlı büyür).
 */

import { useRef } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import { fadeWindow } from "../../core/timeline";

const FONT = "/3d/fonts/Inter-SemiBold.ttf";
const BAR_HEIGHTS = [0.45, 0.7, 0.55, 0.95, 0.8, 1.25, 1.5];

interface OfficeCornerProps {
  progress: MotionValue<number>;
  window: readonly [number, number];
  position?: readonly [number, number, number];
}

export default function OfficeCorner({
  progress,
  window: win,
  position = [-11.5, 0, -3.5],
}: OfficeCornerProps) {
  const barsRef = useRef<THREE.Group>(null);

  useFrame(() => {
    const v = fadeWindow(progress.get(), win[0], win[1]);
    const g = barsRef.current;
    if (!g) return;
    g.children.forEach((child, i) => {
      const grow = fadeWindow(v, i * 0.1, i * 0.1 + 0.45);
      const h = Math.max(0.02, BAR_HEIGHTS[i] * grow);
      child.scale.y = h / BAR_HEIGHTS[i];
      child.position.y = h / 2;
    });
  });

  const [x, , z] = position;

  return (
    <group position={[x, 0, z]} rotation={[0, Math.PI / 2.6, 0]}>
      {/* Masa */}
      <mesh position={[0, 0.72, 0]}>
        <boxGeometry args={[2.6, 0.08, 1.2]} />
        <meshStandardMaterial color="#3b2f24" roughness={0.7} />
      </mesh>
      {[[-1.15, -0.45], [1.15, -0.45], [-1.15, 0.45], [1.15, 0.45]].map(([bx, bz], i) => (
        <mesh key={i} position={[bx, 0.36, bz]}>
          <boxGeometry args={[0.08, 0.72, 0.08]} />
          <meshStandardMaterial color="#1e293b" roughness={0.8} />
        </mesh>
      ))}

      {/* Monitör */}
      <mesh position={[0, 1.35, -0.25]}>
        <boxGeometry args={[1.9, 1.15, 0.07]} />
        <meshStandardMaterial color="#0f172a" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.87, -0.25]}>
        <boxGeometry args={[0.3, 0.22, 0.2]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} />
      </mesh>
      {/* Ekran yüzü */}
      <mesh position={[0, 1.35, -0.2]}>
        <planeGeometry args={[1.74, 1]} />
        <meshBasicMaterial color="#0b1626" toneMapped={false} />
      </mesh>
      <Text font={FONT} position={[-0.78, 1.72, -0.19]} fontSize={0.11} color="#94a3b8" anchorX="left">
        Aylık Ciro
      </Text>
      <Text font={FONT} position={[0.78, 1.72, -0.19]} fontSize={0.12} color="#4ade80" anchorX="right">
        +%32
      </Text>

      {/* Yükselen barlar (ekran içinde) */}
      <group ref={barsRef} position={[-0.66, 0.93, -0.185]}>
        {BAR_HEIGHTS.map((h, i) => (
          <mesh key={i} position={[i * 0.22, h / 2, 0]}>
            <boxGeometry args={[0.14, h, 0.02]} />
            <meshBasicMaterial color={i === BAR_HEIGHTS.length - 1 ? "#4ade80" : "#16a34a"} toneMapped={false} />
          </mesh>
        ))}
      </group>

      {/* Ekran ışığı yüze vursun */}
      <pointLight position={[0, 1.4, 0.6]} intensity={4} distance={4} decay={2} color="#7dd3a7" />
    </group>
  );
}
