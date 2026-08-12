"use client";

/** Orta noktadaki top — beşgen yamalı stilize futbol topu (canvas doku). */

import { useMemo } from "react";
import * as THREE from "three";

function makeBallTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 128;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#f1f5f9";
  ctx.fillRect(0, 0, 256, 128);
  ctx.fillStyle = "#1e293b";
  // Basit beşgen yamalar
  for (let i = 0; i < 8; i++) {
    const x = (i % 4) * 64 + (i > 3 ? 32 : 0) + 16;
    const y = i > 3 ? 80 : 20;
    ctx.beginPath();
    for (let k = 0; k < 5; k++) {
      const a = (k / 5) * Math.PI * 2 - Math.PI / 2;
      const px = x + Math.cos(a) * 13;
      const py = y + Math.sin(a) * 13;
      if (k === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export default function Ball({ position = [0.6, 0.32, 0.8] as readonly [number, number, number] }) {
  const tex = useMemo(() => makeBallTexture(), []);
  return (
    <mesh position={position as [number, number, number]} rotation={[0.6, 0.8, 0]} castShadow>
      <sphereGeometry args={[0.32, 20, 16]} />
      <meshStandardMaterial map={tex} roughness={0.55} />
    </mesh>
  );
}
