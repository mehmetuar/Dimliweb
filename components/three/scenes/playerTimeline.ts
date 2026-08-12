/**
 * Oyuncu hikâyesi (/) kamera rayı + prop pencereleri.
 * `at` değerleri PlayerExperience'taki bölüm yüksekliklerine göre elle
 * hizalanmıştır (hero 200vh, fork 160vh, P1–P5 150vh, P6 180vh).
 * three IMPORT ETMEZ.
 */

import type { CameraKeyframe } from "../core/timeline";

/** Saha dünyası kamera rayı — pozisyonlar metre, saha 24×42, merkez orijin. */
export const PLAYER_RAIL: readonly CameraKeyframe[] = [
  // F0: gece hava planı, yavaş alçalma
  { at: 0.0, pos: [0, 64, 6], look: [0, 0, 0], fov: 42 },
  { at: 0.075, pos: [0, 44, 20], look: [0, 0, 2] },
  // F1: göz hizası — yol ayrımı kapıları (z=29)
  { at: 0.193, pos: [0, 2.6, 42], look: [0, 2.7, 29], fov: 50 },
  // P1: kafesin üzerinden kuşbakışına döner, orta yuvarlağa iner
  { at: 0.324, pos: [9, 21, 14], look: [0, 0.5, 0], fov: 45 },
  // P2: kenar çizgisi boyunca alçak dolly
  { at: 0.45, pos: [-10.5, 2.8, 13], look: [-5, 1, -5], fov: 50 },
  // P3: yedek kulübesine dönüş (kulübe x=-16.4)
  { at: 0.576, pos: [-6, 2.2, 6], look: [-16.4, 1.5, 0], fov: 48 },
  // P4: alçak dramatik açı — joker spot altında ([4,0,-2])
  { at: 0.702, pos: [7.5, 1.5, 3.5], look: [4, 1.3, -2], fov: 50 },
  // P5: güney kale arkasından yükselir, skorborda bakar (z=-27.5)
  { at: 0.828, pos: [0, 5.5, 33], look: [0, 6.5, -27], fov: 36 },
  // P6: açılıştaki hava planına geri çekilme
  { at: 0.96, pos: [0, 54, 30], look: [0, 2, 0], fov: 45 },
  { at: 1.0, pos: [0, 62, 35], look: [0, 2, 0] },
];

/** Prop belirme pencereleri (global ilerleme). */
export const JOKER_WINDOW = [0.655, 0.705] as const;
export const STARS_WINDOW = [0.79, 0.855] as const;
export const NEON_WINDOW = [0.9, 0.96] as const;
