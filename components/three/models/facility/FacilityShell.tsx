"use client";

/**
 * Tesis binası kabuğu: zemin + duvarlar + güney cephe (kapı boşluklu) +
 * neon tabela + kuzey cam duvar + iç ip ışıklar. Üstü açık stilize yapı —
 * kamera içeride gezerken gece göğü görünür (tavan karanlığı sorunu yok).
 *
 * Yerleşim: taban x∈[-16,16], z∈[-8,8]. Güney cephe z=+8 (giriş),
 * kuzey z=-8 cam (arkadaki sahaya bakar).
 */

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Instances, Instance } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import { getGlowTexture } from "../../fx/glow";
import { fadeWindow } from "../../core/timeline";
import BrandPlane from "../shared/BrandPlane";

const WALL_H = 5;
const WALL_COLOR = "#243352";

function StringLights({ from, to, count = 12 }: { from: [number, number, number]; to: [number, number, number]; count?: number }) {
  const glowTex = useMemo(() => getGlowTexture(), []);
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= count; i++) {
      const t = i / count;
      const x = from[0] + (to[0] - from[0]) * t;
      const z = from[2] + (to[2] - from[2]) * t;
      // Katener sarkması
      const y = from[1] + (to[1] - from[1]) * t - Math.sin(t * Math.PI) * 0.6;
      pts.push([x, y, z]);
    }
    return pts;
  }, [from, to, count]);

  return (
    <group>
      {points.map((p, i) => (
        <sprite key={i} position={p} scale={[0.55, 0.55, 1]}>
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
    </group>
  );
}

interface FacilityShellProps {
  /** Global hikâye ilerlemesi — neon tabela hero metni çekilirken belirir. */
  progress?: MotionValue<number>;
}

/**
 * Neon tabela: el yazısı DİMLİ wordmark'ı (splash lockup harfleri) + Anton
 * "İŞ ORTAĞI" (ember) dokuları. Hero H1 ile çakışmasın diye p∈[0.06,0.115]
 * penceresinde büyüyerek belirir (mobilde hero metni daha geç kaybolur).
 */
function FacadeSign({ progress }: { progress?: MotionValue<number> }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!ref.current || !progress) return;
    const v = fadeWindow(progress.get(), 0.06, 0.115);
    ref.current.visible = v > 0.02;
    ref.current.scale.setScalar(0.65 + 0.35 * v);
  });
  return (
    <group ref={ref} position={[0, 6.4, 8.3]} visible={!progress}>
      <BrandPlane url="/3d/tex/dimli-wordmark.webp" width={7.2} position={[0, 0.35, 0]} />
      <BrandPlane url="/3d/tex/is-ortagi.webp" width={3.4} position={[0, -1.05, 0]} />
      <NeonGlow position={[0, 0, 0.05]} />
    </group>
  );
}

export default function FacilityShell({ progress }: FacilityShellProps) {
  return (
    <group>
      {/* Zemin döşemesi (iç) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[32, 16]} />
        <meshStandardMaterial color="#212c46" roughness={0.85} />
      </mesh>
      {/* Dış zemin / kaldırım */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color="#1a2740" roughness={1} />
      </mesh>
      {/* Güney kaldırım şeridi */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.0, 12]}>
        <planeGeometry args={[36, 8]} />
        <meshStandardMaterial color="#131e33" roughness={1} />
      </mesh>

      {/* ── Güney cephe (kapı boşluklu) ── */}
      {/* Sol ve sağ segmentler */}
      <mesh position={[-9, WALL_H / 2, 8]}>
        <boxGeometry args={[14, WALL_H, 0.4]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={0.9} />
      </mesh>
      <mesh position={[9, WALL_H / 2, 8]}>
        <boxGeometry args={[14, WALL_H, 0.4]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={0.9} />
      </mesh>
      {/* Kapı lentosu */}
      <mesh position={[0, 4.1, 8]}>
        <boxGeometry args={[4, 1.8, 0.4]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={0.9} />
      </mesh>
      {/* Kapı çerçevesi ışığı */}
      {([-2, 2] as const).map((x) => (
        <mesh key={x} position={[x, 1.6, 8.22]}>
          <boxGeometry args={[0.12, 3.2, 0.06]} />
          <meshBasicMaterial color="#fb923c" toneMapped={false} />
        </mesh>
      ))}
      <mesh position={[0, 3.2, 8.22]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.12, 4.12, 0.06]} />
        <meshBasicMaterial color="#fb923c" toneMapped={false} />
      </mesh>

      {/* Neon tabela (hero'da gizli, kamera yaklaşınca belirir) */}
      <FacadeSign progress={progress} />

      {/* Cephe aydınlatması (duvar önü sıcak nokta ışıklar) + saçak trim şeridi.
          Trim iki segmenttir — tabela/kapı bölgesinde boşluk (İŞ ORTAĞI ile çakışmasın). */}
      <pointLight position={[-9, 3.2, 10]} intensity={26} distance={14} decay={1.7} color="#b8c8ea" />
      <pointLight position={[9, 3.2, 10]} intensity={26} distance={14} decay={1.7} color="#b8c8ea" />
      <pointLight position={[0, 4.2, 10.5]} intensity={20} distance={12} decay={1.7} color="#ffd9a0" />
      {([-1, 1] as const).map((s) => (
        <mesh key={s} position={[s * 10.4, WALL_H + 0.06, 8.21]}>
          <boxGeometry args={[11.2, 0.09, 0.06]} />
          <meshBasicMaterial color="#f97316" toneMapped={false} />
        </mesh>
      ))}

      {/* ── Yan duvarlar ── */}
      <mesh position={[-16, WALL_H / 2, 0]}>
        <boxGeometry args={[0.4, WALL_H, 16.4]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={0.9} />
      </mesh>
      <mesh position={[16, WALL_H / 2, 0]}>
        <boxGeometry args={[0.4, WALL_H, 16.4]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={0.9} />
      </mesh>

      {/* ── Kuzey cam duvar (sahaya bakar) ── */}
      <mesh position={[0, WALL_H / 2, -8]}>
        <planeGeometry args={[32, WALL_H]} />
        <meshStandardMaterial color="#8fb8e8" transparent opacity={0.07} side={2} depthWrite={false} />
      </mesh>
      <Instances frustumCulled={false} range={5} limit={5}>
        <boxGeometry args={[0.18, WALL_H, 0.18]} />
        <meshStandardMaterial color="#334155" roughness={0.8} />
        {[-16, -8, 0, 8, 16].map((x) => (
          <Instance key={x} position={[x, WALL_H / 2, -8]} />
        ))}
      </Instances>

      {/* İç bölme: resepsiyon arkası pano duvarı */}
      <mesh position={[0, 1.6, -1]}>
        <boxGeometry args={[6.5, 3.2, 0.25]} />
        <meshStandardMaterial color="#223350" roughness={0.85} />
      </mesh>

      {/* İç ip ışıklar */}
      <StringLights from={[-15, 4.6, -4]} to={[15, 4.6, -4]} count={16} />
      <StringLights from={[-15, 4.6, 4]} to={[15, 4.6, 4]} count={16} />

      {/* İç sıcak dolgu ışığı */}
      <pointLight position={[0, 4.2, 1]} intensity={30} distance={26} decay={1.6} color="#ffd9a0" />
      <pointLight position={[-10, 4, -3]} intensity={18} distance={18} decay={1.6} color="#ffd9a0" />
      <pointLight position={[10, 4, 0]} intensity={18} distance={18} decay={1.6} color="#ffd9a0" />
    </group>
  );
}

function NeonGlow({ position }: { position: [number, number, number] }) {
  const glowTex = useMemo(() => getGlowTexture(), []);
  return (
    <sprite position={position} scale={[9, 4.5, 1]}>
      <spriteMaterial
        map={glowTex}
        color="#22c55e"
        transparent
        opacity={0.3}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </sprite>
  );
}
