/**
 * Sinematik scroll zaman çizelgesi tipleri + saf yardımcılar.
 * BU DOSYA three IMPORT ETMEZ — experience bileşenleri (ana chunk) tarafından
 * güvenle import edilebilir; three yalnızca dynamic(ssr:false) sınırının
 * arkasında yüklenir.
 */

export interface CameraKeyframe {
  /** Global hikâye ilerlemesi 0..1 — DOM bölüm sınırlarıyla elle hizalanır. */
  at: number;
  pos: readonly [number, number, number];
  /** Kameranın baktığı nokta (lookAt hedefi). */
  look: readonly [number, number, number];
  /** Dikey FOV (derece). Verilmezse önceki keyframe'den taşınır. */
  fov?: number;
}

export interface SegmentSample {
  /** Segment indeksi (keyframes[i] → keyframes[i+1]). */
  index: number;
  /** Segment içi ilerleme 0..1 (ease uygulanmamış). */
  t: number;
}

/** Kübik ease-in-out — her segment kendi içinde yumuşar, sınırda "shot" duraksaması hissi verir. */
export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function clamp01(v: number): number {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

/** p'nin düştüğü keyframe segmentini ve segment-içi t'yi bulur. */
export function sampleSegment(keys: readonly CameraKeyframe[], p: number): SegmentSample {
  const c = clamp01(p);
  if (keys.length < 2) return { index: 0, t: 0 };
  if (c <= keys[0].at) return { index: 0, t: 0 };
  const last = keys.length - 1;
  if (c >= keys[last].at) return { index: last - 1, t: 1 };
  for (let i = 0; i < last; i++) {
    const a = keys[i].at;
    const b = keys[i + 1].at;
    if (c >= a && c <= b) {
      return { index: i, t: b === a ? 1 : (c - a) / (b - a) };
    }
  }
  return { index: last - 1, t: 1 };
}

/** i. keyframe'e kadar tanımlı son fov'u döndürür (fov opsiyonel olduğundan geriye taranır). */
export function fovAt(keys: readonly CameraKeyframe[], i: number, fallback = 45): number {
  for (let k = i; k >= 0; k--) {
    const f = keys[k].fov;
    if (f !== undefined) return f;
  }
  return fallback;
}

/**
 * Pencereli smoothstep: p, [a,b] aralığında 0→1 yumuşak geçer.
 * Sahne prop'larının (joker figürü, yıldızlar, bar grafikler) bölüm
 * penceresinde belirmesi için useFrame içinde kullanılır.
 */
export function fadeWindow(p: number, a: number, b: number): number {
  const t = clamp01((p - a) / (b - a));
  return t * t * (3 - 2 * t);
}
