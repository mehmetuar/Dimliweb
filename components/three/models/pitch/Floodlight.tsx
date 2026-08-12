"use client";

/**
 * Köşe projektör kulesi: direk + lamba başlığı + gerçek SpotLight +
 * additive glow sprite + görünür ışık konisi (bloom'suz sinematik hile).
 */

import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import { getGlowTexture } from "../../fx/glow";

interface FloodlightProps {
  position: readonly [number, number, number];
  /** Işığın hedeflediği nokta (varsayılan saha merkezi). */
  target?: readonly [number, number, number];
  intensity?: number;
  castShadow?: boolean;
}

const POLE_H = 9;

export default function Floodlight({
  position,
  target = [0, 0, 0],
  intensity = 250,
  castShadow = false,
}: FloodlightProps) {
  const glowTex = useMemo(() => getGlowTexture(), []);
  const spotRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(new THREE.Object3D());

  useEffect(() => {
    targetRef.current.position.set(...(target as [number, number, number]));
    if (spotRef.current) {
      spotRef.current.target = targetRef.current;
    }
  }, [target]);

  const head: [number, number, number] = [position[0], POLE_H, position[2]];

  // Koni: başlıktan hedefe doğru yönelmiş görünür ışık hüzmesi
  const coneQuat = useMemo(() => {
    const dir = new THREE.Vector3(...(target as [number, number, number]))
      .sub(new THREE.Vector3(...head))
      .normalize();
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir);
    return q;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position[0], position[2], target[0], target[2]]);

  const coneLen = 14;

  return (
    <group>
      {/* Direk */}
      <mesh position={[position[0], POLE_H / 2, position[2]]}>
        <cylinderGeometry args={[0.1, 0.16, POLE_H, 8]} />
        <meshStandardMaterial color="#334155" roughness={0.8} />
      </mesh>
      {/* Lamba başlığı */}
      <mesh position={head}>
        <boxGeometry args={[1.5, 0.55, 0.5]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} />
      </mesh>
      {/* Lamba yüzeyi (parlak) */}
      <mesh position={[head[0], head[1] - 0.29, head[2]]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.3, 0.36]} />
        <meshBasicMaterial color="#f3f8ff" toneMapped={false} />
      </mesh>
      {/* Glow sprite */}
      <sprite position={head} scale={[3.6, 3.6, 1]}>
        <spriteMaterial
          map={glowTex}
          color="#cfe3ff"
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </sprite>
      {/* Görünür ışık hüzmesi */}
      <group position={head} quaternion={coneQuat}>
        <mesh position={[0, -coneLen / 2, 0]}>
          <coneGeometry args={[4.6, coneLen, 24, 1, true]} />
          <meshBasicMaterial
            color="#9fc1ee"
            transparent
            opacity={0.045}
            side={2}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
      {/* Gerçek ışık */}
      <spotLight
        ref={spotRef}
        position={head}
        angle={0.62}
        penumbra={0.55}
        decay={1.4}
        distance={90}
        intensity={intensity}
        color="#dbe9ff"
        castShadow={castShadow}
        shadow-mapSize={[1024, 1024]}
      />
      <primitive object={targetRef.current} />
    </group>
  );
}
