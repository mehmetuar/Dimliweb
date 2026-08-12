/**
 * Low-poly insansı oyuncu figürünün ortak ölçüleri (metre).
 * Players.tsx (instanced kalabalık) ve HumanFigure.tsx (tekil, ör. joker)
 * aynı gövde oranlarını buradan okur.
 */

export const FIG = {
  legR: 0.07,
  legH: 0.46,
  legX: 0.095,
  shortsW: 0.36,
  shortsH: 0.2,
  shortsD: 0.24,
  shortsY: 0.56,
  torsoTopR: 0.15,
  torsoBottomR: 0.2,
  torsoH: 0.52,
  torsoY: 0.92,
  armR: 0.05,
  armH: 0.36,
  armX: 0.26,
  armY: 0.9,
  armTilt: 0.28,
  headR: 0.13,
  headY: 1.38,
  hairY: 1.41,
} as const;

export const SKIN = "#d9b38c";
export const HAIR = "#2b2119";
export const SOCKS = "#1e293b";
