"use client";

/**
 * Sinematik bölümlerde metnin yanında duran DOM telefon mockup'ı.
 * Ekran görüntüsü GPU dokusu yerine keskin DOM <img> olarak gösterilir
 * (okunabilirlik + erişilebilirlik + düşük GPU maliyeti).
 * Bölüm-yerel scroll ilerlemesiyle hafif kayma/tilt animasyonu alır.
 */

import { m, type MotionValue, useMotionValue, useTransform } from "framer-motion";

interface PhoneShotProps {
  src: string;
  alt: string;
  /** Bölüm-yerel scroll ilerlemesi (Chapter'dan). Yoksa statik durur. */
  progress?: MotionValue<number>;
  accent?: "turf" | "ember";
  className?: string;
  /** İkiz telefon dizilimi için hafif döndürme (derece). */
  tilt?: number;
}

const ACCENT_SHADOW = {
  turf: "0 0 34px rgba(34,197,94,0.14), 0 24px 50px rgba(0,0,0,0.5)",
  ember: "0 0 34px rgba(249,115,22,0.14), 0 24px 50px rgba(0,0,0,0.5)",
};

export default function PhoneShot({
  src,
  alt,
  progress,
  accent = "turf",
  className = "",
  tilt = 0,
}: PhoneShotProps) {
  // Bölüm boyunca hafif yukarı süzülme (parallax hissi).
  // Hook sırası sabit kalsın diye progress verilmese de bir MotionValue kullanılır.
  const fallbackProgress = useMotionValue(0.5);
  const y = useTransform(progress ?? fallbackProgress, [0.2, 0.8], [30, -30]);

  return (
    <m.div
      style={progress ? { y, rotate: tilt } : { rotate: tilt }}
      className={`relative w-[132px] sm:w-[168px] md:w-[196px] shrink-0 ${className}`}
    >
      <div
        className="relative rounded-[2.6rem] overflow-hidden border-[3px] border-slate-700/80 bg-pitch-deep"
        style={{ aspectRatio: "640 / 1391", boxShadow: ACCENT_SHADOW[accent] }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover object-top" />
      </div>
    </m.div>
  );
}
