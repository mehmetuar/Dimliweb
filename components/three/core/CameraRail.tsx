"use client";

/**
 * Sistemin kalbi: scroll ilerlemesini kamera pozisyonu + bakış hedefi +
 * fov'a çevirir.
 *
 * - Keyframe pozisyonları/bakışları üzerinden iki CatmullRomCurve3 kurulur ve
 *   PARÇA-PARÇA örneklenir: curve parametresi (i + easedT) / (n - 1) — kontrol
 *   noktaları tam segment sınırlarına denk gelir, DOM bölümleriyle hiza kaymaz.
 * - maath easing.damp3 scroll titremesini emer; damp hâlâ hareket ediyorsa
 *   invalidate() ile bir kare daha istenir (frameloop="demand" ile GPU scroll
 *   durunca uyur).
 */

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useMotionValueEvent, type MotionValue } from "framer-motion";
import { easing } from "maath";
import {
  type CameraKeyframe,
  sampleSegment,
  easeInOutCubic,
  fovAt,
} from "./timeline";

interface CameraRailProps {
  progress: MotionValue<number>;
  keyframes: readonly CameraKeyframe[];
  /** damp yumuşatma süresi (s). Büyük değer = daha ağır/yağlı kamera. */
  smoothing?: number;
}

export default function CameraRail({
  progress,
  keyframes,
  smoothing = 0.35,
}: CameraRailProps) {
  const invalidate = useThree((s) => s.invalidate);

  const { posCurve, lookCurve, segments } = useMemo(() => {
    const posPts = keyframes.map((k) => new THREE.Vector3(...k.pos));
    const lookPts = keyframes.map((k) => new THREE.Vector3(...k.look));
    return {
      posCurve: new THREE.CatmullRomCurve3(posPts, false, "centripetal"),
      lookCurve: new THREE.CatmullRomCurve3(lookPts, false, "centripetal"),
      segments: keyframes.length - 1,
    };
  }, [keyframes]);

  const targetPos = useRef(new THREE.Vector3());
  const targetLook = useRef(new THREE.Vector3());
  const currentLook = useRef<THREE.Vector3 | null>(null);

  useMotionValueEvent(progress, "change", () => invalidate());

  useFrame((state, delta) => {
    if (segments < 1) return;
    const cam = state.camera as THREE.PerspectiveCamera;

    const { index, t } = sampleSegment(keyframes, progress.get());
    const u = (index + easeInOutCubic(t)) / segments;
    posCurve.getPoint(u, targetPos.current);
    lookCurve.getPoint(u, targetLook.current);

    // İlk karede zıplama olmasın: doğrudan hedefe otur.
    if (currentLook.current === null) {
      currentLook.current = targetLook.current.clone();
      cam.position.copy(targetPos.current);
      cam.fov = fovAt(keyframes, index, cam.fov);
      cam.updateProjectionMatrix();
      cam.lookAt(currentLook.current);
      return;
    }

    // delta sekmelere geçişte çok büyüyebilir; damp kararlılığı için kırp.
    const dt = Math.min(delta, 1 / 30);
    const movingPos = easing.damp3(cam.position, targetPos.current, smoothing, dt);
    const movingLook = easing.damp3(currentLook.current, targetLook.current, smoothing, dt);

    const f0 = fovAt(keyframes, index);
    const f1 = fovAt(keyframes, index + 1, f0);
    const targetFov = f0 + (f1 - f0) * easeInOutCubic(t);
    const movingFov = Math.abs(cam.fov - targetFov) > 0.01;
    if (movingFov) {
      cam.fov += (targetFov - cam.fov) * Math.min(1, dt / smoothing);
      cam.updateProjectionMatrix();
    }

    cam.lookAt(currentLook.current);

    if (movingPos || movingLook || movingFov) invalidate();
  });

  return null;
}
