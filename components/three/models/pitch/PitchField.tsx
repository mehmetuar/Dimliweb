"use client";

/**
 * Halısaha zemini: çim şeritleri + beyaz çizgiler tek CanvasTexture'a çizilir
 * (tek draw call, kuşbakışında keskin görünüm). Saha 24×42 m (x×z), merkez orijin.
 * Etraf koyu asfalt zemin.
 */

import { useMemo } from "react";
import * as THREE from "three";
import { getGlowTexture } from "../../fx/glow";

export const PITCH_W = 24; // x
export const PITCH_L = 42; // z

function makePitchTexture(): THREE.CanvasTexture {
  const W = 1024;
  const H = 1792;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  // Plane 26.4×44.8 m'yi kaplar (çizgi dışına ~1.2 m çim payı).
  const mX = W / 26.4; // px / metre (x)
  const mZ = H / 44.8; // px / metre (z)

  // Biçme şeritleri (uzun eksende 12 bant)
  const bands = 12;
  for (let i = 0; i < bands; i++) {
    ctx.fillStyle = i % 2 === 0 ? "#166534" : "#14532d";
    ctx.fillRect(0, (H / bands) * i, W, H / bands + 1);
  }

  // Çizgiler
  ctx.strokeStyle = "rgba(226,232,240,0.92)";
  ctx.lineWidth = Math.max(3, 0.13 * mX);
  const left = (26.4 / 2 - PITCH_W / 2) * mX;
  const top = (44.8 / 2 - PITCH_L / 2) * mZ;
  const w = PITCH_W * mX;
  const h = PITCH_L * mZ;

  // Dış sınır + orta çizgi
  ctx.strokeRect(left, top, w, h);
  ctx.beginPath();
  ctx.moveTo(left, H / 2);
  ctx.lineTo(left + w, H / 2);
  ctx.stroke();

  // Orta yuvarlak + nokta
  ctx.beginPath();
  ctx.arc(W / 2, H / 2, 4.4 * mX, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(W / 2, H / 2, 0.18 * mX, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(226,232,240,0.92)";
  ctx.fill();

  // Kale önü yayları (halısaha "D"si) — iki uçta
  for (const end of [0, 1]) {
    const cy = end === 0 ? top : top + h;
    const sweep = end === 0 ? [0, Math.PI] : [Math.PI, Math.PI * 2];
    ctx.beginPath();
    ctx.arc(W / 2, cy, 5.2 * mX, sweep[0], sweep[1]);
    ctx.stroke();
    // Penaltı noktası
    ctx.beginPath();
    ctx.arc(W / 2, cy + (end === 0 ? 6.4 : -6.4) * mZ, 0.16 * mX, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export default function PitchField() {
  const texture = useMemo(() => makePitchTexture(), []);
  const glowTex = useMemo(() => getGlowTexture(), []);

  return (
    <group>
      {/* Çim */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[26.4, 44.8]} />
        <meshStandardMaterial map={texture} roughness={1} metalness={0} />
      </mesh>
      {/* Etraf: koyu asfalt/zemin */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color="#1a2740" roughness={1} metalness={0} />
      </mesh>
      {/* Saha çevresi loş zemin parlaması — kenarlar kapkara kalmasın */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[160, 160]} />
        <meshBasicMaterial
          map={glowTex}
          color="#3d5a8a"
          transparent
          opacity={0.24}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
