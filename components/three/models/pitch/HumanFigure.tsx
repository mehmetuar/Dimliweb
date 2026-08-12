"use client";

/**
 * Tekil low-poly insansı figür (Players ile aynı oranlar) — joker gibi
 * animasyonlu/özel figürler için instancing'siz sürüm.
 */

import { FIG, SKIN, HAIR, SOCKS } from "./figure";

interface HumanFigureProps {
  jersey: string;
  shorts?: string;
  /** Forma kendinden ışıldasın (joker vurgusu). */
  emissiveIntensity?: number;
}

export default function HumanFigure({
  jersey,
  shorts = "#1e293b",
  emissiveIntensity = 0,
}: HumanFigureProps) {
  return (
    <group>
      {([-FIG.legX, FIG.legX] as const).map((lx) => (
        <mesh key={lx} position={[lx, FIG.legH / 2, 0]}>
          <cylinderGeometry args={[FIG.legR, FIG.legR * 0.85, FIG.legH, 8]} />
          <meshStandardMaterial color={SOCKS} roughness={0.8} />
        </mesh>
      ))}
      <mesh position={[0, FIG.shortsY, 0]}>
        <boxGeometry args={[FIG.shortsW, FIG.shortsH, FIG.shortsD]} />
        <meshStandardMaterial color={shorts} roughness={0.7} />
      </mesh>
      <mesh position={[0, FIG.torsoY, 0]}>
        <cylinderGeometry args={[FIG.torsoTopR, FIG.torsoBottomR, FIG.torsoH, 10]} />
        <meshStandardMaterial
          color={jersey}
          emissive={jersey}
          emissiveIntensity={emissiveIntensity}
          roughness={0.6}
        />
      </mesh>
      {([-1, 1] as const).map((side) => (
        <mesh
          key={side}
          position={[side * FIG.armX, FIG.armY, 0]}
          rotation={[0, 0, side * -FIG.armTilt]}
        >
          <capsuleGeometry args={[FIG.armR, FIG.armH, 4, 8]} />
          <meshStandardMaterial color={SKIN} roughness={0.8} />
        </mesh>
      ))}
      <mesh position={[0, FIG.headY, 0]}>
        <sphereGeometry args={[FIG.headR, 14, 12]} />
        <meshStandardMaterial color={SKIN} roughness={0.75} />
      </mesh>
      <mesh position={[0, FIG.hairY, 0]} rotation={[0.12, 0, 0]}>
        <sphereGeometry args={[FIG.headR * 1.04, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2.1]} />
        <meshStandardMaterial color={HAIR} roughness={0.9} />
      </mesh>
    </group>
  );
}
