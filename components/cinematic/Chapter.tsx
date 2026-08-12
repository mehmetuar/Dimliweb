"use client";

/**
 * Sinematik hikâyenin bir "bölümü": uzun bir section (scroll mesafesi yaratır,
 * kamera rayını süren de bu toplam yüksekliktir) + ekrana yapışan (sticky)
 * içerik bloğu. Metin DOM'da SSR'lanır (SEO); canvas yalnız dekordur.
 *
 * Kopya bloğu bölüm-yerel scroll ilerlemesiyle girer/çıkar:
 * 0.15→0.35 arası belirir, 0.65→0.85 arası kaybolur.
 */

import { useRef, type ReactNode } from "react";
import { m, useScroll, useTransform, type MotionValue } from "framer-motion";

type Align = "left" | "right" | "center";

interface ChapterProps {
  /** Düz içerik ya da bölüm-yerel ilerlemeyi alan render-prop (PhoneShot için). */
  children: ReactNode | ((progress: MotionValue<number>) => ReactNode);
  align?: Align;
  /** Bölümün scroll boyu. Varsayılan 140vh. */
  height?: string;
  id?: string;
  /** Giriş/çıkış aralıklarını ez (örn. ilk bölümde girişsiz başlamak için). */
  fadeIn?: readonly [number, number];
  fadeOut?: readonly [number, number];
  /** İçerik bloğu genişliği (tailwind sınıfı). Telefonlu bölümlerde genişletilir. */
  maxWidth?: string;
  className?: string;
}

const ALIGN_WRAP: Record<Align, string> = {
  left: "justify-start",
  right: "justify-end",
  center: "justify-center text-center",
};

export default function Chapter({
  children,
  align = "left",
  height = "140vh",
  id,
  fadeIn = [0.15, 0.32],
  fadeOut = [0.68, 0.85],
  maxWidth = "max-w-md",
  className = "",
}: ChapterProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [fadeIn[0], fadeIn[1], fadeOut[0], fadeOut[1]],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [fadeIn[0], fadeIn[1]], [36, 0]);

  return (
    <section ref={ref} id={id} className="relative" style={{ minHeight: height }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          className={`relative z-10 flex w-full max-w-6xl mx-auto px-4 sm:px-6 ${ALIGN_WRAP[align]}`}
        >
          <m.div style={{ opacity, y }} className={`${maxWidth} ${className}`}>
            {typeof children === "function" ? children(scrollYProgress) : children}
          </m.div>
        </div>
      </div>
    </section>
  );
}
