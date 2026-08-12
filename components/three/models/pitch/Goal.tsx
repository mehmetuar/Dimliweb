"use client";

/**
 * Halısaha kalesi: beyaz boru çerçeve + yarı saydam file planları.
 * z ekseninde sahaya bakar; position ile iki uca yerleştirilir,
 * flip ile güneye bakan döndürülür.
 */

interface GoalProps {
  position: readonly [number, number, number];
  /** true → 180° döndür (güney kalesi). */
  flip?: boolean;
}

const W = 5.6; // direkler arası
const H = 2.1;
const DEPTH = 1.1;

export default function Goal({ position, flip = false }: GoalProps) {
  return (
    <group position={position as [number, number, number]} rotation={[0, flip ? Math.PI : 0, 0]}>
      {/* Direkler */}
      {[-W / 2, W / 2].map((x) => (
        <mesh key={x} position={[x, H / 2, 0]}>
          <cylinderGeometry args={[0.06, 0.06, H, 8]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.5} />
        </mesh>
      ))}
      {/* Üst direk */}
      <mesh position={[0, H, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, W + 0.12, 8]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.5} />
      </mesh>
      {/* Arka alt boru */}
      <mesh position={[0, 0.05, -DEPTH]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, W + 0.12, 8]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.5} />
      </mesh>
      {/* File: üst eğik + arka + yanlar (yarı saydam) */}
      <mesh position={[0, H / 2 + 0.55, -DEPTH / 2 - 0.02]} rotation={[Math.atan2(DEPTH, H), 0, 0]}>
        <planeGeometry args={[W, Math.hypot(H, DEPTH)]} />
        <meshStandardMaterial color="#cbd5e1" transparent opacity={0.1} side={2} depthWrite={false} />
      </mesh>
      {[-W / 2, W / 2].map((x) => (
        <mesh key={`side-${x}`} position={[x, H / 2 - 0.3, -DEPTH / 2]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[DEPTH, H - 0.6]} />
          <meshStandardMaterial color="#cbd5e1" transparent opacity={0.1} side={2} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}
