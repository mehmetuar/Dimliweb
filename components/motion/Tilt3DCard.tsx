"use client";

import { m } from "framer-motion";
import { EASE_OUT } from "./transitions";

/**
 * Kart hover efekti. Performans: eski sürümdeki pointer 3D tilt (rotateX/rotateY springs) +
 * imleç-takipli soft-light glare + preserve-3d KALDIRILDI (her feature/step/pricing kartında
 * çalışıyordu → ağır). Yerine hafif, GPU-dostu hover: yukarı kalkma + yumuşak gölge.
 * API korunur; `intensity`/`glare`/`liftZ` prop'ları geriye uyum için var (etkisiz).
 */
type TiltTag = "div" | "article";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: "turf" | "ember";
  intensity?: number;
  glare?: boolean;
  liftZ?: number;
  as?: TiltTag;
}

const SHADOW = {
  turf: "0 18px 44px -14px rgba(34,197,94,0.28), 0 0 18px rgba(34,197,94,0.12)",
  ember: "0 18px 44px -14px rgba(249,115,22,0.28), 0 0 18px rgba(249,115,22,0.12)",
} as const;

export default function Tilt3DCard({
  children,
  className,
  glow = "turf",
  as = "div",
}: Tilt3DCardProps) {
  const Card = as === "article" ? m.article : m.div;

  return (
    <Card
      className={`relative h-full ${className ?? ""}`}
      whileHover={{ y: -6, boxShadow: SHADOW[glow] }}
      transition={{ duration: 0.25, ease: EASE_OUT }}
    >
      {children}
    </Card>
  );
}
