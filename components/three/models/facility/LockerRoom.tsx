"use client";

/**
 * B3 soyunma odası köşesi (doğu duvarı, güney yarı): instanced dolaplar +
 * bank + B3 penceresinde dolapların üzerinden yükselen değerlendirme
 * yıldızları (müşteri puanları metaforu).
 */

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Instances, Instance } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import { fadeWindow } from "../../core/timeline";

const LOCKERS = 6;

function starShape(): THREE.Shape {
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? 0.3 : 0.13;
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) s.moveTo(x, y);
    else s.lineTo(x, y);
  }
  s.closePath();
  return s;
}

interface LockerRoomProps {
  progress: MotionValue<number>;
  window: readonly [number, number];
}

export default function LockerRoom({ progress, window: win }: LockerRoomProps) {
  const starGeo = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(starShape(), { depth: 0.08, bevelEnabled: false });
    g.center();
    return g;
  }, []);
  const starsRef = useRef<THREE.Group>(null);

  useFrame(() => {
    const v = fadeWindow(progress.get(), win[0], win[1]);
    const g = starsRef.current;
    if (!g) return;
    g.visible = v > 0.02;
    g.children.forEach((child, i) => {
      const local = fadeWindow(v, i * 0.14, i * 0.14 + 0.4);
      child.scale.setScalar(0.05 + 0.95 * local);
      child.position.y = 2.6 + local * 0.8 + (i % 2) * 0.35;
    });
  });

  return (
    <group position={[15, 0, 3.5]} rotation={[0, -Math.PI / 2, 0]}>
      {/* Dolaplar */}
      <Instances frustumCulled={false} range={LOCKERS} limit={LOCKERS}>
        <boxGeometry args={[0.78, 2.2, 0.55]} />
        <meshStandardMaterial color="#16a34a" roughness={0.55} />
        {Array.from({ length: LOCKERS }, (_, i) => (
          <Instance key={i} position={[-2.1 + i * 0.85, 1.1, 0]} />
        ))}
      </Instances>
      {/* Dolap kapak çizgileri */}
      <Instances frustumCulled={false} range={LOCKERS} limit={LOCKERS}>
        <planeGeometry args={[0.64, 2.02]} />
        <meshStandardMaterial color="#15803d" roughness={0.5} />
        {Array.from({ length: LOCKERS }, (_, i) => (
          <Instance key={i} position={[-2.1 + i * 0.85, 1.1, 0.281]} />
        ))}
      </Instances>
      {/* Havalandırma yarıkları */}
      <Instances frustumCulled={false} range={LOCKERS * 2} limit={LOCKERS * 2}>
        <planeGeometry args={[0.4, 0.05]} />
        <meshStandardMaterial color="#0f172a" roughness={0.6} />
        {Array.from({ length: LOCKERS * 2 }, (_, i) => (
          <Instance
            key={i}
            position={[-2.1 + (i % LOCKERS) * 0.85, 1.75 - Math.floor(i / LOCKERS) * 0.18, 0.282]}
          />
        ))}
      </Instances>

      {/* Bank */}
      <mesh position={[0, 0.42, 1.5]}>
        <boxGeometry args={[4.2, 0.09, 0.45]} />
        <meshStandardMaterial color="#3b2f24" roughness={0.7} />
      </mesh>
      {([-1.8, 1.8] as const).map((x) => (
        <mesh key={x} position={[x, 0.2, 1.5]}>
          <boxGeometry args={[0.08, 0.4, 0.4]} />
          <meshStandardMaterial color="#1e293b" roughness={0.8} />
        </mesh>
      ))}

      {/* Değerlendirme yıldızları */}
      <group ref={starsRef} visible={false}>
        {Array.from({ length: 5 }, (_, i) => (
          <mesh key={i} geometry={starGeo} position={[-1.6 + i * 0.8, 2.8, 0.2]}>
            <meshBasicMaterial color="#fbbf24" toneMapped={false} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
