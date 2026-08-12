/**
 * İşletme hikâyesi (/is-ortagi) kamera rayı + prop pencereleri.
 * Bölüm yükseklikleri: B0 hero 200vh, B1–B5 150vh, B6 kuyruk 120vh
 * → toplam 1070vh, kaydırılabilir 970vh. Bölüm ortası ilerlemeleri:
 * B1 0.232 · B2 0.387 · B3 0.541 · B4 0.696 · B5 0.851 · B6 → 1.0
 * Tesis: taban x∈[-16,16], z∈[-8,8]; güney cephe z=+8; saha kuzeyde z≈-34.
 * three IMPORT ETMEZ.
 */

import type { CameraKeyframe } from "../core/timeline";

export const BUSINESS_RAIL: readonly CameraKeyframe[] = [
  // B0: yüksek çapraz sokak planı — bina alt yarıda kalır, tabela DOM hero
  // metniyle çakışmaz
  { at: 0.0, pos: [20, 13, 42], look: [0, 0.5, 2], fov: 42 },
  { at: 0.06, pos: [10, 7, 30], look: [0, 1.8, 6], fov: 46 },
  // Kapıya hizalan + içeri süzül
  { at: 0.115, pos: [0, 2.6, 18], look: [0, 2.6, 8], fov: 50 },
  { at: 0.165, pos: [0, 2.3, 10.5], look: [0, 2, 0], fov: 52 },
  // B1: kasa/resepsiyon — bank + doluluk takvimi birlikte kadrajda
  { at: 0.232, pos: [0, 2.4, 7], look: [0, 1.9, -1], fov: 48 },
  // B2: batı köşesi arka ofis — gelir grafiği
  { at: 0.387, pos: [-5, 2.1, -0.2], look: [-11.5, 1.5, -3.5], fov: 48 },
  // B3: doğu güney — soyunma odası dolapları
  { at: 0.541, pos: [9.5, 2.1, 3.5], look: [15.2, 1.6, 3.5], fov: 50 },
  // B4: doğu kuzey — yelek/krampon kiralama
  { at: 0.696, pos: [9.5, 2.0, -3.5], look: [15.2, 1.6, -3.5], fov: 50 },
  // B5: kuzey cam duvardan dış oturma alanına, saha manzarası
  { at: 0.851, pos: [0, 2.6, -10.2], look: [0, 2.2, -34], fov: 48 },
  // B6: yükselen veda planı — güneydoğudan cephe + açık çatılı iç mekân +
  // arkada saha (tabela önden okunur)
  { at: 0.965, pos: [17, 11, 24], look: [0, 1, -10], fov: 48 },
  { at: 1.0, pos: [21, 14, 28], look: [0, 1, -10] },
];

/** Prop pencereleri (global ilerleme) — ilgili bölümün görünürlük aralığında. */
export const CALENDAR_WINDOW = [0.195, 0.26] as const;
export const BARS_WINDOW = [0.35, 0.41] as const;
export const STARS_WINDOW = [0.5, 0.57] as const;
