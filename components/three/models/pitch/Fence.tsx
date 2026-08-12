"use client";

/**
 * Saha çevre kafesi: instanced direkler + üst boru + yarı saydam tel örgü
 * hissi veren koyu yeşil paneller. Güney kenarda giriş boşluğu bırakılır
 * (yol ayrımı kapıları oradan görünür).
 */

import { useMemo } from "react";
import * as THREE from "three";
import { Instances, Instance } from "@react-three/drei";

const FX = 14.2; // yarı genişlik (x)
const FZ = 23.4; // yarı uzunluk (z)
const H = 5;     // kafes yüksekliği
const GAP = 6;   // güney giriş boşluğu genişliği

export default function Fence() {
  const posts = useMemo(() => {
    const pts: [number, number, number][] = [];
    const step = 4.7;
    // Doğu-batı kenarları
    for (let z = -FZ; z <= FZ + 0.01; z += step) {
      pts.push([-FX, H / 2, z], [FX, H / 2, z]);
    }
    // Kuzey kenarı
    for (let x = -FX; x <= FX + 0.01; x += step) {
      pts.push([x, H / 2, -FZ]);
    }
    // Güney kenarı (ortada giriş boşluğu)
    for (let x = -FX; x <= FX + 0.01; x += step) {
      if (Math.abs(x) < GAP / 2) continue;
      pts.push([x, H / 2, FZ]);
    }
    return pts;
  }, []);

  return (
    <group>
      <Instances frustumCulled={false} range={posts.length} limit={posts.length}>
        <cylinderGeometry args={[0.06, 0.06, H, 6]} />
        <meshStandardMaterial color="#2a3b52" roughness={0.8} />
        {posts.map((p, i) => (
          <Instance key={i} position={p} />
        ))}
      </Instances>

      {/* Üst borular */}
      {([-FX, FX] as const).map((x) => (
        <mesh key={`rail-x${x}`} position={[x, H, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, FZ * 2, 6]} />
          <meshStandardMaterial color="#2a3b52" roughness={0.8} />
        </mesh>
      ))}
      <mesh position={[0, H, -FZ]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, FX * 2, 6]} />
        <meshStandardMaterial color="#2a3b52" roughness={0.8} />
      </mesh>

      {/* Tel örgü panelleri (yarı saydam) */}
      {([-FX, FX] as const).map((x) => (
        <mesh key={`net-x${x}`} position={[x, H / 2, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[FZ * 2, H]} />
          <meshStandardMaterial color="#14532d" transparent opacity={0.14} side={2} depthWrite={false} />
        </mesh>
      ))}
      <mesh position={[0, H / 2, -FZ]}>
        <planeGeometry args={[FX * 2, H]} />
        <meshStandardMaterial color="#14532d" transparent opacity={0.14} side={2} depthWrite={false} />
      </mesh>
      {/* Güney: boşluğun iki yanı */}
      {([-1, 1] as const).map((s) => (
        <mesh key={`net-s${s}`} position={[s * (GAP / 2 + (FX - GAP / 2) / 2), H / 2, FZ]}>
          <planeGeometry args={[FX - GAP / 2, H]} />
          <meshStandardMaterial color="#14532d" transparent opacity={0.14} side={2} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}
