"use client";

/**
 * Kuzey kale arkasındaki skorboard + P5 "Fair Play" penceresinde beliren
 * yıldızlar. Metin drei Text (Türkçe glifli Inter ttf) ile.
 */

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import { fadeWindow } from "../../core/timeline";

const FONT = "/3d/fonts/Inter-SemiBold.ttf";

function starShape(): THREE.Shape {
  const s = new THREE.Shape();
  const outer = 0.5;
  const inner = 0.21;
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) s.moveTo(x, y);
    else s.lineTo(x, y);
  }
  s.closePath();
  return s;
}

interface ScoreboardProps {
  progress: MotionValue<number>;
  /** Yıldızların belirdiği pencere (P5). */
  starsWindow: readonly [number, number];
  position?: readonly [number, number, number];
}

export default function Scoreboard({
  progress,
  starsWindow,
  position = [0, 0, -27.5],
}: ScoreboardProps) {
  const starGeo = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(starShape(), { depth: 0.12, bevelEnabled: false });
    g.center();
    return g;
  }, []);
  const starsRef = useRef<THREE.Group>(null);

  useFrame(() => {
    const v = fadeWindow(progress.get(), starsWindow[0], starsWindow[1]);
    const g = starsRef.current;
    if (!g) return;
    g.visible = v > 0.02;
    g.children.forEach((child, i) => {
      // Yıldızlar soldan sağa sırayla patlar
      const local = fadeWindow(v, i * 0.16, i * 0.16 + 0.35);
      child.scale.setScalar(0.05 + 0.95 * local);
    });
  });

  const [x, , z] = position;

  return (
    <group position={[x, 0, z]}>
      {/* Direkler */}
      {([-3.2, 3.2] as const).map((px) => (
        <mesh key={px} position={[px, 2.6, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 5.2, 8]} />
          <meshStandardMaterial color="#334155" roughness={0.8} />
        </mesh>
      ))}
      {/* Pano */}
      <mesh position={[0, 5.6, 0]}>
        <boxGeometry args={[7.6, 3, 0.25]} />
        <meshStandardMaterial color="#0b1322" roughness={0.6} />
      </mesh>
      {/* Pano çerçeve ışığı */}
      <mesh position={[0, 5.6, 0.14]}>
        <planeGeometry args={[7.3, 2.7]} />
        <meshBasicMaterial color="#101d33" toneMapped={false} />
      </mesh>
      <Text
        font={FONT}
        position={[0, 6.2, 0.16]}
        fontSize={0.62}
        color="#4ade80"
        anchorX="center"
        anchorY="middle"
        characters="DİMLRAKP0123456789:- "
      >
        DİMLİ 5 : 4 RAKİP
      </Text>
      <Text
        font={FONT}
        position={[0, 5.25, 0.16]}
        fontSize={0.34}
        color="#94a3b8"
        anchorX="center"
        anchorY="middle"
      >
        FAİR PLAY PUANLAMASI
      </Text>

      {/* P5 yıldızları — panonun üstünde */}
      <group ref={starsRef} position={[0, 8, 0.1]} visible={false}>
        {Array.from({ length: 5 }, (_, i) => (
          <mesh key={i} geometry={starGeo} position={[(i - 2) * 1.35, 0, 0]}>
            <meshBasicMaterial color="#fbbf24" toneMapped={false} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
