"use client";

import { useRef } from "react";
import {
  m,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { SPRING_DEVICE, deviceEnterVariants, EASE_OUT } from "./transitions";
import { useReducedMotionSafe, useCoarsePointer } from "./useMotionEnv";

/**
 * Telefon mockup'ını sinematikleştiren sarmalayıcı — cihaz çerçevesi (children) görünümü DEĞİŞMEZ.
 * Katmanlar: imleç-takipli 3D tilt + arkada glow nabzı + ekranda diyagonal sheen süpürmesi +
 * imleç glare. Giriş: rotateY "kapı gibi açılma".
 *
 * 3 katman: (perspektif) > (giriş varyantı, preserve-3d) > (pointer tilt, preserve-3d) > içerik.
 * reduced-motion / coarse-pointer → düz cihaz (tilt/glow/sheen yok), sade fade giriş.
 */
const GLOW = {
  turf: "rgba(34,197,94,0.5)",
  ember: "rgba(249,115,22,0.5)",
} as const;

interface Phone3DProps {
  children: React.ReactNode;
  accent?: "turf" | "ember";
  tiltMax?: number;
  glow?: boolean;
  sheen?: boolean;
  enter?: boolean;
  index?: number;
  radiusClass?: string;
  className?: string;
}

const enterReduced = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export default function Phone3D({
  children,
  accent = "turf",
  tiltMax = 8,
  glow = true,
  sheen = true,
  enter = true,
  index = 0,
  radiusClass = "rounded-[2.8rem]",
  className,
}: Phone3DProps) {
  const reduce = useReducedMotionSafe();
  const coarse = useCoarsePointer();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rX = useSpring(useTransform(my, [-0.5, 0.5], [tiltMax, -tiltMax]), SPRING_DEVICE);
  const rY = useSpring(useTransform(mx, [-0.5, 0.5], [-tiltMax, tiltMax]), SPRING_DEVICE);
  const glareX = useTransform(mx, [-0.5, 0.5], ["25%", "75%"]);
  const glareY = useTransform(my, [-0.5, 0.5], ["20%", "80%"]);
  const glareOpacity = useMotionValue(0);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.22), transparent 55%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || coarse || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
    glareOpacity.set(1);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
    glareOpacity.set(0);
  };

  const enterProps = enter
    ? {
        variants: reduce ? enterReduced : deviceEnterVariants,
        custom: index,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.3 },
      }
    : {};

  return (
    <m.div className={className} style={{ perspective: 1100 }}>
      <m.div {...enterProps} style={{ transformStyle: "preserve-3d" }}>
        <m.div
          ref={ref}
          className="relative"
          style={reduce ? undefined : { rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
        >
          {/* Glow nabzı (arkada) */}
          {glow && !reduce && (
            <m.div
              aria-hidden
              className={`absolute inset-2 ${radiusClass}`}
              style={{ transform: "translateZ(-40px)", filter: "blur(24px)", background: GLOW[accent] }}
              animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity }}
            />
          )}

          {children}

          {/* Sheen + glare (önde, cihaz şekline clip) */}
          {!reduce && (
            <div className={`pointer-events-none absolute inset-0 overflow-hidden ${radiusClass}`}>
              {sheen && (
                <m.div
                  aria-hidden
                  className="absolute inset-0 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.18) 48%, transparent 62%)",
                    backgroundSize: "250% 250%",
                  }}
                  animate={{ backgroundPosition: ["-50% -50%", "150% 150%"] }}
                  transition={{ duration: 5.5, ease: EASE_OUT, repeat: Infinity, repeatDelay: 2.5 }}
                />
              )}
              <m.div aria-hidden className="absolute inset-0" style={{ background: glareBg, opacity: glareOpacity }} />
            </div>
          )}
        </m.div>
      </m.div>
    </m.div>
  );
}
