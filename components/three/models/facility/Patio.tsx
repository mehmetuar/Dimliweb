"use client";

/**
 * B5 dış oturma alanı (binanın kuzeyi): yuvarlak masalar + tabureler +
 * iki direk arası ip ışıklar. Arkada tesise ait saha manzarası
 * (BusinessScene küçültülmüş PitchField + projektörlerle kurar).
 */

import { useMemo } from "react";
import * as THREE from "three";
import { Instances, Instance } from "@react-three/drei";
import { getGlowTexture } from "../../fx/glow";

const TABLES: [number, number][] = [
  [-5, -12],
  [0.5, -13.5],
  [6, -12],
];

export default function Patio() {
  const glowTex = useMemo(() => getGlowTexture(), []);

  const lightPoints = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= 14; i++) {
      const t = i / 14;
      pts.push([-8 + 16 * t, 3.6 - Math.sin(t * Math.PI) * 0.7, -14.5]);
    }
    return pts;
  }, []);

  return (
    <group>
      {/* Teras zemini */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.0, -12.5]}>
        <planeGeometry args={[26, 9]} />
        <meshStandardMaterial color="#1a2338" roughness={0.9} />
      </mesh>

      {/* Masalar + tabureler */}
      {TABLES.map(([x, z]) => (
        <group key={`${x}-${z}`} position={[x, 0, z]}>
          <mesh position={[0, 0.78, 0]}>
            <cylinderGeometry args={[0.55, 0.55, 0.05, 16]} />
            <meshStandardMaterial color="#3b2f24" roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.39, 0]}>
            <cylinderGeometry args={[0.06, 0.09, 0.78, 8]} />
            <meshStandardMaterial color="#1e293b" roughness={0.8} />
          </mesh>
          <Instances frustumCulled={false} range={3} limit={3}>
            <cylinderGeometry args={[0.22, 0.22, 0.5, 10]} />
            <meshStandardMaterial color="#223350" roughness={0.8} />
            {[0, 1, 2].map((k) => {
              const a = (k / 3) * Math.PI * 2 + 0.5;
              return <Instance key={k} position={[Math.cos(a) * 1.05, 0.25, Math.sin(a) * 1.05]} />;
            })}
          </Instances>
        </group>
      ))}

      {/* İp ışık direkleri */}
      {([-8, 8] as const).map((x) => (
        <mesh key={x} position={[x, 1.8, -14.5]}>
          <cylinderGeometry args={[0.05, 0.07, 3.6, 8]} />
          <meshStandardMaterial color="#334155" roughness={0.8} />
        </mesh>
      ))}
      {lightPoints.map((p, i) => (
        <sprite key={i} position={p} scale={[0.5, 0.5, 1]}>
          <spriteMaterial
            map={glowTex}
            color="#ffd9a0"
            transparent
            opacity={0.85}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </sprite>
      ))}
      <pointLight position={[0, 3.2, -13]} intensity={16} distance={16} decay={1.7} color="#ffd9a0" />
    </group>
  );
}
