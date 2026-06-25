"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * SSR-güvenli reduced-motion.
 * framer'ın useReducedMotion()'ı client'ın İLK render'ında gerçek matchMedia değerini okur;
 * server null/false döndüğünden, reduce'a göre YAPI/STİL dallanan bileşenlerde hydration
 * uyuşmazlığı oluşur. Bu hook ilk render'da (server + hydration) DAİMA false döner, mount
 * sonrası gerçek değere geçer — böylece ilk client render server ile birebir aynı kalır.
 */
export function useReducedMotionSafe(): boolean {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? !!reduce : false;
}

/**
 * Dokunmatik (coarse) pointer tespiti — mount-aware, matchMedia tek sefer ölçülür.
 * İlk render'da false (SSR ile uyumlu); pointer handler'larında her harekette matchMedia
 * çağırmak yerine bu cache'li değer okunur.
 */
export function useCoarsePointer(): boolean {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia("(pointer: coarse)");
    const sync = () => setCoarse(mql.matches);
    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, []);
  return coarse;
}
