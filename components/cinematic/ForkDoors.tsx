"use client";

/**
 * F1 yol ayrımı kartları: "Oyuncuyum" → oyuncu hikâyesine yumuşak kaydırma,
 * "İşletmeyim" → karartma geçişiyle /is-ortagi (prefetch'li).
 * 3D sahnedeki ForkGates yapılarıyla aynı kadraja oturur (sol yeşil / sağ turuncu).
 */

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { useLenisScrollTo } from "./SmoothScroll";

export default function ForkDoors() {
  const router = useRouter();
  const scrollTo = useLenisScrollTo();
  const [leaving, setLeaving] = useState(false);
  const [descending, setDescending] = useState(false);

  const goPlayer = () => {
    // Anında görsel tepki (ring) + kaydırma hemen başlar
    setDescending(true);
    scrollTo("#ozellikler");
    setTimeout(() => setDescending(false), 1600);
  };

  const goBusiness = (e: React.MouseEvent) => {
    e.preventDefault();
    if (leaving) return;
    setLeaving(true);
    setTimeout(() => router.push("/is-ortagi"), 650);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl mx-auto pointer-events-auto">
        {/* Oyuncu kapısı */}
        <button
          type="button"
          onClick={goPlayer}
          className={`group relative text-left p-6 sm:p-8 rounded-3xl border bg-pitch-deep/70 backdrop-blur-md transition-all duration-300 active:scale-[0.97] ${
            descending
              ? "border-turf-400 ring-2 ring-turf-500/50 bg-pitch-deep/90"
              : "border-turf-500/30 hover:border-turf-500/70 hover:bg-pitch-deep/85"
          }`}
          style={{ boxShadow: descending ? "0 0 60px rgba(34,197,94,0.30)" : "0 0 40px rgba(34,197,94,0.10)" }}
        >
          <div className="w-12 h-12 rounded-2xl bg-turf-500/15 border border-turf-500/25 flex items-center justify-center text-turf-400 mb-4 group-hover:bg-turf-500/25 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-white font-black text-xl sm:text-2xl mb-1.5">Oyuncuyum</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Saha kirala, rakip bul, takımını yönet. Sahaya inen yoldan devam et.
          </p>
          <span className="inline-flex items-center gap-1.5 mt-4 text-turf-400 text-sm font-bold">
            {descending ? "Sahaya iniliyor…" : "Sahaya gir"}
            <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </button>

        {/* İşletme kapısı */}
        <Link
          href="/is-ortagi"
          onClick={goBusiness}
          prefetch
          className={`group relative p-6 sm:p-8 rounded-3xl border bg-pitch-deep/70 backdrop-blur-md transition-all duration-300 active:scale-[0.97] ${
            leaving
              ? "border-ember-400 ring-2 ring-ember-500/50 bg-pitch-deep/90"
              : "border-ember-500/30 hover:border-ember-500/70 hover:bg-pitch-deep/85"
          }`}
          style={{ boxShadow: leaving ? "0 0 60px rgba(249,115,22,0.30)" : "0 0 40px rgba(249,115,22,0.10)" }}
        >
          <div className="w-12 h-12 rounded-2xl bg-ember-500/15 border border-ember-500/25 flex items-center justify-center text-ember-400 mb-4 group-hover:bg-ember-500/25 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-white font-black text-xl sm:text-2xl mb-1.5">İşletmeyim</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Halı sahanı Dimli&apos;ye taşı: rezervasyon, gelir ve müşteri yönetimi tek panelde.
          </p>
          <span className="inline-flex items-center gap-1.5 mt-4 text-ember-400 text-sm font-bold">
            Tesise gir
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Link>
      </div>

      {/* İşletme geçişi karartması */}
      <AnimatePresence>
        {leaving && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-pitch-deep pointer-events-none"
          />
        )}
      </AnimatePresence>
    </>
  );
}
