"use client";

/**
 * Canvas'ın sayfa arkasına sabitlenmiş konteyneri + boşta (idle) mount.
 * three IMPORT ETMEZ — children olarak deneyim bileşenindeki
 * dynamic(() => import(...), { ssr: false }) canvas'ı alır; ready olana kadar
 * render etmediği için chunk indirimi de idle'a ertelenir.
 *
 * - LCP korunur: ilk boyamada yalnız poster (AuroraBackground) görünür,
 *   canvas requestIdleCallback sonrası CSS fade ile gelir.
 * - aria-hidden + pointer-events-none: canvas salt dekordur; içerik DOM'da.
 */

import { useEffect, useState, type ReactNode } from "react";

interface CanvasLoaderProps {
  children: ReactNode;
  /** Canvas gelene kadar (ve arkasında) duran statik arka plan. */
  poster?: ReactNode;
}

export default function CanvasLoader({ children, poster }: CanvasLoaderProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 1500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(() => setReady(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none">
      {poster}
      {ready && (
        <div className="absolute inset-0 animate-fade-in" style={{ animationDuration: "0.9s" }}>
          {children}
        </div>
      )}
    </div>
  );
}
