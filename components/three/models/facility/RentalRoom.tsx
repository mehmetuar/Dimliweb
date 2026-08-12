"use client";

/**
 * B4 yelek & krampon kiralama köşesi (doğu duvarı, kuzey yarı):
 * askı rayında yelekler (iki takım rengi) + rafta krampon sıraları.
 */

import { Instances, Instance } from "@react-three/drei";

const VESTS = 8;
const CLEATS = 10;

export default function RentalRoom() {
  return (
    <group position={[15, 0, -3.5]} rotation={[0, -Math.PI / 2, 0]}>
      {/* Askı rayı */}
      <mesh position={[0, 2.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 4.6, 8]} />
        <meshStandardMaterial color="#64748b" roughness={0.5} metalness={0.4} />
      </mesh>
      {([-2.2, 2.2] as const).map((x) => (
        <mesh key={x} position={[x, 1.05, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 2.1, 8]} />
          <meshStandardMaterial color="#334155" roughness={0.7} />
        </mesh>
      ))}

      {/* Yelekler — dönüşümlü yeşil/turuncu bib */}
      <Instances frustumCulled={false} range={VESTS} limit={VESTS}>
        <planeGeometry args={[0.42, 0.62]} />
        <meshStandardMaterial color="#22c55e" roughness={0.8} side={2} />
        {Array.from({ length: Math.ceil(VESTS / 2) }, (_, i) => (
          <Instance key={i} position={[-1.85 + i * 1.0, 1.72, 0.02]} rotation={[0, 0, 0.04]} />
        ))}
      </Instances>
      <Instances frustumCulled={false} range={VESTS} limit={VESTS}>
        <planeGeometry args={[0.42, 0.62]} />
        <meshStandardMaterial color="#f97316" roughness={0.8} side={2} />
        {Array.from({ length: Math.floor(VESTS / 2) }, (_, i) => (
          <Instance key={i} position={[-1.35 + i * 1.0, 1.72, -0.02]} rotation={[0, 0, -0.05]} />
        ))}
      </Instances>
      {/* Askı kancaları */}
      <Instances frustumCulled={false} range={VESTS} limit={VESTS}>
        <cylinderGeometry args={[0.015, 0.015, 0.18, 6]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.4} metalness={0.5} />
        {Array.from({ length: VESTS }, (_, i) => (
          <Instance key={i} position={[-1.85 + i * 0.5, 2.02, 0]} />
        ))}
      </Instances>

      {/* Krampon rafı */}
      <mesh position={[0, 0.5, 0.5]}>
        <boxGeometry args={[4.6, 0.06, 0.5]} />
        <meshStandardMaterial color="#3b2f24" roughness={0.7} />
      </mesh>
      <Instances frustumCulled={false} range={CLEATS} limit={CLEATS}>
        <boxGeometry args={[0.3, 0.14, 0.42]} />
        <meshStandardMaterial color="#0f172a" roughness={0.6} />
        {Array.from({ length: CLEATS }, (_, i) => (
          <Instance key={i} position={[-2.05 + i * 0.46, 0.6, 0.5]} rotation={[0, (i % 3) * 0.06 - 0.06, 0]} />
        ))}
      </Instances>
      {/* Zemin sepetleri */}
      {([-1.4, 0.2] as const).map((x) => (
        <mesh key={x} position={[x, 0.18, 1.1]}>
          <cylinderGeometry args={[0.32, 0.26, 0.36, 10]} />
          <meshStandardMaterial color="#223350" roughness={0.85} />
        </mesh>
      ))}

      {/* Köşe aydınlatması — yelekler B4 kadrajında okunsun */}
      <pointLight position={[0, 3, 1.6]} intensity={14} distance={9} decay={1.7} color="#ffd9a0" />
    </group>
  );
}
