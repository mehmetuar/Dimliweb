"use client";

/**
 * F1 yol ayrımı yapıları — sahanın güney girişi önünde iki ışıklı yapı:
 * solda turf yeşili OYUNCU tüneli (kemer), sağda ember turuncu İŞ ORTAĞI
 * kapısı. DOM'daki ForkDoors kartlarıyla aynı kadraja oturur.
 */

import { useMemo } from "react";
import * as THREE from "three";
import { getGlowTexture } from "../../fx/glow";
import BrandPlane from "../shared/BrandPlane";

function Arch({ color }: { color: string }) {
  const curve = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 24; i++) {
      const a = (i / 24) * Math.PI;
      pts.push(new THREE.Vector3(Math.cos(a) * 2.3, Math.sin(a) * 2.3 + 0.2, 0));
    }
    return new THREE.CatmullRomCurve3(pts);
  }, []);
  const geo = useMemo(() => new THREE.TubeGeometry(curve, 32, 0.13, 10, false), [curve]);
  return (
    <mesh geometry={geo}>
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
}

export default function ForkGates({ position = [0, 0, 29] as readonly [number, number, number] }) {
  const glowTex = useMemo(() => getGlowTexture(), []);

  return (
    <group position={position as [number, number, number]}>
      {/* ── Sol: OYUNCU tüneli ── */}
      <group position={[-4.6, 0, 0]}>
        <Arch color="#22c55e" />
        {/* Tünel içi karanlık + hafif yeşil derinlik */}
        <mesh position={[0, 1.3, -0.15]}>
          <circleGeometry args={[2.16, 32, 0, Math.PI]} />
          <meshBasicMaterial color="#04140b" />
        </mesh>
        <sprite position={[0, 2.7, 0.2]} scale={[5, 3.2, 1]}>
          <spriteMaterial map={glowTex} color="#22c55e" transparent opacity={0.35} blending={THREE.AdditiveBlending} depthWrite={false} />
        </sprite>
        <BrandPlane url="/3d/tex/oyuncu.webp" width={2.7} position={[0, 3.25, 0.15]} />
        {/* Zemin ışık şeridi */}
        <mesh position={[0, 0.015, 3.4]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.6, 6.4]} />
          <meshBasicMaterial color="#22c55e" transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      </group>

      {/* ── Sağ: İŞ ORTAĞI kapısı ── */}
      <group position={[4.6, 0, 0]}>
        {/* Kapı çerçevesi */}
        {([-1.5, 1.5] as const).map((x) => (
          <mesh key={x} position={[x, 1.6, 0]}>
            <boxGeometry args={[0.22, 3.2, 0.22]} />
            <meshBasicMaterial color="#f97316" toneMapped={false} />
          </mesh>
        ))}
        <mesh position={[0, 3.2, 0]}>
          <boxGeometry args={[3.22, 0.22, 0.22]} />
          <meshBasicMaterial color="#f97316" toneMapped={false} />
        </mesh>
        {/* Kapı içi */}
        <mesh position={[0, 1.55, -0.12]}>
          <planeGeometry args={[2.8, 3.1]} />
          <meshBasicMaterial color="#160a04" />
        </mesh>
        <sprite position={[0, 2.9, 0.25]} scale={[5, 3.2, 1]}>
          <spriteMaterial map={glowTex} color="#f97316" transparent opacity={0.35} blending={THREE.AdditiveBlending} depthWrite={false} />
        </sprite>
        <BrandPlane url="/3d/tex/is-ortagi.webp" width={2.9} position={[0, 3.8, 0.15]} />
        <mesh position={[0, 0.015, 3.4]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.6, 6.4]} />
          <meshBasicMaterial color="#f97316" transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      </group>
    </group>
  );
}
