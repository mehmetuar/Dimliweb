"use client";

/**
 * Yedek kulübesi (batı kenarı): çerçeve + eğik şeffaf çatı + koltuk sırası.
 * P3 (Takımınla Haberleş) bölümünün sahne öğesi.
 */

import { Instances, Instance } from "@react-three/drei";

const SEATS = 5;

export default function Dugout({ position = [-16.4, 0, 0] as readonly [number, number, number] }) {
  return (
    <group position={position as [number, number, number]} rotation={[0, Math.PI / 2, 0]}>
      {/* Taban platformu */}
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[6.4, 0.16, 1.8]} />
        <meshStandardMaterial color="#1b2a44" roughness={0.9} />
      </mesh>
      {/* Arka pano */}
      <mesh position={[0, 1.15, -0.85]}>
        <boxGeometry args={[6.4, 2.1, 0.08]} />
        <meshStandardMaterial color="#223350" roughness={0.85} />
      </mesh>
      {/* Eğik çatı (yarı saydam) */}
      <mesh position={[0, 2.25, -0.1]} rotation={[-0.42, 0, 0]}>
        <boxGeometry args={[6.6, 0.06, 1.9]} />
        <meshStandardMaterial color="#4ade80" transparent opacity={0.22} roughness={0.3} />
      </mesh>
      {/* Yan destekler */}
      {([-3.1, 3.1] as const).map((x) => (
        <mesh key={x} position={[x, 1.1, 0.72]}>
          <cylinderGeometry args={[0.05, 0.05, 2.2, 6]} />
          <meshStandardMaterial color="#334155" roughness={0.8} />
        </mesh>
      ))}
      {/* Koltuklar */}
      <Instances frustumCulled={false} range={SEATS} limit={SEATS}>
        <boxGeometry args={[0.85, 0.5, 0.55]} />
        <meshStandardMaterial color="#22c55e" roughness={0.6} />
        {Array.from({ length: SEATS }, (_, i) => (
          <Instance key={i} position={[-2.4 + i * 1.2, 0.5, -0.35]} />
        ))}
      </Instances>
    </group>
  );
}
