"use client";

/**
 * Lenis yumuşak scroll — YALNIZ fine-pointer (masaüstü) + hareket-tamam
 * kullanıcılarda. iOS/Android native momentum'a dokunulmaz. Lenis native
 * scrollTop'u anime ettiği için framer useScroll ile tam uyumludur.
 *
 * useLenisScrollTo(): Lenis aktifken lenis.scrollTo, değilken native smooth
 * scroll kullanan hedefe-kaydırma yardımcısı (ForkDoors "Oyuncuyum" için).
 */

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import type Lenis from "lenis";
import { useReducedMotionSafe } from "@/components/motion/useMotionEnv";

const LenisContext = createContext<React.MutableRefObject<Lenis | null> | null>(null);

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Lenis yoksa (mobil) rAF tabanlı eased scroll — `scrollIntoView smooth`
 * uzun mesafede mobil tarayıcılarda güvenilmez/tepkisiz kalıyor; bu animasyon
 * tıklama anında başlar ve sinematik akışla aynı hissi verir.
 */
function rafScrollTo(targetY: number, duration = 2000) {
  const startY = window.scrollY;
  const delta = targetY - startY;
  if (Math.abs(delta) < 1) return;
  const t0 = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - t0) / duration);
    window.scrollTo(0, startY + delta * easeInOutCubic(t));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function useLenisScrollTo(): (target: string | HTMLElement) => void {
  const lenisRef = useContext(LenisContext);
  return useCallback(
    (target: string | HTMLElement) => {
      const el = typeof target === "string" ? document.querySelector(target) : target;
      if (!el) return;
      const lenis = lenisRef?.current;
      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { duration: 2.2, easing: easeInOutCubic });
        return;
      }
      rafScrollTo(window.scrollY + el.getBoundingClientRect().top, 2000);
    },
    [lenisRef]
  );
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotionSafe();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    let cancelled = false;
    // lenis'i dinamik import et: fallback/mobil kullanıcı chunk'ı hiç indirmesin
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({ lerp: 0.11 });
      lenisRef.current = lenis;
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [reduce]);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
}
