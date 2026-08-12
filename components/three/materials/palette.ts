/**
 * Marka renkleri — tailwind.config.ts ile TEK KAYNAK uyumu (kopya değerler,
 * değişirse ikisi birlikte güncellenir). three'ye bağımlıdır; yalnız
 * dynamic sınırının arkasındaki sahne/model dosyalarından import edilir.
 */

import * as THREE from "three";

export const C = {
  turf400: new THREE.Color("#4ade80"),
  turf500: new THREE.Color("#22c55e"),
  turf600: new THREE.Color("#16a34a"),
  /** Saha çimi ana ton — turf600'ün gece altındaki koyusu. */
  grassA: new THREE.Color("#166534"),
  /** Çim şerit varyantı (biçme izi). */
  grassB: new THREE.Color("#14532d"),
  pitch: new THREE.Color("#172236"),
  pitchSurface: new THREE.Color("#223350"),
  pitchDeep: new THREE.Color("#0e1626"),
  ember400: new THREE.Color("#fb923c"),
  ember500: new THREE.Color("#f97316"),
  ember600: new THREE.Color("#ea580c"),
  line: new THREE.Color("#e2e8f0"),
  slate400: new THREE.Color("#94a3b8"),
  slate700: new THREE.Color("#334155"),
  night: new THREE.Color("#0c1426"),
} as const;

/** Gece sahne sisi — arka plan rengiyle eş, mesafeyle laciverte erir. */
export const FOG_COLOR = C.night;
