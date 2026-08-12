"use client";

/**
 * Marka dokusu planı: şeffaf webp (lockup/wordmark/is-ortagi) tek plane'de,
 * ışıktan bağımsız (meshBasicMaterial, toneMapped=false) — neon görünüm.
 * Yükseklik dokunun gerçek en-boy oranından hesaplanır.
 *
 * KENDİ Suspense sınırını taşır: useTexture'ın suspend'i SceneCanvas'taki
 * genel sınıra kadar kabarıp TÜM dünyayı bekletmesin — doku gecikirse yalnız
 * tabela geç belirir, sahne anında render edilir.
 */

import { Suspense } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

interface BrandPlaneProps {
  url: string;
  width: number;
  position?: readonly [number, number, number];
  opacity?: number;
}

function BrandPlaneInner({ url, width, position = [0, 0, 0], opacity = 1 }: BrandPlaneProps) {
  const tex = useTexture(url, (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
  });
  const img = tex.image as { width: number; height: number };
  const height = width * (img.height / img.width);

  return (
    <mesh position={position as [number, number, number]}>
      <planeGeometry args={[width, height]} />
      {/* FrontSide: arkadan bakışta ayna yazı görünmesin */}
      <meshBasicMaterial
        map={tex}
        transparent
        opacity={opacity}
        toneMapped={false}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function BrandPlane(props: BrandPlaneProps) {
  return (
    <Suspense fallback={null}>
      <BrandPlaneInner {...props} />
    </Suspense>
  );
}
