"use client";

/**
 * Sahadaki low-poly insansı oyuncular: bacaklar + şort + forma gövdesi +
 * kollar + kafa + saç. Draw call kontrolü için parça başına <Instances>
 * (paylaşılan parçalar tüm figürler için tek grup; forma/şort takım başına).
 * Poz çeşitliliği figür bazında Y-rotasyonu + kol açısıyla verilir.
 */

import { Instances, Instance } from "@react-three/drei";
import { FIG, SKIN, HAIR, SOCKS } from "./figure";

interface Fig {
  x: number;
  z: number;
  rot: number;
  team: "a" | "b";
}

// [x, z, rotY] — orta saha etrafına serpiştirilmiş doğal duruşlar
const FIGURES: Fig[] = [
  { x: -3.5, z: -6, rot: 0.4, team: "a" },
  { x: 2.5, z: -10, rot: -0.3, team: "a" },
  { x: -6, z: -13, rot: 0.9, team: "a" },
  { x: 5.5, z: -15.5, rot: 0.1, team: "a" },
  { x: 0.5, z: -3, rot: -0.6, team: "a" },
  { x: 3.5, z: 5.5, rot: 3.4, team: "b" },
  { x: -2.5, z: 9, rot: 2.8, team: "b" },
  { x: 7, z: 12, rot: 3.6, team: "b" },
  { x: -6.5, z: 14, rot: 2.6, team: "b" },
  { x: -0.5, z: 2.5, rot: 3.1, team: "b" },
];

/** Figür-yerel ofseti figürün Y-rotasyonuyla dünyaya çevirir. */
function place(f: Fig, ox: number, oy: number, oz: number): [number, number, number] {
  const c = Math.cos(f.rot);
  const s = Math.sin(f.rot);
  return [f.x + ox * c + oz * s, oy, f.z - ox * s + oz * c];
}

function SharedParts() {
  return (
    <>
      {/* Bacaklar (çorap koyusu) — figür başına 2 */}
      <Instances frustumCulled={false} range={FIGURES.length * 2} limit={FIGURES.length * 2}>
        <cylinderGeometry args={[FIG.legR, FIG.legR * 0.85, FIG.legH, 8]} />
        <meshStandardMaterial color={SOCKS} roughness={0.8} />
        {FIGURES.flatMap((f, i) =>
          ([-FIG.legX, FIG.legX] as const).map((lx, k) => (
            <Instance key={`${i}-${k}`} position={place(f, lx, FIG.legH / 2, 0)} rotation={[0, f.rot, 0]} />
          ))
        )}
      </Instances>
      {/* Kollar (ten) — hafif dışa açık */}
      <Instances frustumCulled={false} range={FIGURES.length * 2} limit={FIGURES.length * 2}>
        <capsuleGeometry args={[FIG.armR, FIG.armH, 4, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.8} />
        {FIGURES.flatMap((f, i) =>
          ([-1, 1] as const).map((side, k) => (
            <Instance
              key={`${i}-${k}`}
              position={place(f, side * FIG.armX, FIG.armY, 0)}
              rotation={[0, f.rot, side * -FIG.armTilt * (1 + (i % 3) * 0.35)]}
            />
          ))
        )}
      </Instances>
      {/* Kafalar */}
      <Instances frustumCulled={false} range={FIGURES.length} limit={FIGURES.length}>
        <sphereGeometry args={[FIG.headR, 14, 12]} />
        <meshStandardMaterial color={SKIN} roughness={0.75} />
        {FIGURES.map((f, i) => (
          <Instance key={i} position={[f.x, FIG.headY, f.z]} rotation={[0, f.rot, 0]} />
        ))}
      </Instances>
      {/* Saç (üst yarımküre) */}
      <Instances frustumCulled={false} range={FIGURES.length} limit={FIGURES.length}>
        <sphereGeometry args={[FIG.headR * 1.04, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2.1]} />
        <meshStandardMaterial color={HAIR} roughness={0.9} />
        {FIGURES.map((f, i) => (
          <Instance key={i} position={[f.x, FIG.hairY, f.z]} rotation={[0.12, f.rot, 0]} />
        ))}
      </Instances>
    </>
  );
}

function TeamKit({ team, jersey, shorts }: { team: "a" | "b"; jersey: string; shorts: string }) {
  const figs = FIGURES.filter((f) => f.team === team);
  return (
    <>
      {/* Forma gövdesi (hafif konik) */}
      <Instances frustumCulled={false} range={figs.length} limit={figs.length}>
        <cylinderGeometry args={[FIG.torsoTopR, FIG.torsoBottomR, FIG.torsoH, 10]} />
        <meshStandardMaterial color={jersey} roughness={0.65} />
        {figs.map((f, i) => (
          <Instance key={i} position={[f.x, FIG.torsoY, f.z]} rotation={[0, f.rot, 0]} />
        ))}
      </Instances>
      {/* Şort */}
      <Instances frustumCulled={false} range={figs.length} limit={figs.length}>
        <boxGeometry args={[FIG.shortsW, FIG.shortsH, FIG.shortsD]} />
        <meshStandardMaterial color={shorts} roughness={0.7} />
        {figs.map((f, i) => (
          <Instance key={i} position={[f.x, FIG.shortsY, f.z]} rotation={[0, f.rot, 0]} />
        ))}
      </Instances>
    </>
  );
}

export default function Players() {
  return (
    <group>
      <SharedParts />
      <TeamKit team="a" jersey="#22c55e" shorts="#14532d" />
      <TeamKit team="b" jersey="#e2e8f0" shorts="#334155" />
    </group>
  );
}
