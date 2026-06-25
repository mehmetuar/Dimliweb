"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

/**
 * Uygulama kökünde bir kez mount edilir (app/layout.tsx).
 *
 * - LazyMotion + domAnimation: tam `motion` paketi (~34KB) yerine ~15KB'lik özellik alt
 *   kümesini tek paylaşımlı chunk olarak yükler.
 * - strict: primitive'lerin `motion.*` yerine `m.*` kullanmasını zorunlu kılar; yanlışlıkla
 *   tam paketi import edip bundle'ı şişirmeyi dev'de hata fırlatarak engeller.
 * - reducedMotion="user": OS "azalt hareket" ayarı olan kullanıcılarda transform/layout
 *   animasyonlarını otomatik kapatır (opacity korunur).
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
